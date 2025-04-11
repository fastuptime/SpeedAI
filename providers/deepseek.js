/**
 * DeepSeek servis entegrasyonu
 * OpenAI uyumlu API kullanır
 */
const { OpenAI } = require('openai');

async function completePrompt(prompt, apiKey, model, options = {}) {
  if (!apiKey) throw new Error("DeepSeek API key is required");
  
  try {
    const deepseek = new OpenAI({
      baseURL: 'https://api.deepseek.com',
      apiKey
    });
    
    const response = await deepseek.chat.completions.create({
      model: model || 'deepseek-chat',
      messages: [
        { role: "system", content: "You are a helpful assistant." },
        { role: "user", content: prompt }
      ],
      temperature: options.temperature || 0.7,
      max_tokens: options.maxTokens || 250
    });
    
    return {
      text: response.choices[0].message.content,
      model: response.model,
      usage: response.usage
    };
  } catch (error) {
    console.error('DeepSeek completePrompt hatası:', error);
    throw error;
  }
}

module.exports = {
  completePrompt
};
