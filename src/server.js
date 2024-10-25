import express from "express"
import cors from "cors"
import path from "path"
import noteRoutes from "./routes.js"
import dotenv from "dotenv"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

// Middleware to enable CORS
app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json())

// Serve static files from the "src" folder
app.use("/src", express.static("src"))

// Serve static files from the "assets" folder
app.use("/assets", express.static("assets"))

// Serve the index.html file for any route except API routes
app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.resolve("public", "index.html"))
})

// API routes for handling notes
app.use("/api/v1/notes", noteRoutes)

// Start the server
app.listen(port, () => {
  console.log(`App listening on port: ${port}`)
})
