import { createNote } from "./createNote.js"

const runAll = async () => {
  const categories = ["Work", "Personal", "Ideas"] // Example categories
  await createNote(categories)
}
runAll()
