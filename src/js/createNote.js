import { dropdown } from "./dropdown.js"
const createNoteButton = document.getElementById("create-note-button")

export const createNote = (callback, options) => {
  createNoteButton.addEventListener("click", (event) => {
    const modalDialog = document.createElement("dialog")
    document.body.append(modalDialog)
    modalDialog.id = "modal-dialog"
    modalDialog.showModal()

    // Create div to contain image upload, new category button and category function dropdown
    const noteImgCateDropContainer = document.createElement("div")
    modalDialog.append(noteImgCateDropContainer)
    noteImgCateDropContainer.id = "note-img-cate-drop-container"

    // Image upload input
    const imageUpload = document.createElement("input")
    noteImgCateDropContainer.append(imageUpload)
    imageUpload.type = "file"
    imageUpload.id = "image-upload"
    imageUpload.accept = "image/*"

    // Category function dropdown
    let categoryDropdown = dropdown(noteImgCateDropContainer, options)

    // Create new category add button and dynamic catergory name update feature
    const createCategoryButton = document.createElement("button")
    noteImgCateDropContainer.append(createCategoryButton)
    createCategoryButton.id = "create-category-button"
    createCategoryButton.innerHTML = "Create ✙"
    createCategoryButton.addEventListener("click", () => {
      const createTextboxForCategoryName = document.createElement("textarea")
      const textboxSubmitButton = document.createElement("button")
      textboxSubmitButton.addEventListener("click", () => {
        const categoryTextboxValue = createTextboxForCategoryName.value.trim()
        if (categoryTextboxValue) {
          options.push(categoryTextboxValue)
          const newDropdown = dropdown(noteImgCateDropContainer, options)
          categoryDropdown.replaceWith(newDropdown)
          categoryDropdown = newDropdown
        }
      })
      createCategoryButton.replaceWith(createTextboxForCategoryName)
      noteImgCateDropContainer.append(textboxSubmitButton)
      createTextboxForCategoryName.id = "create-textbox-for-category-name"
      textboxSubmitButton.id = "textbox-submit-button"
      textboxSubmitButton.innerHTML = "Submit"
      createTextboxForCategoryName.placeholder = "Enter the new category name here..."
      createTextboxForCategoryName.addEventListener("submit", () => {
        createTextboxForCategoryName.replaceWith(createCategoryButton)
      })
      textboxSubmitButton.addEventListener("click", () => {
        const categoryTextboxValue = document.getElementById("create-textbox-for-category-name")
        localStorage.setItem(localStorage.length + 1, categoryTextboxValue.value)
        console.log(categoryTextboxValue.value)
        createTextboxForCategoryName.replaceWith(createCategoryButton)
        textboxSubmitButton.replaceWith(createCategoryButton)
      })
    })

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
      const categoryValue = categoryDropdown.value
      const titleText = document.getElementById("title-textbox-input").value
      const descriptionText = document.getElementById("description-textbox-input").value
      // Call the callback with the values
      callback(imageFile, categoryValue, titleText, descriptionText)
      modalDialog.close() // Close the modal after submission
      modalDialog.remove()
    })
    // Cancel button
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
