import React, { FC } from "react";
import { useAppSelector } from "../../hooks/useAppSelectore";
import Task from "../Task/Task";
import style from "./List.module.css";

const List: FC = () => {
  const { tasks, visibleList, typeTasks } = useAppSelector(
    (store) => store.todos
  );
  let items = tasks;
  let message = "There are no tasks yet";

  if (typeTasks === "active") {
    message = "There are no active tasks yet";
    items = items.filter((task) => !task.completed);
  }
  if (typeTasks === "completed") {
    message = "There are no completed tasks yet";
    items = items.filter((task) => task.completed);
  }

  if (!visibleList) {
    return null;
  }

  if (items.length === 0) {
    return <div className={style.no_tasks}>{message}</div>;
  }

  return (
    <div>
      {items.map((task) => (
        <Task id={task.id} key={task.id} />
      ))}
    </div>
  );
};

export default List;
