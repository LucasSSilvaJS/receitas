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

router.delete("/:id", async (req, res) => {
    try {
        const { id } = req.params;
        const receitaDeletada = await Receita.findByIdAndDelete(id);

        if (!receitaDeletada) {
            return res.status(404).json({ error: "Receita não encontrada" });
        }

        res.json({ message: "Receita deletada com sucesso" });
    } catch (error) {
        res.status(500).json({ error: "Erro ao deletar receita" });
    }
});

export default router;