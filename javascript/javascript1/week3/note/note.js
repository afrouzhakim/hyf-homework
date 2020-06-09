//we are writing a note saving app with the ability to add and save some notes, retrieve a note by giving note id, read all the notes,
//save not
const notes = [];
function saveNote(content, id) {
  obj = {content:content,
         id: id}
  notes.push(obj);
}
 saveNote('Pick up groceries', 1);
 saveNote('Do laundry', 2);
console.log(notes); 

//Search a note by id
function getNoteById(id) {
  const content = notes.filter(item => item.id===id)
  if (content.length < 1) {
    return "The id is not found."
  } 
    return content;
}
console.log(getNoteById(2));

//read all the notes
function logOutNotesFormatted() {
  for (let i = 0; i < notes.length; i++) {
  console.log(`The note with id: ${notes[i].id}, has the following text: ${notes[i].content}`)
  }
}
logOutNotesFormatted();