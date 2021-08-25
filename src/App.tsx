import "./App.css";
import { useEffect, useState } from "react";
import Note from "./components/Note/Note";
import INote from "./interfaces/note.interface";
import {
  createNote,
  deleteNote,
  getNotes,
  updateNote,
} from "./services/notesService";
import { Button, FloatingLabel, Modal, Form } from "react-bootstrap";

function App() {
  const [notesList, setNotesList] = useState<Array<INote>>([]);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [newNote, setNewNote] = useState<Partial<INote>>({
    link: "",
    text: "",
  });

  const handleCloseAddModal = () => {
    setNewNote({
      link: "",
      text: "",
    });
    setShowAddNoteModal(false);
  };
  const handleShowAddModal = () => setShowAddNoteModal(true);
  // App components renders the first time
  useEffect(() => {
    getNotesFromServer();
  }, []);

  const getNotesFromServer = async () => {
    const notes = await getNotes();
    setNotesList(notes);
  };

  const updateNoteItem = async (updatedNote: INote) => {
    const noteFromServer = await updateNote(updatedNote);
    // temporary variable
    const updatedList = notesList.map((noteItem: INote) => {
      if (noteItem._id === noteFromServer._id) {
        return noteFromServer;
      }
      return noteItem;
    });
    setNotesList(updatedList); // updating the state of notes list
  };

  const deleteNoteItem = async (noteToDelete: INote) => {
    await deleteNote(noteToDelete._id);
    const remainingNotes = notesList.filter((noteItem) => {
      return noteItem._id !== noteToDelete._id;
    });
    setNotesList(remainingNotes);
  };

  const addNote = async () => {
    const savedNote = await createNote(newNote);
    setNotesList([...notesList, savedNote]);
    handleCloseAddModal();
  };

  return (
    //
    <div className="App">
      <Button
        variant="dark"
        className="add-button"
        onClick={handleShowAddModal}
      >
        <div className="add-button-text">+</div>
      </Button>

      <Modal show={showAddNoteModal} onHide={handleCloseAddModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Note</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Text">
            <Form.Control
              onChange={(event) => {
                const newVal = event.currentTarget.value;
                setNewNote({
                  ...newNote,
                  text: newVal,
                });
              }}
              as="textarea"
              placeholder="Enter your note text"
              style={{ height: "100px" }}
            />
          </FloatingLabel>
          <FloatingLabel
            controlId="floatingTextarea"
            label="Link"
            className="mb-3 note-link"
          >
            <Form.Control
              onChange={(event) => {
                const newVal = event.currentTarget.value;
                setNewNote({
                  ...newNote,
                  link: newVal,
                });
              }}
              type="url"
              placeholder="Enter note url"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Close
          </Button>
          <Button variant="primary" onClick={addNote}>
            Create
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="notes-list">
        {notesList.map((noteItem, index) => {
          return (
            <Note
              note={noteItem}
              onNoteDelete={deleteNoteItem}
              onNoteUpdate={updateNoteItem}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
