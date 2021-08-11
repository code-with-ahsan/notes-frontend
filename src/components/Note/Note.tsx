import { FC } from "react";
import INote from "../../interfaces/note.interface";
import "./Note.css";

type Props = {
  note: INote;
};

const Note: FC<Props> = ({ note }) => {
  return (
    <div className="note">
      <div className="note__text">{note.text}</div>
      <div className="note__link">
        <a href={note.link}>link</a>
      </div>
    </div>
  );
};

export default Note;
