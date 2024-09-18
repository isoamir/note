import { useState } from "react";
import "./App.css";
import AddNote from "./Components/AddNote/AddNote";
import NoteList from "./Components/AddNote/NoteList";

function App() {
  const [notes, setNotes] = useState(() => {
    if (localStorage.getItem("notes")) {
      return JSON.parse(localStorage.getItem("notes"));
    } else {
      return [];
    }
  });

  const DeleteH = (id) => {
    const newNote = notes.filter((note) => note.id !== id);
    setNotes(newNote);
  };

  const doneH = (id) => {
    const newNote = notes.map((note) =>
      note.id == id ? { ...note, isfinished: !note.isfinished } : note
    );
    setNotes(newNote);
  };

  localStorage.setItem("notes", JSON.stringify(notes));
  const addNoteH = (newNote) => {
    setNotes((prevnotes) => [...prevnotes, newNote]);
    localStorage.setItem("notes", JSON.stringify(notes));
  };
  console.log(notes);

  return (
    <div>
      <AddNote setNotes={setNotes} onAddNote={addNoteH} onDelete={DeleteH} />
      <NoteList notes={notes} onDelete={DeleteH} onDone={doneH} />
    </div>
  );
}

export default App;
