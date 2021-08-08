import "./App.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import DUMMY_NOTES from "./DUMMY_NOTES";
import Note from "./components/Note";

function App() {
  const [notesList, setNotesList] = useState<Array<any>>([]);

  // get notes method
  // async function getNotes() {
  //   try {
  //     const response = await axios.get("http://localhost:5000/notes");
  //     setNotesList(response.data.notes);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  useEffect(() => {
    setNotesList(DUMMY_NOTES);
  }, []);

  console.log(notesList);

  return (
    //
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, index) => (
          <Note note={noteItem} key={index} />
        ))}
      </div>
    </div>
  );
}

export default App;
