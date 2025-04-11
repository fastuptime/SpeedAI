# 🚀 SpeedAI

[![Version](https://img.shields.io/badge/version-1.0.0-blue.svg)](package.json)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](LICENSE)
[![GitHub](https://img.shields.io/github/stars/fastuptime/SpeedAI?style=social)](https://github.com/fastuptime/SpeedAI)

## 📋 Proje Hakkında

SpeedAI, farklı yapay zeka servislerini tek bir arayüzde test etmenizi ve karşılaştırmanızı sağlayan bir NPM modülüdür. OpenAI, Mistral AI, Anthropic ve Google'ın generatif AI servislerini hızlı ve kolay bir şekilde kullanabilirsiniz.

## 🧩 Desteklenen AI Servisleri

- 🔷 **OpenAI** - GPT modelleri
- 🔶 **Mistral AI** - Mistral modelleri
- 🟣 **Anthropic** - Claude modelleri
- 🟢 **Google** - Generative AI modelleri

## 🔧 Kurulum

```bash
# NPM üzerinden yükleme
npm install speed-ai

# Ya da repoyu klonlama
git clone https://github.com/fastuptime/SpeedAI.git
cd SpeedAI
npm install
```

## ⚙️ Yapılandırma

`.env` dosyasında ya da doğrudan yapılandırma nesnesi aracılığıyla API anahtarlarınızı belirleyin:

```
OPENAI_API_KEY=your_openai_api_key
MISTRAL_API_KEY=your_mistral_api_key
ANTHROPIC_API_KEY=your_anthropic_api_key
GOOGLE_API_KEY=your_google_api_key
```

## 🚀 Kullanım

### Modül olarak kullanım

```javascript
const SpeedAI = require('speed-ai');

// Yapılandırma ile başlatma
const ai = new SpeedAI({
  openai: {
    apiKey: process.env.OPENAI_API_KEY,
  },
  mistral: {
    apiKey: process.env.MISTRAL_API_KEY,
  },
  anthropic: {
    apiKey: process.env.ANTHROPIC_API_KEY,
  },
  google: {
    apiKey: process.env.GOOGLE_API_KEY,
  }
});

// Veya .env dosyasını otomatik yükleyerek basit başlatma
const ai = new SpeedAI();
```

## 📋 API Kullanımı

### OpenAI Servisi

```javascript
const { openaiService } = require('./services');

async function testOpenAI() {
  const response = await openaiService.generateText("Merhaba dünya");
  console.log(response);
}
```

### Mistral AI Servisi

```javascript
const { mistralService } = require('./services');

async function testMistral() {
  const response = await mistralService.generateText("Merhaba dünya");
  console.log(response);
}
```

### Anthropic Servisi

```javascript
const { anthropicService } = require('./services');

async function testAnthropic() {
  const response = await anthropicService.generateText("Merhaba dünya");
  console.log(response);
}
```

### Google AI Servisi

```javascript
const { googleService } = require('./services');

async function testGoogle() {
  const response = await googleService.generateText("Merhaba dünya");
  console.log(response);
}
```

### Karşılaştırmalı Kullanım

```javascript
const SpeedAI = require('speed-ai');
const ai = new SpeedAI();

async function compareModels() {
  const prompt = "Küresel ısınmanın etkileri nelerdir?";
  
  // Tüm servislerden yanıt alma
  const results = await ai.compareAll(prompt);
  console.log(results);
  
  // Ya da belirli servisleri karşılaştırma
  const comparison = await ai.compare(['openai', 'anthropic'], prompt);
  console.log(comparison);
}
```

## 📊 Servis Karşılaştırması

| Servis | Hız | Doğruluk | Maliyet | Özellikler |
|--------|-----|----------|---------|------------|
| OpenAI | ⭐⭐⭐⭐ | ⭐⭐⭐⭐⭐ | $$$$ | Geniş model yelpazesi |
| Mistral AI | ⭐⭐⭐⭐⭐ | ⭐⭐⭐⭐ | $$$ | Hızlı yanıt süresi |
| Anthropic | ⭐⭐⭐ | ⭐⭐⭐⭐⭐ | $$$$ | Güvenli içerik üretimi |
| Google | ⭐⭐⭐⭐ | ⭐⭐⭐⭐ | $$$ | Geniş bilgi tabanı |

## 📂 Proje Yapısı

```
speed-ai/
├── services/
│   ├── ai/
│   │   ├── openai.js       # OpenAI entegrasyonu
│   │   ├── mistral.js      # Mistral AI entegrasyonu
│   │   ├── anthropic.js    # Anthropic entegrasyonu
│   │   ├── google.js       # Google AI entegrasyonu
│   │   └── index.js        # Servis birleştirici
│   └── index.js            # Ana servis dışa aktarımı
├── examples/               # Örnek kullanımlar
├── tests/                  # Test dosyaları
├── .env                    # Ortam değişkenleri
├── .env.example            # Örnek ortam değişkenleri
├── package.json            # Proje bağımlılıkları
└── README.md               # Bu dosya
```

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır.

## 👥 Katkıda Bulunma

1. Bu repoyu forklayın (https://github.com/fastuptime/SpeedAI)
2. Özellik dalı oluşturun (`git checkout -b yeni-ozellik`)
3. Değişikliklerinizi commit edin (`git commit -am 'Yeni özellik eklendi'`)
4. Dalınızı push edin (`git push origin yeni-ozellik`)
5. Bir Pull Request oluşturun

## 🧑‍💻 Geliştirici

[Fast Uptime](https://github.com/fastuptime)

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! ⭐
