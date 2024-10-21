import { createNote } from "./createNote.js"
import { noteCard } from "./noteCard.js"

// This function extracts the category from the URL
const getCategoryFromUrl = () => {
  const urlPath = window.location.pathname // Get the path, e.g., /public/index.html/work
  const parts = urlPath.split("/") // Split the URL into parts
  const category = parts.pop() // Get the last part of the path, which should be the category (e.g., "work")
  return category
}

const loadNotes = async () => {
  const category = getCategoryFromUrl() // Get the category from the URL
  const fetchResult = await fetch(`http://localhost:3000/api/v1/notes/${category}`) // Fetch notes by category
  const result = await fetchResult.json()
  const notesContainer = document.getElementById("notes-container")
  notesContainer.innerHTML = ""
  result.forEach((element) => {
    noteCard(element.id, element.image_url, element.category, element.title, element.description)
  })
}

// Main function to run everything
const runAll = async () => {
  const category = getCategoryFromUrl() // Get the category from the URL
  if (category) {
    await loadNotes(category) // Load notes for the specific category
  } else {
    await loadNotes() // Load all notes if no category is present
  }

  const categories = ["work", "personal", "ideas"]
  await createNote(categories, loadNotes) // Initialize the note creation functionality
}

runAll() // Call the main function when the script runs
