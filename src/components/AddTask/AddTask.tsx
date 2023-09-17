import React, { FC, useState } from "react";
import SvgSelector from "../../assets/SvgSelector";
import classNames from "classnames";

import style from "./AddTask.module.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actions } from "../../redux/reducer/todosReducer";
import { TaskType } from "../../types/types";
import { nanoid } from "@reduxjs/toolkit";
import { useAppSelector } from "../../hooks/useAppSelectore";
import { keyDownEnter } from "../../helpers/keyDownEnter";

type State = {
  inputVal: string;
};

const initialState: State = {
  inputVal: "",
};

const AddTask: FC = () => {
  const visibleList = useAppSelector((store) => store.todos.visibleList);
  const dispatch = useAppDispatch();
  const [state, setState] = useState(initialState);
  const arrowCn = classNames(style.arrow, { [style.active]: visibleList });

  const toggleIsOpen = () => {
    dispatch(actions.setVisibleList(!visibleList));
  };

  const handleInput: React.ChangeEventHandler<HTMLInputElement> = (e) => {
    setState((prevState) => ({ ...prevState, inputVal: e.target.value }));
  };

  const addTask = () => {
    const task: TaskType = {
      id: nanoid(),
      completed: false,
      state: "none",
      text: state.inputVal,
    };
    dispatch(actions.addTask(task));
    setState((prevState) => ({ ...prevState, inputVal: "" }));
    dispatch(actions.setVisibleList(true));
  };

  const handleKey: React.KeyboardEventHandler<HTMLInputElement> = (event) => {
    keyDownEnter(addTask, event);
  };

  return (
    <div className={style.add_task}>
      <button className={arrowCn} onClick={toggleIsOpen}>
        <SvgSelector name="arrow" />
      </button>
      <input
        type="text"
        placeholder="What needs to be done..."
        onChange={handleInput}
        value={state.inputVal}
        onKeyDown={handleKey}
      />
      {state.inputVal && (
        <button className={style.add} onClick={addTask}>
          Add
        </button>
      )}
    </div>
  );
};

export default AddTask;
