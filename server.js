const express = require('express')
const server = express()

server.get("/", function (req, res) {
  return res.send("Oi")
})

server.listen(5000, function () {
  console.log('server is running')
})