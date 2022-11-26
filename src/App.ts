require('dotenv').config()
const express = require('express')
const parser = require('body-parser')

const app = express()

app.use(parser.json())

const port = process.env.PORT || 3000
app.listen(port, () => console.log(`API running on: ${port}`))
