import "./App.css";
// import axios from "axios";
import { useEffect, useState } from "react";
import DUMMY_NOTES from "./DUMMY_NOTES";

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
      <div>Notes Application</div>
      {notesList.map((noteItem) => {
        return (
          <div>
            {/* SHOW DETAILS of the first element */}
            <h4>{noteItem.text}</h4>
            <h5>{noteItem.link}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default App;
