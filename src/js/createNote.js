const createNoteButton = document.getElementById("create-note-button")

export const createNote = (callback) => {
  createNoteButton.addEventListener("click", (event) => {
    const modalDialog = document.createElement("dialog")
    document.body.append(modalDialog)
    modalDialog.showModal()

    // Image upload input
    const imageUpload = document.createElement("input")
    modalDialog.append(imageUpload)
    imageUpload.type = "file"
    imageUpload.id = "image-upload"
    imageUpload.accept = "image/*"

    // Title input
    const titleTextboxInput = document.createElement("textarea")
    modalDialog.append(titleTextboxInput)
    titleTextboxInput.id = "title-textbox-input"
    titleTextboxInput.placeholder = "Enter the title here..."

    // Description input
    const descriptionTextboxInput = document.createElement("textarea")
    modalDialog.append(descriptionTextboxInput)
    descriptionTextboxInput.id = "description-textbox-input"
    descriptionTextboxInput.placeholder = "Enter the details here..."

    // Submit button
    const noteSubmitButton = document.createElement("button")
    modalDialog.append(noteSubmitButton)
    noteSubmitButton.id = "note-submit-button"
    noteSubmitButton.innerHTML = "Submit"

    noteSubmitButton.addEventListener("click", () => {
      const imageFile = document.getElementById("image-upload").files[0]
      const titleText = document.getElementById("title-textbox-input").value
      const descriptionText = document.getElementById("description-textbox-input").value

      // Call the callback with the values
      callback(imageFile, titleText, descriptionText)
      modalDialog.close() // Close the modal after submission
      modalDialog.remove()
    })
    // Submit button
    const noteCancelButton = document.createElement("button")
    modalDialog.append(noteCancelButton)
    noteCancelButton.id = "note-cancel-button"
    noteCancelButton.innerHTML = "❌"
    noteCancelButton.addEventListener("click", () => {
      modalDialog.close() // Close the modal after submission
      modalDialog.remove()
    })
  })
}
