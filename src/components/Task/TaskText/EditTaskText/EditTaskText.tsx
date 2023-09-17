import React, { FC, useContext, useState } from "react";
import SvgSelector from "../../../../assets/SvgSelector";
import { TaskContext } from "../../../../context/taskContext";
import { keyDownEnter } from "../../../../helpers/keyDownEnter";
import { useAppDispatch } from "../../../../hooks/useAppDispatch";
import useOutsideClick from "../../../../hooks/useOutsideClick";
import { actions } from "../../../../redux/reducer/todosReducer";
import Textarea from "../../../Textarea/Textarea";
import style from "./EditTaskText.module.css";

type Props = {
  parentRef: React.MutableRefObject<null>;
  setText: (text: string) => void;
  text: string;
  toggleStateTask: () => void;
};

type State = {
  textareaVal: string;
};

const EditTaskText: FC<Props> = ({ text, toggleStateTask, parentRef }) => {
  const { id } = useContext(TaskContext);
  const dispatch = useAppDispatch();
  const initialState: State = { textareaVal: text };
  const [state, setState] = useState<State>(initialState);
  const onClose = () => {
    toggleStateTask();
  };
  useOutsideClick(parentRef, onClose);
  const handleTextarea = (text: string) => {
    setState((prevState) => ({ ...prevState, textareaVal: text }));
  };

  const handleEdit = () => {
    onClose();
    dispatch(actions.editTextTask({ id, text: state.textareaVal }));
  };
  const handleKey: React.KeyboardEventHandler<HTMLTextAreaElement> = (
    event
  ) => {
    keyDownEnter(handleEdit, event);
  };
  return (
    <div className={style.container}>
      <Textarea
        handleTextarea={handleTextarea}
        value={state.textareaVal}
        handleKeyDown={handleKey}
        focus
      />
      {state.textareaVal && (
        <button className={style.save_change} onClick={handleEdit}>
          <SvgSelector name="ok" />
        </button>
      )}
    </div>
  );
};

export default EditTaskText;
