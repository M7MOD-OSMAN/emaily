import express from "express";
import "./services/passport.js";
import "./routes/authRoutes.js";
import { authRoutes } from "./routes/authRoutes.js";

const app = express();

authRoutes(app);

const PORT = 5000;
app.listen(PORT);
