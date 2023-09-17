import classNames from "classnames";
import React, { FC, useState } from "react";
import { IdType, TaskType } from "../../types/types";
import TaskText from "./TaskText/TaskText";
import style from "./Task.module.css";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { actions } from "../../redux/reducer/todosReducer";
import { useAppSelector } from "../../hooks/useAppSelectore";
import { getTaskById } from "../../helpers/getTaskById";
import SvgSelector from "../../assets/SvgSelector";
import { TaskContext } from "../../context/taskContext";
type Props = {
  id: IdType;
};

const Task: FC<Props> = ({ id }) => {
  const tasks = useAppSelector((store) => store.todos.tasks);
  const task = getTaskById(tasks, id) as TaskType;
  const dispatch = useAppDispatch();
  const taskCn = classNames(style.task, {
    [style.completed]: task.completed,
  });

  const toggleCompleted = () => {
    dispatch(actions.toggleCompletedTask(id));
  };

  const toggleStateTask = () => {
    dispatch(actions.toggleStateTask(id));
  };

  const removeTask = () => {
    dispatch(actions.removeTask(id));
  };
  return (
    <TaskContext.Provider value={{ id }}>
      <div className={taskCn}>
        <button className={style.toggle_completed} onClick={toggleCompleted} />
        <TaskText
          stateTask={task.state}
          textTask={task.text}
          completed={task.completed}
          toggleStateTask={toggleStateTask}
        />
        <button className={style.remove_task} onClick={removeTask}>
          <SvgSelector name="cross" />
        </button>
      </div>
    </TaskContext.Provider>
  );
};

export default Task;
