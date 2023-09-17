import React, { FC, useEffect, useRef } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { TaskType } from "../../../types/types";
import AddTask from "../../AddTask/AddTask";
import Footer from "../../Footer/Footer";
import List from "../../List/List";
import style from "./TodosBody.module.css";

type Props = {
  setIsActive: (isActive: boolean) => void;
};

const tasks: TaskType[] = [
  {
    id: "1",
    text: "task 1",
    completed: false,
    state: "none",
  },
  {
    id: "2",
    text: "task 2",
    completed: true,
    state: "none",
  },
  {
    id: "3",
    text: "task 3",
    completed: false,
    state: "changes",
  },
];
const TodosBody: FC<Props> = ({ setIsActive }) => {
  const containerRef = useRef(null);
  const onActive = () => {
    setIsActive(true);
  };
  const onInactive = () => {
    setIsActive(false);
  };
  useOutsideClick(containerRef, onInactive);

  return (
    <div className={style.container} ref={containerRef} onClick={onActive}>
      <AddTask />
      <List />
      <Footer />
    </div>
  );
};

export default TodosBody;
