import dotenv from "dotenv"
dotenv.config()

import express from "express";
import cors from "cors";
import morgan from "morgan";
const app = express()

import mongoClient from "./config/db.js"
mongoClient()

const PORT = process.env.PORT || 8000;

app.use(cors())
app.use(morgan("tiny"))

// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))
 
// parse application/json
app.use(express.json())
//LOAD ROUTERS
import loginRouter from "./routers/loginRouter.js";
import categoryRouter from "./routers/categoryrouter.js";


///USE APIS

app.use("/api/v1/login", loginRouter)
app.use("/api/v1/category", categoryRouter)

app.use('/api/v1/login', loginRouter)
 
app.get('/', function (req, res) {
  res.send('Hello World')
})

///Hnald error
 
app.listen(PORT, error =>{
    if(error) console.log(error)

    console.log(`Server is running at http://localhost:${PORT}`)
})