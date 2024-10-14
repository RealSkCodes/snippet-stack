const notesContainer = document.getElementById("notes-container")

const noteCard = (id, image, date, title, description) => {
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
    // Modal close button
    const closeModalDialogBtn = document.createElement("button")
    closeModalDialogBtn.className = "closeModalDialogBtn"
    closeModalDialogBtn.innerHTML = "❌"
    modalDialog.append(closeModalDialogBtn)
    closeModalDialogBtn.addEventListener("click", () => {
      modalDialog.close()
      modalDialog.remove()
      modalDialog = null
    })
  })
}

noteCard(
  "5",
  "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/photos-icon.png",
  "15/10/2075",
  "testtitle",
  "testdesc"
)
noteCard(
  "4",
  "https://w0.peakpx.com/wallpaper/730/501/HD-wallpaper-iphone-14-pro-thumbnail.jpg",
  "14/10/2075",
  "testtitle testtitletesttitle testtitle testtitle",
  "test description test description test description test description test description test description test description test description"
)
noteCard(
  "3",
  "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/photos-icon.png",
  "13/10/2075",
  "testtitle",
  "testdesc"
)
noteCard(
  "2",
  "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/photos-icon.png",
  "12/10/2075",
  "testtitle",
  "testdesc"
)
noteCard(
  "1",
  "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/photos-icon.png",
  "11/10/2075",
  "testtitle",
  "testdesc"
)
