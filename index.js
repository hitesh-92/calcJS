/*const express = require('express')
const app = express() 
const path = require('path')
const port = process.env.port || 8080*/

import express from "express"
import path from "path"
import { fileURLToPath } from "url"

const __dirname = path.dirname(fileURLToPath(import.meta.url))

const app = express()
const port = process.env.PORT || 8080

app.use(express.json())
app.use(express.static('public'))
app.use('/static', express.static(path.join(__dirname, 'public')))

app.get('/', (req, res) => {
  res.send("index.html")
})

export default app


