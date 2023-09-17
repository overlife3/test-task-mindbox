import classNames from "classnames";
import React, { FC } from "react";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useAppSelector } from "../../../hooks/useAppSelectore";
import { actions } from "../../../redux/reducer/todosReducer";
import style from "./SelectType.module.css";
const SelectType: FC = () => {
  const dispatch = useAppDispatch();
  const typeTasks = useAppSelector((store) => store.todos.typeTasks);

  const btnAllCn = classNames(style.btn, {
    [style.selected]: typeTasks === "all",
  });
  const btnActiveCn = classNames(style.btn, {
    [style.selected]: typeTasks === "active",
  });
  const btnCompletedCn = classNames(style.btn, {
    [style.selected]: typeTasks === "completed",
  });

  const setAll = () => {
    dispatch(actions.setTypeTasks("all"));
  };
  const setActive = () => {
    dispatch(actions.setTypeTasks("active"));
  };
  const setCompleted = () => {
    dispatch(actions.setTypeTasks("completed"));
  };

  return (
    <div className={style.wrapper}>
      <button className={btnAllCn} onClick={setAll}>
        All
      </button>
      <button className={btnActiveCn} onClick={setActive}>
        Active
      </button>
      <button className={btnCompletedCn} onClick={setCompleted}>
        Completed
      </button>
    </div>
  );
};

export default SelectType;
