import pkg from "pg"
import dotenv from "dotenv"
import fs from "fs"
import path from "path"

dotenv.config()

const { Pool } = pkg

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
})

// Use process.cwd() for a relative path
const sqlPath = path.join(process.cwd(), "db", "schema.sql")

// Function to create the database schema
const createSchema = async () => {
  console.log("Resolved SQL Path:", sqlPath) // Log the resolved path
  console.log("Checking if file exists:", fs.existsSync(sqlPath)) // Log if the file exists

  const sql = fs.readFileSync(sqlPath, "utf8")

  try {
    await pool.query(sql)
    console.log("Database schema created successfully")
  } catch (error) {
    console.error("Error creating database schema:", error)
  }
}

// Immediately invoke the createSchema function
createSchema().catch((error) => console.error("Error initializing database:", error))

export default pool
