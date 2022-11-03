import "./styles.css";
import { useState } from "react";
import { Note } from "./Note.js";

export default function App(props) {
  const [notes, setNotes] = useState(props.notes);
  const [newNote, setNewNote] = useState("");

  const handleChange = (event) => {
    setNewNote(event.target.value);
  };

  const handleClick = (event) => {
    console.log(newNote);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ol>
        {notes.map((note) => (
          <Note keyn={note.id} {...note} />
        ))}
      </ol>

      <div>
        <input type="text" onChange={handleChange} value={newNote} />
        <button onClick={handleClick}>Make a note</button>
      </div>
    </div>
  );
}
