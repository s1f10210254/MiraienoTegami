import OpenAI from "openai";

const openai =  new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.openai.iniad.org/api/v1"
})

export const counselingGPT =async (content: string) => {
    const chatCompletion = await openai.chat.completions.create({
        messages:[
            {
                role:"user",
                content:`あなたはカウンセラーになりかわってください。次の文に対してのアドバイスを一つお願いします。"${content}"`
            },
        ],
        model: "gpt-3.5-turbo"
    })
    const chatContent = chatCompletion.choices[0].message.content;

    return chatContent
}