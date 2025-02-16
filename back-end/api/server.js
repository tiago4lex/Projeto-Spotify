import express from "express";
import { db } from "./connect.js";
import cors from "cors";

const app = express();
const PORT = 3000;

app.use(cors());
// app.use(express.json());

app.get("/", (req, res) => {
    res.send("Só vamos trabalhar com os endpoints '/artists' e '/songs'");
});

app.get("/artists", async (req, res) => {
    res.send(await db.collection("artists").find({}).toArray());
});

app.get("/songs", async (req, res) => {
    res.send(await db.collection("songs").find({}).toArray());
});


app.listen(PORT, () => {
    console.log(`Servidor escutando na porta ${PORT}`);
})