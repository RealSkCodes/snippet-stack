import { noteCard } from "./noteCard.js"
import { createNote } from "./createNote.js"

noteCard(
  "1",
  "https://icons.iconarchive.com/icons/ampeross/qetto-2/256/photos-icon.png",
  "15/10/2075",
  "Refactoring",
  "Updating the source code without changing the behaviour of the application"
)

let options = []
for (let i = 0; i < localStorage.length; i++) {
  options.push(localStorage.getItem(localStorage.key(i)))
}
createNote((imageFile, categoryValue, titleText, descriptionText) => {
  console.log("Image File:", imageFile)
  console.log("Category Name:", categoryValue)
  console.log("Title:", titleText)
  console.log("Description:", descriptionText)
}, options)
