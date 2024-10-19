import pool from "./db.js"
import queries from "./queries.js"

const getNotes = (req, res) => {
  pool.query(queries.getNotesQuery, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}
const controller = {
  getNotes,
}

export default controller
