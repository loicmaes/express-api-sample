require('dotenv').config() // LOAD CONFIGURATION (.env)
import express from 'express'
import parser from "body-parser"

const app = express() // CREATE A NEW INSTANCE OF EXPRESS

app.use(parser.json()) // PARSE THE REQUEST BODY TO JSON OBJECT

require('./handlers/RoutesHandler')(app) // REGISTER ROUTES

const port = process.env.PORT || 3000 // USE CONFIGURATION PORT IF PRESENT OTHERWISE USE A DEFAULT ONE (3000)
app.listen(port, () => console.log(`API running on: ${port}`)) // LAUNCH THE SERVICE ON THE SELECTED PORT
