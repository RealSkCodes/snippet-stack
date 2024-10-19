import pkg from "pg"
const { Pool } = pkg

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "notes_db",
  password: "258852",
  port: 5432,
})

export default pool
