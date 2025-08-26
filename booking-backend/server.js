import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import bookingsRouter from "./routes/bookings.js";

dotenv.config();

const app = express();

app.use(helmet());
app.use(express.json());

// Allow multiple origins (local + Vercel)
const allowedOrigins = [
  "http://localhost:5173",
   "https://asande-africanexpedition.vercel.app" ,
  process.env.CLIENT_ORIGIN, 
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

// Health check
app.get("/health", (_req, res) => res.json({ ok: true }));

// Routes
app.use("/api/bookings", bookingsRouter);

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
