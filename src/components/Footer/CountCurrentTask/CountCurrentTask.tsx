import React, { FC } from "react";
import { useAppSelector } from "../../../hooks/useAppSelectore";
import style from "./CountCurrentTask.module.css";
type Props = {};

const CountCurrentTask: FC<Props> = () => {
  const tasks = useAppSelector((store) => store.todos.tasks);
  const countCurrent: number = tasks.reduce((acc, task) => {
    if (task.completed === false) return (acc += 1);
    else return acc;
  }, 0);
  let text = `${countCurrent} `;
  switch (countCurrent) {
    case 1:
      text += "item left";
      break;

    default:
      text += "items left";
      break;
  }
  return <div className={style.count}>{text}</div>;
};

export default CountCurrentTask;
