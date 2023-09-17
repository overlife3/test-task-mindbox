import React, { FC } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { actions } from "../../../redux/reducer/todosReducer";
import style from "./Clear.module.css";

const Clear: FC = () => {
  const dispatch = useAppDispatch();

  const clearCompleted = () => {
    dispatch(actions.clearCompleted());
  };

  return (
    <button className={style.clear} onClick={clearCompleted}>
      Clear completed
    </button>
  );
};

export default Clear;
