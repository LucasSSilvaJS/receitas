import express from "express";
import Receita from "../models/Receita.js";

const router = express.Router()

router.post("/", async (req, res) => {
    try {
        const receita = req.body;
        const novaReceita = await Receita.create(receita);
        res.status(201).json(novaReceita);
    } catch (error) {
        res.status(500).json({ error: "Erro ao criar receita" });
    }
});

router.get("/", async (req, res) => {
    try {
        const receitas = await Receita.find();
        res.json(receitas);
    } catch (error) {
        res.status(500).json({ error: "Erro ao buscar receitas" });
    }
});

export default router;