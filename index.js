import fs from "fs";
import dotenv from "dotenv";
import { InferenceClient } from "@huggingface/inference";

dotenv.config();

// 1. Initialize with the modern InferenceClient
const hf = new InferenceClient(process.env.HUGGINGFACE_API_KEY);
const inputArg = process.argv[2];

async function getInput() {
  if (!inputArg) {
    console.error("❌ Please provide input text or file path.");
    process.exit(1);
  }
  if (fs.existsSync(inputArg)) return fs.readFileSync(inputArg, "utf-8");
  return inputArg;
}

async function summarize(text) {
  try {
    console.log("⏳ Processing...");

    const response = await hf.summarization({
      model: "facebook/bart-large-cnn",
      inputs: text,
      parameters: {
        max_length: 100,
        min_length: 10 // Added to ensure it generates something for short text
      },
      // THE KEY FIX: wait_for_model must be inside 'options', not 'parameters'
      options: {
        wait_for_model: true,
        use_cache: true
      }
    });

    const summary = response.summary_text || "No summary generated";
    const cleanSummary = summary.trim();

    // Logic to create Key Points (Splitting the summary)
    const words = cleanSummary.split(" ");
    const partLength = Math.ceil(words.length / 3);
    const key1 = words.slice(0, partLength).join(" ") || "N/A";
    const key2 = words.slice(partLength, partLength * 2).join(" ") || "N/A";
    const key3 = words.slice(partLength * 2).join(" ") || "N/A";

    return `
📌 Summary:
${cleanSummary}

🔑 Key Points:
1. ${key1}...
2. ${key2}...
3. ${key3}...

😊 Sentiment:
Neutral (Auto-assigned)
`;
  } catch (err) {
    console.error("❌ API Error:", err.message);
    process.exit(1);
  }
}

(async () => {
  const text = await getInput();

  // PRO TIP: Summarization models need more than 5-6 words to work properly.
  if (text.split(" ").length < 5) {
    console.warn("⚠️ Warning: Your input is very short. Summarization might look strange.");
  }

  const result = await summarize(text);
  console.log("\n--- OUTPUT ---");
  console.log(result);
})();