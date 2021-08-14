import "./App.css";
import { useEffect, useState } from "react";
import DUMMY_NOTES from "./DUMMY_NOTES";
import Note from "./components/Note/Note";
import INote from "./interfaces/note.interface";

function App() {
  const [notesList, setNotesList] = useState<Array<any>>([]);

  useEffect(() => {
    const notes = localStorage.getItem("myNotes");
    if (!notes) {
      setNotesList(DUMMY_NOTES);
    } else {
      setNotesList(JSON.parse(notes));
    }
  }, []);

  useEffect(() => {
    console.log("notes updated");
    localStorage.setItem("myNotes", JSON.stringify(notesList));
  }, [notesList]);

  // get notes method
  // async function getNotes() {
  //   try {
  //     const response = await axios.get("http://localhost:5000/notes");
  //     setNotesList(response.data.notes);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  console.log(notesList);

  const updateNote = (note: INote) => {
    const updatedNotes = notesList.map((noteItem) => {
      if (noteItem.id === note.id) {
        return note;
      }
      return noteItem;
    });
    setNotesList(updatedNotes);
  };

  return (
    //
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, index) => {
          return (
            <Note onNoteValueUpdated={updateNote} note={noteItem} key={index} />
          );
        })}
      </div>
    </div>
  );
}

export default App;
