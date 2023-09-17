import classNames from "classnames";
import React, { FC, useState } from "react";
import TodosBody from "./TodosBody/TodosBody";

import style from "./Todos.module.css";

const Todos: FC = () => {
  const [isActive, setIsActive] = useState(false);
  const todosCn = classNames(style.todos, { [style.active]: isActive });

  return (
    <div className={todosCn}>
      <h1>Todos</h1>
      <TodosBody setIsActive={setIsActive} />
    </div>
  );
};

export default Todos;
