require('dotenv').config();

// Debug modu
const DEBUG_MODE = process.env.DEBUG_MODE === 'true' ? true : false;

// AI servisi
let ai;

// Servis import
try {
  ai = require('speed-ai');
  if (!ai) throw new Error('AI servisi boş referans döndürdü');
  console.log('✅ AI servisi başarıyla yüklendi');
} catch (error) {
  console.error("❌ AI servisi yüklenemedi:", error.message);
  if (DEBUG_MODE) console.error("Detaylı hata:", error);
  process.exit(1); // Servis yüklenemezse programdan çık
}

function temizHataMesaji(error) {
  if (!error) return "Bilinmeyen hata";
  
  if (error.message && error.message.includes("API key")) {
    return "API anahtarı hatası: API anahtarı geçerli değil veya sağlanmadı";
  }
  
  if (error.message && (error.message.includes("not a constructor") || error.message.includes("import"))) {
    return "Modül hatası: Paket yüklemesi başarısız oldu, 'npm install' komutunu tekrar çalıştırın";
  }
  
  return error.message || "Bir hata oluştu";
}

async function testOpenAI() {
  console.log("\n🔍 OPENAI TEST\n" + "=".repeat(30));
  const prompt = "Merhaba, ürün iadesini nasıl yapabilirim?";
  const apiKey = process.env.OPENAI_API_KEY;
  const model = "gpt-3.5-turbo-instruct";
  
  try {
    console.log("Prompt: ", prompt);
    
    const response = await ai.completePrompt('openai', prompt, apiKey, model, {
      temperature: 0.7,
      maxTokens: 250
    });
    
    // İstenen JSON formatına dönüştür
    const formattedResponse = {
      status: true,
      provider: "openai",
      message: response.text,
      model: response.model,
      usage: response.usage || null
    };
    
    console.log("\n✅ OPENAI YANITI");
    console.log(JSON.stringify(formattedResponse, null, 2));
    
  } catch (error) {
    const errorResponse = {
      status: false,
      provider: "openai",
      message: temizHataMesaji(error),
      error: DEBUG_MODE ? error.message : null
    };
    
    console.log("\n❌ OPENAI HATASI");
    console.log(JSON.stringify(errorResponse, null, 2));
    
    if (DEBUG_MODE) {
      console.error("Detaylı hata:", error);
    }
  }
}

async function testMistral() {
  console.log("\n🔍 MISTRAL TEST\n" + "=".repeat(30));
  const prompt = "Merhaba, ürün iadesini nasıl yapabilirim?";
  const apiKey = process.env.MISTRAL_API_KEY;
  const model = "mistral-tiny";
  
  try {
    console.log("Prompt: ", prompt);
    
    const messages = [{ role: "user", content: prompt }];
    const response = await ai.chat('mistral', messages, apiKey, model, {
      temperature: 0.7
    });
    
    // İstenen JSON formatına dönüştür
    const formattedResponse = {
      status: true,
      provider: "mistral",
      message: response.message.content,
      model: response.model,
      usage: response.usage || null
    };
    
    console.log("\n✅ MISTRAL YANITI");
    console.log(JSON.stringify(formattedResponse, null, 2));
    
  } catch (error) {
    const errorResponse = {
      status: false,
      provider: "mistral",
      message: temizHataMesaji(error),
      error: DEBUG_MODE ? error.message : null
    };
    
    console.log("\n❌ MISTRAL HATASI");
    console.log(JSON.stringify(errorResponse, null, 2));
    
    if (DEBUG_MODE) {
      console.error("Detaylı hata:", error);
    }
  }
}

async function testDeepseek() {
  console.log("\n🔍 DEEPSEEK TEST\n" + "=".repeat(30));
  const prompt = "Merhaba, ürün iadesini nasıl yapabilirim?";
  const apiKey = process.env.DEEPSEEK_API_KEY;
  const model = "deepseek-coder";
  
  try {
    console.log("Prompt: ", prompt);
    
    const response = await ai.completePrompt('deepseek', prompt, apiKey, model, {
      temperature: 0.7,
      maxTokens: 250
    });
    
    // İstenen JSON formatına dönüştür
    const formattedResponse = {
      status: true,
      provider: "deepseek",
      message: response.text,
      model: response.model,
      usage: response.usage || null
    };
    
    console.log("\n✅ DEEPSEEK YANITI");
    console.log(JSON.stringify(formattedResponse, null, 2));
    
  } catch (error) {
    const errorResponse = {
      status: false,
      provider: "deepseek",
      message: temizHataMesaji(error),
      error: DEBUG_MODE ? error.message : null
    };
    
    console.log("\n❌ DEEPSEEK HATASI");
    console.log(JSON.stringify(errorResponse, null, 2));
    
    if (DEBUG_MODE) {
      console.error("Detaylı hata:", error);
    }
  }
}

async function testAnthropicChat() {
  console.log("\n🔍 ANTHROPIC TEST\n" + "=".repeat(30));
  const prompt = "Merhaba, ürün iadesini nasıl yapabilirim?";
  const apiKey = process.env.ANTHROPIC_API_KEY;
  const model = "claude-2";
  
  try {
    console.log("Prompt: ", prompt);
    
    const messages = [{ role: "user", content: prompt }];
    const response = await ai.chat('anthropic', messages, apiKey, model, {
      temperature: 0.7,
      maxTokens: 250
    });
    
    // İstenen JSON formatına dönüştür
    const formattedResponse = {
      status: true,
      provider: "anthropic",
      message: response.message.content,
      model: response.model
    };
    
    console.log("\n✅ ANTHROPIC YANITI");
    console.log(JSON.stringify(formattedResponse, null, 2));
    
  } catch (error) {
    const errorResponse = {
      status: false,
      provider: "anthropic",
      message: temizHataMesaji(error),
      error: DEBUG_MODE ? error.message : null
    };
    
    console.log("\n❌ ANTHROPIC HATASI");
    console.log(JSON.stringify(errorResponse, null, 2));
    
    if (DEBUG_MODE) {
      console.error("Detaylı hata:", error);
    }
  }
}

async function testGemini() {
  console.log("\n🔍 GEMINI TEST\n" + "=".repeat(30));
  const prompt = "Merhaba, ürün iadesini nasıl yapabilirim?";
  const apiKey = process.env.GEMINI_API_KEY;
  const model = "gemini-2.0-flash";
  
  try {
    console.log("Prompt: ", prompt);
    
    const response = await ai.completePrompt('gemini', prompt, apiKey, model, {
      temperature: 0.7
    });
    
    // İstenen JSON formatına dönüştür
    const formattedResponse = {
      status: true,
      provider: "gemini",
      message: response.text,
      model: response.model
    };
    
    console.log("\n✅ GEMINI YANITI");
    console.log(JSON.stringify(formattedResponse, null, 2));
    
  } catch (error) {
    const errorResponse = {
      status: false,
      provider: "gemini",
      message: temizHataMesaji(error),
      error: DEBUG_MODE ? error.message : null
    };
    
    console.log("\n❌ GEMINI HATASI");
    console.log(JSON.stringify(errorResponse, null, 2));
    
    if (DEBUG_MODE) {
      console.error("Detaylı hata:", error);
    }
  }
}

async function main() {
  console.log("\n🤖 SPEED-AI TEST");
  
  try {
    await testOpenAI();
    await testMistral();
    await testDeepseek();
    await testAnthropicChat();
    await testGemini();
  } catch (error) {
    console.log("\n❌ PROGRAM HATASI");
    console.log(temizHataMesaji(error));
  }
}

main();
