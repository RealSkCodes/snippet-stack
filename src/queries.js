const getNotesQuery = "SELECT * FROM notes"
const addNotesQuery =
  "INSERT INTO notes (image_url, category, title, description) VALUES ($1, $2, $3, $4)"

const queries = { getNotesQuery, addNotesQuery }
export default queries
