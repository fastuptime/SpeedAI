/**
 * Mistral AI servis entegrasyonu
 */

// ESM modül olarak import ediyoruz (dinamik import kullanarak)
async function chat(messages, apiKey, model, options = {}) {
  if (!apiKey) throw new Error("Mistral API key is required");
  
  try {
    // Dinamik olarak import ediyoruz
    const mistral = await import('@mistralai/mistralai');
    const MistralClient = mistral.default || mistral.MistralClient;
    
    const client = new MistralClient(apiKey);
    
    const response = await client.chat({
      model: model || 'mistral-tiny',
      messages,
      temperature: options.temperature || 0.7
    });
    
    // Yanıt içinde choices[0].message olduğundan emin ol
    if (!response || !response.choices || !response.choices[0]) {
      throw new Error("Mistral API'den geçersiz yanıt alındı");
    }
    
    return {
      message: response.choices[0].message,
      model: response.model,
      usage: response.usage
    };
  } catch (error) {
    console.error('Mistral chat hatası:', error);
    
    // 401 hatası durumunda API anahtarı hatası olarak belirt
    if (error.status === 401 || (error.response && error.response.status === 401)) {
      throw new Error("API anahtarı hatası: Mistral API anahtarı geçersiz.");
    }
    
    throw error;
  }
}

module.exports = {
  chat
};
