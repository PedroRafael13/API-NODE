const express = require("express")
const generateContent = require("./gemini.js")

const App = express()
App.use(express.json())

App.get("/", (req, res) => {
  res.send("Hello World")
})

App.get("/gemini", generateContent)

App.listen(3000, () => {
  console.log("The port at runneing 300")
})