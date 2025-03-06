const app = require('express')()
const port = 8080

app.get('/', (req, res) => {
  res.send("My Calc App")
})

app.listen(port, () => {
  console.log(`Calc Appp Listening On Port:${port}`)
})


