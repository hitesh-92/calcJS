const express = require('express')
const app = express() 
const path = require('path')
const port = 8080

app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send("index.html")
})

app.listen(port, () => {
  console.log(`Calc Appp Listening On Port:${port}`)
})


