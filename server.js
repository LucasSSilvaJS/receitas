import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import receitasRoutes from "./routes/receitas.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB conectado!");
} catch (error) {
    console.error("Erro ao conectar ao MongoDB:", error);
}

app.use("/receitas", receitasRoutes)

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));