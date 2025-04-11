/**
 * OpenAI servis entegrasyonu
 */
const { OpenAI } = require('openai');

async function completePrompt(prompt, apiKey, model, options = {}) {
  if (!apiKey) throw new Error("OpenAI API key is required");
  
  try {
    const openai = new OpenAI({ apiKey });
    
    const response = await openai.completions.create({
      model: model || 'gpt-3.5-turbo-instruct',
      prompt,
      max_tokens: options.maxTokens || 250,
      temperature: options.temperature || 0.7
    });
    
    return {
      text: response.choices[0].text.trim(),
      model: response.model,
      usage: response.usage
    };
  } catch (error) {
    console.error('OpenAI completePrompt hatası:', error);
    throw error;
  }
}

module.exports = {
  completePrompt
};
