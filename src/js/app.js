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
  try {
    const category = getCategoryFromUrl()
    const fetchResult = await fetch(`http://localhost:3000/api/v1/notes/${category}`)
    if (!fetchResult.ok) {
      throw new Error(`HTTP error! status: ${fetchResult.status}`)
    }
    const result = await fetchResult.json()
    const notesContainer = document.getElementById("notes-container")
    notesContainer.innerHTML = ""
    result.forEach((element) => {
      noteCard(element.id, element.image_url, element.category, element.title, element.description)
    })
  } catch (error) {
    console.error("Error loading notes:", error)
  }
}

// Main function to run everything
const runAll = async () => {
  try {
    const category = getCategoryFromUrl() // Get the category from the URL
    if (category) {
      await loadNotes() // Load notes for the specific category
    } else {
      await loadNotes() // Load all notes if no category is present
    }

    // Fetch categories
    const fetchCategoriesResult = await fetch(`http://localhost:3000/api/v1/notes/categories`)
    if (!fetchCategoriesResult.ok) {
      throw new Error(`HTTP error! status: ${fetchCategoriesResult.status}`)
    }
    const result = await fetchCategoriesResult.json()
    const categoriesArray = [] // Step 1: Initialize an empty array
    const categoryOptionList = document.getElementById("header-bottom-container-navbar")

    // Create and append "All" span
    const allSpan = document.createElement("span")
    allSpan.innerHTML = "All"
    allSpan.addEventListener("click", () => {
      window.location.href = "http://127.0.0.1:3000/" // Redirect to home
    })
    categoryOptionList.append(allSpan) // Append "All" span to the list

    result.forEach((element) => {
      categoriesArray.push(element.category) // Step 2: Push each category into the array
      const createSpan = document.createElement("span")
      createSpan.innerHTML = element.category

      // Step 3: Add an event listener to navigate to the category route
      createSpan.addEventListener("click", () => {
        window.location.href = `http://localhost:3000/${element.category}` // Redirect to the category page
      })

      categoryOptionList.append(createSpan) // Append category span
    })
    await createNote(categoriesArray, loadNotes) // Step 4: Call createNote with the categories array
  } catch (error) {
    console.error("Error in runAll:", error)
  }
}

runAll() // Call the main function when the script runs
