
import express from "express"
import { generateContent } from "./gemini.js"

const App = express()
App.use(express.json())

App.get("/", (req, res) => {
  res.send("Hello World")
})

App.get("/gemini", generateContent)

App.listen(3000, () => {
  console.log("The port at runneing 300")
})