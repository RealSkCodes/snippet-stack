export const deleteCardData = (id, loadNotes, setupCategories) => {
  const card = document.getElementById(`${id}`)

  if (card) {
    card.addEventListener("click", async (event) => {
      const confirmation = confirm("Are you sure you want to delete this note?")
      if (!confirmation) return
      try {
        const response = await fetch(`http://localhost:3000/api/v1/notes/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
        if (!response.ok) {
          throw new Error("Failed to delete the note.")
        }
        const result = await response.json()
        console.log("Note deleted:", result.message) // Log success message
        // Remove the card from the UI
        card.remove()
        // Reload notes after successful deletion
        await loadNotes() // Call loadNotes to refresh the notes on the page
        await setupCategories()
        // Close the modal if necessary (you can also handle this in the delete button)
        const modal = document.getElementsByTagName("dialog")[0] // Adjust as needed
        modal.close()
        modal.remove()
      } catch (error) {
        console.error("Error deleting note:", error)
      }
    })
  } else {
    console.error(`No card found with id: ${id}`)
  }
}
