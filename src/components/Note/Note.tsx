import { FC, FocusEvent, useState } from "react";
import INote from "../../interfaces/note.interface";
import "./Note.css";

type Props = {
  note: INote;
  onNoteUpdate: (note: INote) => void;
  onNoteDelete: (note: INote) => void;
};

const Note: FC<Props> = ({ note, onNoteUpdate, onNoteDelete }) => {
  const [isFocused, setIsFocused] = useState(false);

  const noteTextUpdated = (event: FocusEvent<HTMLDivElement>) => {
    setIsFocused(false);
    const newTextValue = event.currentTarget.textContent;
    if (newTextValue === note.text) {
      return;
    }
    console.log("note text changed");
    const updatedNoteObject: INote = {
      ...note,
      text: newTextValue || "",
    };
    onNoteUpdate(updatedNoteObject);
  };

  return (
    <div className={isFocused ? "note note--focused" : "note"}>
      <button
        onClick={() => {
          onNoteDelete(note);
        }}
        type="button"
        className="btn-close"
        aria-label="Close"
      ></button>
      <div
        onBlur={noteTextUpdated}
        onFocus={() => {
          setIsFocused(true);
        }}
        contentEditable={true}
        suppressContentEditableWarning={true}
        className="note__text"
      >
        {note.text}
      </div>
      <div className="note__link">
        <a href={note.link}>link</a>
      </div>
    </div>
  );
};

export default Note;
