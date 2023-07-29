import { useState } from "react";
import { ContainedActionBtn } from "../Actions";
import TextInput from "../TextInput";
import TextInputLabel from "../TextInputLabel";
import { useData } from "../../Context";

const NoteForm = (props) => {
  const [noteText, setNoteText] = useState(
    props.editText ? props.editText : ""
  );
  const { state, dispatch } = useData();

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: `${props.editText ? "EDIT" : "ADD"}_NOTE`,
      payload: props.editText
        ? { text: noteText, _id: props.noteCode }
        : { text: noteText, _id: props.videoCode },
    });
    props.closeModal();
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleNoteSubmit}>
      <TextInputLabel labelText="Note Text">
        <TextInput
          inputHandle={(e) => setNoteText(e.target.value)}
          inputValue={noteText}
        />
      </TextInputLabel>
      <ContainedActionBtn>
        {props.editText ? "EDIT" : "ADD NEW"} NOTE
      </ContainedActionBtn>
    </form>
  );
};

export default NoteForm;
