import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/auth.routes.js";

dotenv.config();

const app = express();

app.use(express.json());

app.get("/", (req, res) => {
    res.send("API funcionando");
    });
app.use("/api/auth", authRoutes);

app.listen(process.env.PORT, () => {
  console.log("Servidor en dirección http://localhost:" + process.env.PORT);
});