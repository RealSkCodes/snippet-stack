const getNotesQuery = "SELECT * FROM notes;"
const addNotesQuery =
  "INSERT INTO notes (image_url, category, title, description) VALUES ($1, $2, $3, $4);"
const getNotesByCategoryQuery = `SELECT * FROM notes WHERE category = $1;`
const getCategoriesQuery = `SELECT DISTINCT notes.category FROM notes;`

const queries = { getNotesQuery, addNotesQuery, getNotesByCategoryQuery, getCategoriesQuery }
export default queries
