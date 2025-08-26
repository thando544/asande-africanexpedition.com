import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import bookingsRouter from "./routes/bookings.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());

app.use(
  cors({
    origin: process.env.CLIENT_ORIGIN?.split(",") || "*",
    methods: ["GET", "POST", "OPTIONS"],
  })
);

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/bookings", bookingsRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(
    `Server running on https://asande-africanexpedition.vercel.app:${PORT}`
  )
);
