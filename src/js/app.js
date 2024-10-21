import { createNote } from "./createNote.js"
import { noteCard } from "./noteCard.js"

const loadNotes = async () => {
  const fetchResult = await fetch("http://localhost:3000/api/v1/notes")
  const result = await fetchResult.json()
  const notesContainer = document.getElementById("notes-container")
  notesContainer.innerHTML = ""
  result.forEach((element) => {
    noteCard(element.id, element.image_url, element.category, element.title, element.description)
  })
}

const runAll = async () => {
  await loadNotes()
  const categories = ["Work", "Personal", "Ideas"]
  await createNote(categories, loadNotes)
}

runAll()
