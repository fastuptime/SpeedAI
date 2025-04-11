/**
 * AI servisleri ana modülü
 * Mock Mode desteği ile
 */

const MOCK_MODE = process.env.MOCK_MODE === 'true';
const DEBUG_MODE = process.env.DEBUG_MODE === 'true';

// Eğer mock mode aktifse, mock servisleri yükle
let providers;

if (MOCK_MODE) {
  console.log('⚠️ MOCK MODE aktif: Gerçek API yerine test verileri kullanılıyor');
  providers = require('./mock');
} else {
  // Service providers
  providers = {};

  // Hata yakalama ile her sağlayıcıyı yüklemeye çalışırız
  try {
    providers.openai = require('./providers/openai');
  } catch (error) {
    if (DEBUG_MODE) console.error('OpenAI provider yüklenemedi:', error.message);
  }

  try {
    providers.mistral = require('./providers/mistral');
  } catch (error) {
    if (DEBUG_MODE) console.error('Mistral provider yüklenemedi:', error.message);
  }

  try {
    providers.deepseek = require('./providers/deepseek');
  } catch (error) {
    if (DEBUG_MODE) console.error('DeepSeek provider yüklenemedi:', error.message);
  }

  try {
    providers.anthropic = require('./providers/anthropic');
  } catch (error) {
    if (DEBUG_MODE) console.error('Anthropic provider yüklenemedi:', error.message);
  }

  try {
    providers.gemini = require('./providers/gemini');
  } catch (error) {
    if (DEBUG_MODE) console.error('Gemini provider yüklenemedi:', error.message);
  }
}

// Ana modül fonksiyonları
module.exports = {
  completePrompt: async (provider, prompt, apiKey, model, options) => {
    if (DEBUG_MODE) console.log(`${provider} için completePrompt çağrısı yapılıyor`);
    
    if (!providers[provider] || !providers[provider].completePrompt) {
      throw new Error(`Provider ${provider} için completePrompt metodu bulunamadı`);
    }
    return await providers[provider].completePrompt(prompt, apiKey, model, options);
  },
  
  chat: async (provider, messages, apiKey, model, options) => {
    if (DEBUG_MODE) console.log(`${provider} için chat çağrısı yapılıyor`);
    
    if (!providers[provider] || !providers[provider].chat) {
      throw new Error(`Provider ${provider} için chat metodu bulunamadı`);
    }
    return await providers[provider].chat(messages, apiKey, model, options);
  }
};
