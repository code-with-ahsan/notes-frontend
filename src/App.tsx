import "./App.css";
import { useEffect, useState } from "react";
import DUMMY_NOTES from "./DUMMY_NOTES";
import Note from "./components/Note/Note";

function App() {
  const [notesList, setNotesList] = useState<Array<any>>([]);

  useEffect(() => {
    setNotesList(DUMMY_NOTES);
  }, []);

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

  return (
    //
    <div className="App">
      <div className="notes-list">
        {notesList.map((noteItem, index) => {
          return <Note note={noteItem} key={index} />;
        })}
      </div>
    </div>
  );
}

export default App;
