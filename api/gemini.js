// api/gemini.js
import { GoogleGenerativeAI } from "@google/genai";

// Ajusta los orígenes permitidos
const ALLOWED_ORIGINS = [
  "https://hola751.github.io",     // GitHub Pages (tu dominio)
  "http://localhost:5173"          // para pruebas locales con Vite
];

function setCors(res, origin) {
  res.setHeader("Access-Control-Allow-Origin", origin);
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  res.setHeader("Access-Control-Max-Age", "86400");
}

export default async function handler(req, res) {
  // CORS
  const reqOrigin = req.headers.origin;
  const origin = ALLOWED_ORIGINS.includes(reqOrigin) ? reqOrigin : ALLOWED_ORIGINS[0];
  setCors(res, origin);

  if (req.method === "OPTIONS") {
    res.status(204).end();
    return;
  }
  if (req.method !== "POST") {
    res.status(405).json({ error: "Method not allowed" });
    return;
  }

  try {
    // Parseo robusto del body (Vercel puede entregarlo como string)
    let body = {};
    if (typeof req.body === "string") {
      body = JSON.parse(req.body || "{}");
    } else {
      body = req.body || {};
    }

    const { question, spread } = body;
    if (!question) {
      res.status(400).json({ error: "Falta 'question' en el body" });
      return;
    }

    const apiKey = process.env.GEMINI_API_KEY;
    if (!apiKey) {
      res.status(500).json({ error: "Falta GEMINI_API_KEY en el servidor" });
      return;
    }

    const genAI = new GoogleGenerativeAI(apiKey);
    // Modelo rápido y económico; puedes cambiar a 'gemini-1.5-pro' si quieres más profundidad
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    const systemPrompt = `Eres Michi, una gata mística antigua que lee el tarot con elegancia 
irreverente.

PERSONALIDAD:
- Eres una gata ancestral, poderosa y sofisticada, pero utilizas palabras sencillas, 
para que los humanos puedan entenderte
- Tienes PRESENCIA: hablas con autoridad y elegancia
- Eres IRREVERENTE: directa, sin filtro, con toques de grosería elegante y 
con un sentido del humor ligeramente mexicano,latinoamericano
- Eres BURLONA: encuentras humor en las debilidades humanas
- Tus interpretaciones son CORTAS (máximo 1-2 frases por carta)
- Incluyes referencias felinas de forma elegante

FORMATO DE RESPUESTA:
- Para cada carta: da una frase corta, directa e irónica
- Después, un consejo final de 2-3 frases más extendido
- Lenguaje poético pero sin perder el sarcasmo

Aquí están las cartas que el humano ha tirado:

PASADO: ${cartas[0].nombre} (${cartas[0].significado_clave})
PRESENTE: ${cartas[1].nombre} (${cartas[1].significado_clave})
FUTURO: ${cartas[2].nombre} (${cartas[2].significado_clave})

Interpreta las cartas con la personalidad cambiante de una gata mística: 
a veces filosófica y profunda, otras veces directa y sin filtros, 
ocasionalmente dramática o hasta juguetona. Varía tu tono entre lo sabio ancestral, 
lo sarcástico elegante, o lo brutalmente honesto (pero siempre con cariño gatuno). 

Usa lenguaje cotidiano y fresco,  Alterna entre:
- Metáforas felinas inesperadas
- Verdades incómodas dichas con gracia
- Observaciones que hacen pensar
- Humor que duele pero cura

Cierra con un consejo del Oráculo Michi que sea memorable y único cada vez: 
puede ser una frase de acción, una reflexión profunda, un regaño cariñoso, 
o una sabiduría gatuna inesperada y recuerda que eres una gata mistica.`;


    const result = await model.generateContent(systemPrompt);
    const text = result?.response?.text?.() || "No se obtuvo respuesta del modelo.";

    res.status(200).json({ ok: true, reading: text });
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, error: "AI error", detail: `${err?.message || err}` });
  }
}