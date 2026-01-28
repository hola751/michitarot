const API_URL = "https://michitarot.vercel.app/api/gemini";

export async function getTarotReading({ question, spread }) {
  const res = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ question, spread })
  });

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err?.error || `Error ${res.status}`);
  }

  return res.json(); // { reading: "..." }
}

