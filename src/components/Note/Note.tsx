import { FC, FormEvent } from "react";
import INote from "../../interfaces/note.interface";
import "./Note.css";

type Props = {
  note: INote;
  onNoteValueUpdated: (note: INote) => void;
};

const Note: FC<Props> = ({ note, onNoteValueUpdated }) => {
  const onNoteChange = (ev: FormEvent<HTMLDivElement>) => {
    const newValue = ev.currentTarget.textContent || "";
    if (newValue === note.text) {
      return;
    }
    onNoteValueUpdated({
      ...note,
      text: ev.currentTarget.textContent || "",
    });
  };

  return (
    <div className="note">
      <div
        suppressContentEditableWarning={true}
        onBlur={onNoteChange}
        contentEditable={true}
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
