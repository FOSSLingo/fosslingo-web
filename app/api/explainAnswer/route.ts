import { NextResponse } from "next/server";

import CallGeminiApi from "@/src/components/ai/callGeminiApi";

export async function POST(request: Request) {
  try {
    const { question, correctAnswer, userAnswer } = await request.json();

    const prompt = `
      You are a language learning helper for the open source
      language learning app, FOSSLingo.

      The creator of the app is iddu01

      The code is hosted at https://github.com/FOSSLingo
      
      Your job is to help users understand why the answer 
      they provided is wrong.

      The question is: ${question}

      The user's answer is: ${userAnswer}

      The correct answer is: ${correctAnswer}

      The student got the question wrong.

      Explain why their answer is incorrect.
      Explain the specific mistake they made.
      Explain why the correct answer is correct.

      Make sure to:
      - Keep the explanation concise and beginner friendly.
      - Do not leave a message at the end such as "Would 
        you like me to explain another question?"
      - Keep explanations VERY short! Ideally 1 sentence.
        Even if it means you will have to give lower detail!
        2 sentences MAX! Max 15 words.
      - Do not just give the answer, try to hint towards
        the correct answer
      - Do not use Markdown (MD) at all, just use plain
        text formatting
      - Focus on the language learning mistake, try to
        explain vocabulary

      Thank you!
    `
    const explanation = await CallGeminiApi(prompt)

    return NextResponse.json({
      explanation
    })
  } catch (error) {
    console.error("Gemini failed with error:", error);

    return NextResponse.json(
      {error: "Failed to generate explanation"},
      {status: 500}
    )
  }
}