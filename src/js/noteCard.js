import { deleteCardData } from "./deleteCard.js"
import { loadNotes } from "./app.js"
import { setupCategories } from "./app.js"
const notesContainer = document.getElementById("notes-container")

export const noteCard = (id, image, date, title, description) => {
  // create card div to connect to notes container
  const cardDiv = document.createElement("div")
  notesContainer.append(cardDiv)
  cardDiv.id = `card-id${id}`
  cardDiv.className = "note-card"
  // create the mini card structure
  const thumbnail = document.createElement("img")
  cardDiv.append(thumbnail)
  thumbnail.src = image // change later
  const dateText = document.createElement("span")
  cardDiv.append(dateText)
  dateText.innerHTML = date
  const titleText = document.createElement("span")
  cardDiv.append(titleText)
  titleText.innerHTML = title
  // create the modal full view card
  cardDiv.addEventListener("click", (event) => {
    const modalDialog = document.createElement("dialog")
    document.body.append(modalDialog)
    modalDialog.showModal()
    modalDialog.id = `modal${id}`
    // Modal inside content
    const thumbnailModal = document.createElement("img")
    modalDialog.append(thumbnailModal)
    thumbnailModal.src = image // change later
    const dateTextModal = document.createElement("span")
    modalDialog.append(dateTextModal)
    dateTextModal.innerHTML = date
    const titleTextModal = document.createElement("span")
    modalDialog.append(titleTextModal)
    titleTextModal.innerHTML = title
    const descriptionTextModal = document.createElement("span")
    modalDialog.append(descriptionTextModal)
    descriptionTextModal.innerHTML = description
    const deleteCard = document.createElement("button")
    modalDialog.append(deleteCard)
    deleteCard.id = `${id}`
    deleteCard.className = `delete-card`
    deleteCard.innerHTML = "Delete"
    // Modal close button
    deleteCardData(id, loadNotes, setupCategories)

    const closeModalDialogBtn = document.createElement("button")
    closeModalDialogBtn.className = "closeModalDialogBtn"
    closeModalDialogBtn.innerHTML = "❌"
    modalDialog.append(closeModalDialogBtn)
    closeModalDialogBtn.addEventListener("click", () => {
      modalDialog.close()
      modalDialog.remove()
    })
  })
}
