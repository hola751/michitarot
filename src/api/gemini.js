const ALLOWED_ORIGINS = [
  "https://hola751.github.io", // tu GitHub Pages (dominio raíz)
  "http://localhost:5173"      // dev local
];
const API_URL = "https://michitarot.vercel.app/api/gemini"; // o el que quedó activo

export async function getTarotReading({ question, spread }) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, spread })
  });
  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || `Error ${res.status}`);
  }
  return res.json(); // { ok: true, reading: "..." }
}
import { getTarotReading } from "./api/gemini";

async function handleAsk() {
  setLoading(true);
  setReading("");
  try {
    const { reading } = await getTarotReading({
      question: userQuestion,
      spread: selectedSpread
    });
    setReading(reading);
  } catch (e) {
    console.error(e);
    alert("Hubo un problema con la lectura de tarot.");
  } finally {
    setLoading(false);
  }
}
