const API_URL = "https://michitarot.vercel.app/api/gemini";

export async function getTarotReading({
  question,
  spread
}: {
  question: string;
  spread: string;
}) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ question, spread })
  });

  if (!res.ok) {
    throw new Error("Error en la lectura del tarot");
  }

  return res.json();
}
