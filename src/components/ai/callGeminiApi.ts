import { GoogleGenAI } from "@google/genai"

const apiKey = process.env.GEMINI_API_KEY;
const ai = new GoogleGenAI({ apiKey: apiKey })

export default async function CallGeminiApi(prompt: string) {
  const interaction = await ai.interactions.create({
    model: "gemini-3.1-flash-lite", // ? use gemma-4-31b-it for most rpd, and gemini-3.1-flash-lite for best results
    input: prompt,
  });
  return interaction.output_text
}