import { dropdown } from "./dropdown.js"
import { getUploadImageLink } from "./getUploadImageLink.js"
import { setupCategories } from "./app.js"

export const createNote = (options, loadNotes) => {
  return new Promise((resolve) => {
    const createNoteButton = document.getElementById("create-note-button")
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

      // Create new category add button and dynamic category name update feature
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
            // Add new category to options and update dropdown
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

        // Handle category submit
        textboxSubmitButton.addEventListener("click", () => {
          const categoryTextboxValue = document.getElementById("create-textbox-for-category-name")
          localStorage.setItem(localStorage.length + 1, categoryTextboxValue.value)
          console.log(categoryTextboxValue.value)

          // Reset the UI after adding the new category
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

      // Create div to contain image upload, new category button and category function dropdown
      const cancelAndSubmitBtnContainer = document.createElement("div")
      modalDialog.append(cancelAndSubmitBtnContainer)
      cancelAndSubmitBtnContainer.id = "cancel-and-submit-btn-container"

      // Cancel button
      const noteCancelButton = document.createElement("button")
      cancelAndSubmitBtnContainer.append(noteCancelButton)
      noteCancelButton.id = "note-cancel-button"
      noteCancelButton.innerHTML = "❌"
      noteCancelButton.addEventListener("click", () => {
        modalDialog.close()
        modalDialog.remove()
      })

      // Submit button
      const noteSubmitButton = document.createElement("button")
      cancelAndSubmitBtnContainer.append(noteSubmitButton)
      noteSubmitButton.id = "note-submit-button"
      noteSubmitButton.innerHTML = "Submit"

      noteSubmitButton.addEventListener("click", async () => {
        const categoryValue = categoryDropdown.value
        const titleText = document.getElementById("title-textbox-input").value
        const descriptionText = document.getElementById("description-textbox-input").value
        const uploadedImageUrl = await getUploadImageLink(imageUpload)

        // Check if the selected category is the default
        if (categoryValue === "select") {
          alert("Please select a category")
          return // Exit the function if no category is selected
        }

        const noteData = {
          image_url: uploadedImageUrl,
          category: categoryValue,
          title: titleText,
          description: descriptionText,
        }

        try {
          const response = await fetch("http://localhost:3000/api/v1/notes", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(noteData),
          })

          if (!response.ok) {
            throw new Error("Network response was not ok")
          }

          const result = await response.json()
          console.log("Note added:", result.message) // Should log "Note Added Successfully!"

          // Reload notes after successful submission
          await loadNotes()
          await setupCategories()
        } catch (error) {
          console.error("Error adding note:", error)
        }

        resolve(noteData)
        modalDialog.close()
        modalDialog.remove()
      })
    })
  })
}
