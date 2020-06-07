//save not
const notes = [];
function saveNote(content, id) {
  obj = {content: 'Pick up groceries', id: 1}, {content: 'Do laundry', id: 2}
  notes.push(obj);
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
  console.log(`The note with id: ${notes[i].id}, has the following text: ${notes[i].content}`)
  }
}

logOutNotesFormatted();