import { deleteCardData } from "./deleteCard.js"
import { loadNotes } from "./app.js"
import { setupCategories } from "./app.js"
const notesContainer = document.getElementById("notes-container")

export const noteCard = (id, image, date, title, description) => {
  // Create a new Date object from the raw date string
  const rawDate = new Date(date)

  // Manually format the date to DD/MM/YYYY
  const day = String(rawDate.getDate()).padStart(2, "0")
  const month = String(rawDate.getMonth() + 1).padStart(2, "0") // Months are zero-based
  const year = rawDate.getFullYear()

  // Manually format the time to HH:MM am/pm
  let hours = rawDate.getHours()
  const minutes = String(rawDate.getMinutes()).padStart(2, "0")
  const ampm = hours >= 12 ? "pm" : "am"
  hours = hours % 12 || 12 // Convert to 12-hour format

  const formattedTime = `${String(hours).padStart(2, "0")}:${minutes}${ampm}`
  const formattedDate = `${day}/${month}/${year} ${formattedTime}`

  // Create card div to connect to notes container
  const cardDiv = document.createElement("div")
  notesContainer.append(cardDiv)
  cardDiv.id = `card-id${id}`
  cardDiv.className = "note-card"

  // Create the mini card structure
  const thumbnail = document.createElement("img")
  cardDiv.append(thumbnail)
  thumbnail.src = image // change later

  const dateText = document.createElement("span")
  cardDiv.append(dateText)
  dateText.innerHTML = formattedDate // Use the manually formatted date

  const titleText = document.createElement("span")
  cardDiv.append(titleText)
  titleText.innerHTML = title

  // Create the modal full view card
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
    dateTextModal.innerHTML = formattedDate // Use the manually formatted date

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
