import { createNote } from "./createNote.js"
import { noteCard } from "./noteCard.js"

const viewImage = async () => {
  let options = []
  for (let i = 0; i < localStorage.length; i++) {
    options.push(localStorage.getItem(localStorage.key(i)))
  }
  // Wait for the data from createNote
  const allData = await createNote(options)
  // Use the data in noteCard
  noteCard(
    "1", // Assuming a static ID
    allData.imageFile, // Use the uploaded image URL
    "15/10/2075", // Static date for testing
    allData.titleText, // Use the title from the input
    allData.descriptionText // Use the description from the input
  )
}

viewImage()
