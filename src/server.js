import express from "express"
import cors from "cors"
import path from "path"
import noteRoutes from "./routes.js" // Assuming this is your routes file

const app = express()
const port = 3000

// Middleware to enable CORS
app.use(cors())

// Middleware to parse JSON bodies
app.use(express.json())

// Serve static files from the "src" folder
app.use("/src", express.static("src")) // This serves files under the /src route

// Serve static files from the "assets" folder
app.use("/assets", express.static("assets")) // This serves files under the /assets route

// Serve the index.html file for any route except API routes
app.get(/^(?!\/api).+/, (req, res) => {
  res.sendFile(path.resolve("public", "index.html")) // Serves index.html for all non-API routes
})

// API routes for handling notes
app.use("/api/v1/notes", noteRoutes) // Attach routes for notes

// Start the server
app.listen(port, () => {
  console.log(`App listening on port: ${port}`) // Log the server start
})
