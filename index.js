const express = require('express')
const app = express() 
const path = require('path')
const port = process.env.port || 8080

app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send("index.html")
})

app.listen(port, () => {
  const logTime = () => new Date().toLocaleString()
  const clearLog = () => process.stdout.write('\x1Bc')

  clearLog()

  console.log(`Calc Appp Listening \nOn Port:${port}`)
  console.log(logTime())
})


