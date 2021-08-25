import "./App.css";
import { useEffect, useState } from "react";
import Note from "./components/Note/Note";
import INote from "./interfaces/note.interface";
import {
  createNewNote,
  getNotes,
  deleteNoteById,
  updateNoteById,
} from "./services/notesService";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import { FloatingLabel } from "react-bootstrap";

function App() {
  const [notesList, setNotesList] = useState<Array<INote>>([]);
  const [show, setShow] = useState(false);
  const [newNote, setNewNote] = useState<Partial<INote>>({
    text: "",
    link: "",
  });

  const handleClose = () => {
    setNewNote({
      link: "",
      text: "",
    });
    setShow(false); // hiding the modal
  };
  const handleShow = () => setShow(true);

  // App components renders the first time
  useEffect(() => {
    getNotesFromServer();
  }, []);

  const getNotesFromServer = async () => {
    const notesFromServer = await getNotes();
    setNotesList(notesFromServer);
  };

  useEffect(() => {
    // console.log("saving to localstorage");
    // const notesListString = JSON.stringify(notesList);
    // localStorage.setItem("my-notes", notesListString);
  }, [notesList]);

  console.log("rendering");
  console.log(notesList);

  const addNote = async () => {
    const savedNote = await createNewNote(newNote);
    setNotesList([savedNote, ...notesList]);
    handleClose();
  };
  const updateNoteItem = async (updatedNote: INote) => {
    await updateNoteById(updatedNote, updatedNote._id);
    // temporary variable
    const updatedList = notesList.map((noteItem: INote) => {
      if (noteItem._id === updatedNote._id) {
        return updatedNote;
      }
      return noteItem;
    });
    setNotesList(updatedList); // updating the state of notes list
  };

  const deleteNoteItem = async (note: INote) => {
    await deleteNoteById(note._id);
    console.log("note deleted from the backend", note);
    const remainingNotes = notesList.filter((nItem) => {
      return nItem._id !== note._id;
    });
    setNotesList(remainingNotes);
  };

  return (
    //
    <div className="App">
      <div className="new-note-wrapper">
        <Button
          className="add-button"
          size="lg"
          variant="dark"
          onClick={handleShow}
        >
          +
        </Button>
      </div>
      <div className="notes-list">
        {notesList.map((noteItem, index) => {
          return (
            <Note
              note={noteItem}
              onNoteUpdate={updateNoteItem}
              onNoteDelete={deleteNoteItem}
              key={index}
            />
          );
        })}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Create new note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Text">
            <Form.Control
              as="textarea"
              onChange={(event) => {
                setNewNote({
                  ...newNote,
                  text: event.currentTarget.value,
                });
              }}
              placeholder="Leave a comment here"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <FloatingLabel controlId="floatingTextarea2" label="Link">
            <Form.Control
              type="url"
              onChange={(event) => {
                setNewNote({
                  ...newNote,
                  link: event.currentTarget.value,
                });
              }}
              placeholder="https://twitch.tv/CodeWithAhsan"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={addNote}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
