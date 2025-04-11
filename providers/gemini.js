/**
 * Google Gemini servis entegrasyonu
 */

async function completePrompt(prompt, apiKey, model, options = {}) {
  if (!apiKey) throw new Error("Gemini API key is required");
  
  try {
    const { GoogleGenerativeAI } = require('@google/generative-ai');
    const genAI = new GoogleGenerativeAI(apiKey);
    
    // Normal metin yanıt almak için yapılandırma
    const generationConfig = {
      temperature: options.temperature || 0.7,
      topP: options.topP || 0.8,
    };
    
    const geminiModel = genAI.getGenerativeModel({
      model: model || 'gemini-pro',
      generationConfig
    });
    
    const result = await geminiModel.generateContent({
      contents: [{ role: "user", parts: [{ text: prompt }] }]
    });
    
    const response = await result.response;
    const text = response.text();
    
    return {
      text: text,
      model: model || 'gemini-pro'
    };
  } catch (error) {
    console.error('Gemini completePrompt hatası:', error);
    throw error;
  }
}

module.exports = {
  completePrompt
};
