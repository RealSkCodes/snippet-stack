import { noteCard } from "./noteCard.js"
import { createNote } from "./createNote.js"

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

createNote((imageFile, titleText, descriptionText) => {
  console.log("Image File:", imageFile)
  console.log("Title:", titleText)
  console.log("Description:", descriptionText)
})
