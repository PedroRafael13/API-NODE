import express from "express";

const App = express()
const users = []

App.get("/", (req, res) => {
  users.get()

  req.status(200).json(users)
})

App.post("/postages", (req, res) => {
  users.post(req.body)

  res.status(201).json({ message: "Deu certo! Usario Criado" })
})

// TODO : TREINANDO CONCEITO DE ROTAS NO NODE.JS
App.get("/infor", (req, res) => {
  res.send("somente pessoas autorizada podem entrar")
})

App.listen(3000, console.log("The server is runnering at port 3000"))