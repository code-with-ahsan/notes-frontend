import { FC, useRef, useState } from "react";
import { INote } from "../../interfaces/note.interface";
import "./Note.css";
import ContentEditable from "react-contenteditable";

interface INoteProps {
  note: INote;
}

const Note: FC<INoteProps> = ({ note }) => {
  const ceRef = useRef(null);
  const [disabled, setDisabled] = useState(false);
  return (
    <div
      className="note"
      onClick={() => {
        console.log("clicked");
        setDisabled(false);
        setTimeout(() => {
          const ref: any = ceRef?.current;
          ref.getEl().focus();
        }, 100);
      }}
    >
      <ContentEditable
        ref={ceRef}
        html={note.text}
        disabled={disabled}
        className="note__text"
        onChange={(e) => {
          note.text = e.target.value;
        }}
        onFocus={() => {
          setDisabled(false);
        }}
        onBlur={() => {
          console.log("blurred");
          console.log(note.text);
          setDisabled(true);
        }}
        tagName="article" // Use a custom HTML tag (uses a div by default)
      />
      <div className="note__link">{note.link}</div>
    </div>
  );
};

export default Note;
