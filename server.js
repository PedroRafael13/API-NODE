import express from "express";

const App = express()

App.get("/", (req, res) => {
  res.send("Hello word")
})

App.post("/postages", (req, res) => {
  res.send("criando a routa tipo post")
})

// TODO : TREINANDO CONCEITO DE ROTAS NO NODE.JS
App.get("/infor", (req, res) => {
  res.send("somente pessoas autorizada podem entrar")
})

App.listen(3000, console.log("The server is runnering at port 3000"))