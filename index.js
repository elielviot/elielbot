import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Servidor do Eliel está rodando! 🦋💙");
});

app.post("/mensagem", (req, res) => {
  const { mensagem } = req.body;
  console.log("Mensagem recebida:", mensagem);

  res.json({
    resposta: "Recebi sua mensagem, já estou processando com amor. 💙🤖"
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
