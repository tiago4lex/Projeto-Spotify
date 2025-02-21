import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis do .env

const URI = process.env.MONGO_URI;

if (!URI) {
  throw new Error("❌ ERRO: A variável MONGO_URI não está definida no .env");
}

const client = new MongoClient(URI);

try {
  await client.connect(); // Conecta ao MongoDB
  console.log("✅ Conectado ao MongoDB com sucesso!");
} catch (error) {
  console.error("❌ Erro ao conectar ao MongoDB:", error);
}

export const db = client.db("spotifyAula");
