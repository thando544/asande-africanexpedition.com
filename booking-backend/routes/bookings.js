import { Router } from "express";
import { z } from "zod";
import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";
import { sendBookingEmails } from "../mailer.js";

const router = Router();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const storageDir = path.join(__dirname, "..", "storage");
const storageFile = path.join(storageDir, "bookings.json");

async function ensureStorage() {
  try {
    await fs.mkdir(storageDir, { recursive: true });
    await fs.access(storageFile);
  } catch {
    await fs.writeFile(storageFile, JSON.stringify([]));
  }
}

const BookingSchema = z.object({
  activityId: z.number(),
  activityName: z.string().min(2),
  date: z.string().min(8),
  people: z.number().int().min(1).max(20),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().optional().nullable(),
  notes: z.string().optional().nullable(),
});

function makeRef() {
  const d = new Date();
  const ymd = d.toISOString().slice(0, 10).replace(/-/g, "");
  const rand = Math.random().toString(36).slice(2, 8).toUpperCase();
  return `VF-${ymd}-${rand}`;
}

router.post("/", async (req, res) => {
  await ensureStorage();
  const parsed = BookingSchema.safeParse({
    ...req.body,
    activityId: Number(req.body.activityId),
    people: Number(req.body.people),
  });

  if (!parsed.success) {
    return res.status(400).json({
      ok: false,
      message: "Invalid booking data",
      issues: parsed.error.issues,
    });
  }

  const booking = {
    ...parsed.data,
    reference: makeRef(),
    createdAt: new Date().toISOString(),
  };

  const raw = await fs.readFile(storageFile, "utf-8");
  const list = JSON.parse(raw);
  list.push(booking);
  await fs.writeFile(storageFile, JSON.stringify(list, null, 2));

  try {
    await sendBookingEmails(booking);
  } catch (err) {
    console.error("Email error:", err);

    return res.status(201).json({ ok: true, booking, emailSent: false });
  }

  res.status(201).json({ ok: true, booking, emailSent: true });
});

export default router;
