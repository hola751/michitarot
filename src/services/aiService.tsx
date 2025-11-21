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

    // 1. Construir el Prompt Detallado
    const prompt = `Eres el Oráculo Michi, un sabio gato místico y juguetón. Genera una lectura de tarot de tres cartas con un tono misterioso, conciso y enfocado en la vida de un gato (siesta, comida, juegos, mimos). 
    
    Usa el formato: [Pasado], [Presente], [Futuro] y termina con un breve resumen.
    
    Las cartas y sus posiciones son:
    1. Pasado: ${cartas[0].nombre} (${cartas[0].significado_clave})
    2. Presente: ${cartas[1].nombre} (${cartas[1].significado_clave})
    3. Futuro: ${cartas[2].nombre} (${cartas[2].significado_clave})

    Deseo una respuesta enfocada en el estilo de un místico Michi.`;

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