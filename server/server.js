import express from "express"
import cors from "cors"
import "dotenv/config"
import connectDB from "./config/mongodb.js"
import { clerkMiddleware } from '@clerk/express'

await connectDB()

const app = express()
app.use(cors())
app.use(express.json())
app.use(clerkMiddleware())

app.get('/', (req,res) => {
    res.send("API Successfully connected")
})

const port = process.env.PORT || 3000
app.listen(port, ()=> console.log(`Server is running at http://localhost:${port}`))