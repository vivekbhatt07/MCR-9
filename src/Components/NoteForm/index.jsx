import { useState } from "react";
import { ContainedActionBtn } from "../Actions";
import TextInput from "../TextInput";
import TextInputLabel from "../TextInputLabel";
import { useData } from "../../Context";

const NoteForm = (props) => {
  const [noteText, setNoteText] = useState("");
  const { state, dispatch } = useData();
  console.log(props.videoCode, noteText);

  const handleNoteSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: "ADD_NOTE",
      payload: { text: noteText, _id: props.videoCode },
    });
    props.closeModal();
  };
  return (
    <form className="flex flex-col gap-3" onSubmit={handleNoteSubmit}>
      <TextInputLabel labelText="Note Text">
        <TextInput inputHandle={(e) => setNoteText(e.target.value)} />
      </TextInputLabel>
      <ContainedActionBtn>ADD NEW NOTE</ContainedActionBtn>
    </form>
  );
};

export default NoteForm;
