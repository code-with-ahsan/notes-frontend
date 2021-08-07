import "./App.css";
import axios from "axios";
import { useState } from "react";

function App() {
  const [notesList, setNotesList] = useState<Array<any>>([]);

  // get notes method
  async function getNotes() {
    try {
      const response = await axios.get("http://localhost:5000/notes");
      setNotesList(response.data.notes);
    } catch (error) {
      console.error(error);
    }
  }

  console.log(notesList);

  return (
    //
    <div className="App">
      <div>Notes Application</div>
      <div>
        <button onClick={getNotes}>Click Me!</button>
      </div>
      <div>
        {/* SHOW DETAILS of the first element */}
        <h4>{notesList[0]?.text}</h4>
        <h5>{notesList[0]?.link}</h5>
      </div>
    </div>
  );
}

export default App;
