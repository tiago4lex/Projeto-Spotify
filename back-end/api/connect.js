import { MongoClient } from "mongodb";
import dotenv from "dotenv";

dotenv.config(); // Carrega as variáveis do .env

const URI = process.env.MONGO_URI; // Obtém a URI do MongoDB a partir do .env

const client = new MongoClient(URI);

export const db = client.db("spotifyAula");
