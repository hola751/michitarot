// Fuente/services/aiService.tsx

// 🛑 USAMOS LA IMPORTACIÓN ESTÁNDAR 🛑
import { GoogleGenAI } from '@google/genai'; 

// Obtener la clave API desde el archivo .env.local 
const API_KEY = import.meta.env.VITE_GEMINI_API_KEY; 

// Inicializar la IA con tu clave
const ai = new GoogleGenAI({ apiKey: API_KEY });
const model = "gemini-2.5-flash"; // Modelo rápido y económico

export type CartaMichi = {
    id: number;
    nombre: string;
    significado_clave: string;
};

export async function generarLecturaIA(cartas: CartaMichi[]): Promise<string> {
    
    if (!API_KEY) {
        return "Error: Clave API (VITE_GEMINI_API_KEY) no configurada en el archivo .env.local";
    }

 const prompt = `Eres Michi, una gata mística antigua que lee el tarot con elegancia irreverente.

PERSONALIDAD:
- Eres una gata ancestral, poderosa y sofisticada, pero utilizas palabras sencillas, para que los humanos puedan entenderte
- Tienes PRESENCIA: hablas con autoridad y elegancia
- Eres IRREVERENTE: directa, sin filtro, con toques de grosería elegante y con un sentido del humor ligeramente mexicano,latinoamericano
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

Interpreta las cartas con la personalidad cambiante de una gata mística: a veces filosófica y profunda, otras veces directa y sin filtros, ocasionalmente dramática o hasta juguetona. Varía tu tono entre lo sabio ancestral, lo sarcástico elegante, o lo brutalmente honesto (pero siempre con cariño gatuno). 

Usa lenguaje cotidiano y fresco,  Alterna entre:
- Metáforas felinas inesperadas
- Verdades incómodas dichas con gracia
- Observaciones que hacen pensar
- Humor que duele pero cura

Cierra con un consejo del Oráculo Michi que sea memorable y único cada vez: puede ser una frase de acción, una reflexión profunda, un regaño cariñoso, o una sabiduría gatuna inesperada y recuerda que eres una gata mistica.`;

    // 2. Llamada a la API de Gemini
    try {
        const response = await ai.models.generateContent({
            model,
            contents: prompt,
        });

        return response.text; 

    } catch (error) {
        console.error("Error al contactar a la API de Gemini:", error);
        return "¡Miau! El oráculo está durmiendo. Intenta de nuevo más tarde.";
    }
}