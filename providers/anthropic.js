/**
 * Anthropic servis entegrasyonu
 * Claude 3 ve üst modelleri destekler
 */

async function chat(messages, apiKey, model, options = {}) {
  if (!apiKey) throw new Error("Anthropic API key is required");
  
  try {
    // Anthropic SDK'yı dinamik olarak import et
    const Anthropic = await import('@anthropic-ai/sdk').then(mod => mod.default);
    
    // Yeni Anthropic client oluştur
    const client = new Anthropic({
      apiKey: apiKey
    });
    
    // İstek parametrelerini ayarla
    const params = {
      model: model || 'claude-3-sonnet-20240229',
      max_tokens: options.maxTokens || 1024,
      messages: messages,
      temperature: options.temperature || 0.7
    };
    
    // İsteği gönder ve yanıtı al
    const response = await client.messages.create(params);
    
    return {
      message: {
        role: "assistant",
        content: response.content[0].text
      },
      model: response.model,
      usage: {
        input_tokens: response.usage?.input_tokens,
        output_tokens: response.usage?.output_tokens
      }
    };
  } catch (error) {
    console.error('Anthropic chat hatası:', error);
    
    // Daha açıklayıcı hata mesajları
    if (error.message?.includes('401')) {
      throw new Error('API anahtarı geçersiz veya yetkisiz erişim');
    } else if (error.message?.includes('429')) {
      throw new Error('Hız sınırı aşıldı, lütfen daha sonra tekrar deneyin');
    } else if (error.message?.includes('500')) {
      throw new Error('Anthropic servisi geçici bir sorun yaşıyor');
    }
    
    throw error;
  }
}

module.exports = {
  chat
};
