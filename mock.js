/**
 * AI servisleri için mock implementation
 * API anahtarlarınız yoksa veya test amaçlı kullanılabilir
 */

const mockResponses = {
  openai: "Ürün iadesi yapmak için aşağıdaki adımları takip edebilirsiniz:\n\n1. Hesabınıza giriş yapın\n2. Siparişlerim bölümüne gidin\n3. İade etmek istediğiniz ürünü seçin\n4. İade Talebi Oluştur butonuna tıklayın\n5. İade nedeninizi seçin ve gerekli bilgileri doldurun\n6. İade talebinizi gönderin\n\nİadeniz onaylandıktan sonra, ürünü anlaşmalı kargo şirketiyle göndermeniz gerekecektir. Ödemenizin iade edilmesi genellikle 7-14 iş günü içinde gerçekleşir.",
  
  mistral: "Ürün iadesini yapmak için izlemeniz gereken adımlar şunlardır:\n\n1. Öncelikle ürünü satın aldığınız platformun web sitesine veya mobil uygulamasına giriş yapın.\n2. Hesabım veya Siparişlerim bölümüne gidin.\n3. İade etmek istediğiniz siparişi bulun ve seçin.\n4. İade veya İade Talebi butonuna tıklayın.\n5. İade nedeninizi seçin ve istenilen bilgileri doldurun.\n6. İade talebinizi onaylayın.\n\nOnay aldıktan sonra genellikle size bir kargo kodu verilir veya anlaşmalı kargo şirketinden bilgi alırsınız. Ürünü orijinal ambalajında ve hasarsız şekilde göndermeniz önemlidir. Para iadesi genellikle ürünün depoya ulaşması ve kontrol edilmesi sonrasında yapılır.",
  
  deepseek: "Ürün iadesini gerçekleştirmek için şu adımları izleyebilirsiniz:\n\n1. Müşteri hesabınıza giriş yapın.\n2. Sipariş geçmişinizi kontrol edin ve iade etmek istediğiniz siparişi bulun.\n3. İade seçeneğini tıklayın ve iade nedeninizi belirtin.\n4. Sistemin size vereceği iade kodunu not alın.\n5. Ürünü orijinal ambalajıyla birlikte hazırlayın.\n6. Anlaşmalı kargo firmasıyla ürünü gönderin veya kargo ücreti sizin tarafınızdan karşılanacaksa tercih ettiğiniz kargo firmasını kullanın.\n\nİade sürecinizi takip etmek için hesabınızı kontrol edebilir veya müşteri hizmetleriyle iletişime geçebilirsiniz. Para iadesi genellikle ürünün incelenmesinden sonra 3-10 iş günü içinde gerçekleştirilir.",
  
  anthropic: "Ürün iadesini gerçekleştirmek için izlemeniz gereken adımlar şunlardır:\n\n1. İlk olarak, alışveriş yaptığınız web sitesi veya mağazanın iade politikalarını kontrol edin. Çünkü her mağazanın farklı iade süreçleri olabilir.\n\n2. Online bir alışveriş yapmışsanız:\n   - Müşteri hesabınıza giriş yapın\n   - Siparişlerim veya sipariş geçmişi bölümüne gidin\n   - İade etmek istediğiniz siparişi bulun\n   - 'İade Talebi Oluştur' veya benzeri bir butona tıklayın\n   - İade nedeninizi seçin ve gerekli bilgileri doldurun\n\n3. Fiziksel bir mağazadan alışveriş yapmışsanız:\n   - Ürünü fişi/faturası ile birlikte mağazaya götürün\n   - Mağaza yetkilisine iade etmek istediğinizi belirtin\n\n4. Online alışverişlerde iade onaylandığında genellikle bir kargo etiketi veya kodu alırsınız. Ürünü bu etiketle göndermeniz gerekir.\n\n5. Ürünün orijinal ambalajında ve kullanılmamış durumda olması genellikle iade için bir şarttır.\n\n6. İade işleminiz kabul edildikten sonra, ödeme iadeniz genellikle orijinal ödeme yönteminize yapılır. Bu süreç banka veya kredi kartı ödemelerinde 3-14 gün sürebilir.",
  
  gemini: "Ürün iadesini yapmak için şu adımları izleyebilirsiniz:\n\n1. Öncelikle alışveriş yaptığınız platformun (e-ticaret sitesi, mağaza vb.) iade politikalarını kontrol edin.\n\n2. Çevrimiçi alışveriş yaptıysanız:\n   - Hesabınıza giriş yapın\n   - Siparişlerim veya sipariş geçmişi bölümüne gidin\n   - İade etmek istediğiniz ürünü bulun ve iade seçeneğini tıklayın\n   - İade nedeninizi belirtin ve gerekli bilgileri doldurun\n   - İade talebinizi onaylayın\n\n3. Fiziksel mağazadan alışveriş yaptıysanız:\n   - Ürünü, faturası/fişi ile birlikte mağazaya götürün\n   - Mağaza görevlisine iade talebinizi belirtin\n\n4. Online alışverişlerde genellikle iade onaylandıktan sonra size bir kargo kodu veya etiketi gönderilir. Bu kodu/etiketi kullanarak ürünü anlaşmalı kargo firması ile göndermeniz gerekir.\n\n5. Ürünün orijinal ambalajında, kullanılmamış ve hasarsız olması genellikle iade koşulları arasındadır.\n\n6. İade işleminiz tamamlandıktan sonra, ödeme iadesi genellikle orijinal ödeme yönteminize (kredi kartı, banka hesabı vb.) yapılır. Bu işlem genellikle 3-14 iş günü içerisinde tamamlanır.\n\n7. İade işleminizin durumunu müşteri hesabınızdan takip edebilirsiniz. Herhangi bir sorun yaşarsanız müşteri hizmetleriyle iletişime geçebilirsiniz."
};

// Gecikme simülasyonu için yardımcı fonksiyon
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

module.exports = {
  openai: {
    completePrompt: async (prompt, apiKey, model, options) => {
      await delay(700); // OpenAI'nin gerçek yanıt süresini simüle etmek için gecikme
      
      return {
        text: mockResponses.openai,
        model: model || 'gpt-3.5-turbo-instruct',
        usage: {
          prompt_tokens: 15,
          completion_tokens: 189,
          total_tokens: 204
        }
      };
    }
  },
  
  mistral: {
    chat: async (messages, apiKey, model, options) => {
      await delay(500);
      
      return {
        message: {
          role: "assistant",
          content: mockResponses.mistral
        },
        model: model || 'mistral-tiny',
        usage: {
          prompt_tokens: 12,
          completion_tokens: 194,
          total_tokens: 206
        }
      };
    }
  },
  
  deepseek: {
    completePrompt: async (prompt, apiKey, model, options) => {
      await delay(800);
      
      return {
        text: mockResponses.deepseek,
        model: model || 'deepseek-coder',
        usage: {
          prompt_tokens: 14,
          completion_tokens: 191,
          total_tokens: 205
        }
      };
    }
  },
  
  anthropic: {
    chat: async (messages, apiKey, model, options) => {
      await delay(900); // Anthropic'in yanıt süresini simüle etmek için gecikme
      
      return {
        message: {
          role: "assistant",
          content: mockResponses.anthropic
        },
        model: model || 'claude-3-sonnet-20240229',
        usage: {
          input_tokens: 45,
          output_tokens: 210
        }
      };
    }
  },
  
  gemini: {
    completePrompt: async (prompt, apiKey, model, options) => {
      await delay(600);
      
      return {
        text: mockResponses.gemini,
        model: model || 'gemini-2.0-flash'
      };
    }
  }
};
