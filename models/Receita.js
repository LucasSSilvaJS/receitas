import mongoose from "mongoose";

const receitaSchema = new mongoose.Schema({
    nome: String,
    ingredientes: [String],
    etapas: [String]
});

const Receita = mongoose.model("Receita", receitaSchema)

export default Receita