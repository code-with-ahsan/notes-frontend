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

enum ModalModes {
  Add,
  Edit,
}

function App() {
  const [notesList, setNotesList] = useState<Array<INote>>([]);
  const [showAddNoteModal, setShowAddNoteModal] = useState(false);
  const [modalMode, setModalMode] = useState<ModalModes>(ModalModes.Add);
  const [modalNote, setModalNote] = useState<Partial<INote>>({
    link: "",
    text: "",
  });

  const handleCloseAddModal = () => {
    setModalNote({
      link: "",
      text: "",
    });
    setShowAddNoteModal(false);
  };
  const handleShowAddModal = () => {
    setModalMode(ModalModes.Add);
    setShowAddNoteModal(true);
  };
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

  const onModalFormSubmit = async () => {
    if (modalMode === ModalModes.Add) {
      const savedNote = await createNote(modalNote);
      setNotesList([...notesList, savedNote]);
    } else if (modalMode === ModalModes.Edit) {
      updateNoteItem(modalNote as INote);
    }
    handleCloseAddModal();
  };

  const editNote = (note: INote) => {
    setModalNote(note);
    setModalMode(ModalModes.Edit);
    setShowAddNoteModal(true);
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
          <Modal.Title>
            {modalMode === ModalModes.Add ? "Add" : "Edit"} Note
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FloatingLabel controlId="floatingTextarea2" label="Text">
            <Form.Control
              onChange={(event) => {
                const newVal = event.currentTarget.value;
                setModalNote({
                  ...modalNote,
                  text: newVal,
                });
              }}
              value={modalNote.text}
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
                setModalNote({
                  ...modalNote,
                  link: newVal,
                });
              }}
              value={modalNote.link}
              type="url"
              placeholder="Enter note url"
            />
          </FloatingLabel>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseAddModal}>
            Close
          </Button>
          <Button variant="primary" onClick={onModalFormSubmit}>
            {modalMode === ModalModes.Add ? "Create" : "Update"}
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
              onNoteEditClick={editNote}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
