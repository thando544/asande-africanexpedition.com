import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import bookingsRouter from "./routes/bookings.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());

const allowedOrigins = [
  "http://localhost:5173/api/bookings",
  "https://booking-frontend-five.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
      } else {
        callback(new Error("Not allowed by CORS"));
      }
    },
    methods: ["GET", "POST", "OPTIONS"],
    credentials: true,
  })
);

app.get("/health", (_req, res) => res.json({ ok: true }));

app.use("/api/bookings", bookingsRouter);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
