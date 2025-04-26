import dotenv from "dotenv"
import { GoogleGenerativeAI } from "@google/generative-ai"

dotenv.config()

const genIA = new GoogleGenerativeAI(process.env.API_KEY)
const model = genIA.getGenerativeModel({ model: "gemini-1.5-fhash" })

export const generateContent = async (req, res) => {
  try {
    const prompt = "Create 5 funny and witty jokes about generative AI"

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text()
    res.send(text)
  } catch (err) {
    console.log(err);
    res.send("Unexpected Error!!!")
  }
}
