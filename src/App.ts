require('dotenv').config() // LOAD CONFIGURATION (.env)
import { initDatabase } from './database/Orm';
import express from 'express'
import parser from 'body-parser'
import cors from 'cors'

const app = express() // CREATE A NEW INSTANCE OF EXPRESS

app.use(parser.json()) // PARSE THE REQUEST BODY TO JSON OBJECT
app.use(cors()) // USE CORS TO DISABLE ERRORS

require('./handlers/RoutesHandler')(app) // REGISTER ROUTES

const port = process.env.API_PORT || 3000 // USE CONFIGURATION PORT IF PRESENT OTHERWISE USE A DEFAULT ONE (3000)
app.listen(port, () => {
    console.log(`\nAPI listening on:`)
    console.log(`  › http://localhost:${port}/${!process.env.API_HOST ? `\n` : ``}`)
    if (process.env.API_HOST)
        console.log(`  › http${process.env.API_HOST_SECURED === `true` ? `s` : ``}://${process.env.API_HOST}:${port}/\n`)

    // TURN ON THE DATABASE CONNECTION IF REQUESTED
    const dbConnect: boolean = process.env.DB_USE === `true`
    if (dbConnect)
        initDatabase()
    else
        console.log(`LOG: Database connection disabled.`)
})
