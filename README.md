\# AI Text Summarizer CLI



\## 📌 Overview



This is a simple command-line tool that converts unstructured text into a structured summary using a Large Language Model (LLM).



The tool extracts:



\* One-sentence summary

\* Three key points

\* Sentiment (positive / neutral / negative)



\---



\## ⚙️ Setup Instructions



1\. Clone the repository:



```

git clone <your-repo-link>

cd ai-summary-tool

```



2\. Install dependencies:



```

npm install

```



3\. Create a `.env` file:



```

HUGGINGFACE\_API\_KEY=your\_api\_key\_here

```



\---



\## ▶️ Usage



\### Run with direct text:



```

node index.js "Your input text here"

```



\### Run with file input:



```

node index.js input.txt

```



\---



\## 📊 Example Output



```

📌 Summary:

Artificial Intelligence is rapidly evolving across industries.



🔑 Key Points:

1\. AI is growing quickly

2\. It impacts healthcare, finance, and education

3\. It improves efficiency and personalization



😊 Sentiment:

Neutral

```



\---



\## 🤖 LLM Used



\* \*\*Hugging Face (facebook/bart-large-cnn)\*\*



\### Why this model?



\* Free to use (no billing required)

\* Reliable for summarization tasks

\* Easy API integration



\---



\## 🧠 Prompt / Design Decisions



\* Used direct text input for summarization model

\* Structured output was created programmatically

\* Key points are derived by splitting summary text

\* Sentiment is assigned as neutral due to model limitations



\---



\## ⚖️ Trade-offs



\* Free model does not support structured JSON output

\* Key points are approximations, not semantic extraction

\* Sentiment is not model-generated



\---



\## 🚀 Future Improvements



\* Use GPT/OpenAI for better structured output

\* Add real sentiment analysis

\* Improve key point extraction

\* Add batch file processing

\* Build a web UI



\---



\## ✅ Conclusion



This project demonstrates:



\* LLM API integration

\* CLI tool development

\* Handling unstructured to structured transformation

\* Practical problem-solving under constraints



