import pool from "./db.js"
import queries from "./queries.js"

const getNotes = (req, res) => {
  pool.query(queries.getNotesQuery, (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const addNotes = (req, res) => {
  const { image_url, category, title, description } = req.body
  pool.query(queries.addNotesQuery, [image_url, category, title, description], (error, results) => {
    if (error) throw error
    res.status(201).json({ message: "Note Added Successfully!" })
    console.log("Note Added Successfully!")
  })
}

const getNotesByCategory = (req, res) => {
  const { category } = req.params // Get the category from the request parameters
  pool.query(queries.getNotesByCategoryQuery, [category], (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}

const controller = {
  getNotes,
  addNotes,
  getNotesByCategory,
}
// might make it one line later
export default controller
