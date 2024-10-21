import express from "express"
import cors from "cors"
import path from "path"
import noteRoutes from "./routes.js"

const app = express()
const port = 3000

// Middleware to enable CORS
app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json())

// Serve static files from the "public" folder
app.use("/src", express.static("src"))

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
