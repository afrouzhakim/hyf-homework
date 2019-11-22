let notes = [];

function addNote(myContent, myId) {
  notes.push({'content': myContent, 'id': myId});
}

function getNoteFromId(id) {
  for (let i = 0; i < notes.length; i++) {
    if (id === notes[i].id) {
      return notes[i].content;
    } else {
      console.log("There is no match id.");
    }
  }
}

function getAllNotes() {
  return notes;
}

function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
    console.log(`The note with id: ${notes[i].id}, has the following note text: ${notes[i].content}.`);
  }
}

