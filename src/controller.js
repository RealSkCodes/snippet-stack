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
  const { category } = req.params
  pool.query(queries.getNotesByCategoryQuery, [category], (error, results) => {
    if (error) throw error
    res.status(200).json(results.rows)
  })
}
const getCategories = (req, res) => {
  pool.query(queries.getCategoriesQuery, (error, results) => {
    if (error) {
      console.error("Error querying categories:", error)
      return res.status(500).json({ error: "Internal server error" })
    }
    res.status(200).json(results.rows)
  })
}
const deleteCardData = (req, res) => {
  const { id } = req.params // Assuming the ID is passed as a URL parameter

  pool.query(queries.deleteCardDataQuery, [id], (error, results) => {
    if (error) {
      console.error("Error deleting data:", error)
      return res.status(500).json({ error: "Internal server error" })
    }

    if (results.rowCount === 0) {
      return res.status(404).json({ error: "Note not found" })
    }

    res.status(200).json({ message: "Note deleted successfully" })
  })
}

const controller = {
  getNotes,
  addNotes,
  getNotesByCategory,
  getCategories,
  deleteCardData,
}
export default controller
