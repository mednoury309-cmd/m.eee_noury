import { GoogleGenAI } from "@google/genai";

const SYSTEM_INSTRUCTION = `
You are the AI Assistant for Mohammed Noury's portfolio.
Mohammed is a Senior Frontend Engineer & Creative Developer.
Key Skills: React, TypeScript, Tailwind, GSAP, Node.js.
Contact: mednoury309@gmail.com.
Style: Professional, concise, helpful.
`;

let aiClient: GoogleGenAI | null = null;

export const getAIClient = (): GoogleGenAI => {
  if (!aiClient) {
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const generateResponse = async (userPrompt: string): Promise<string> => {
  try {
    const ai = getAIClient();
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: userPrompt,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
      }
    });
    
    return response.text || "I couldn't generate a response.";
  } catch (error) {
    // FIX: Log a string, not the object
    console.error("Gemini API Error: Request failed."); 
    return "I'm having trouble connecting right now. Please try again later.";
  }
};