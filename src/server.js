import express from "express" // Correctly import express as a default import
import cors from "cors"
import noteRoutes from "./routes.js"
const app = express()
const port = 3000

app.use(cors())

app.use(express.json())

app.get("/", (req, res) => {
  res.send("Hello world")
})

app.use("/api/v1/notes", noteRoutes)

app.listen(port, () => console.log(`App listening on port: ${port}`))
