import classNames from "classnames";
import React, { FC, useEffect, useRef, useState } from "react";
import useOutsideClick from "../../../hooks/useOutsideClick";
import { StateForTaskType } from "../../../types/types";
import EditTaskText from "./EditTaskText/EditTaskText";
import style from "./TaskText.module.css";
type Props = {
  textTask: string;
  completed: boolean;
  stateTask: StateForTaskType;
  toggleStateTask: () => void;
};

const TaskText: FC<Props> = ({
  textTask,
  completed,
  stateTask,
  toggleStateTask,
}) => {
  const [text, setText] = useState(textTask);
  const wrapperRef = useRef(null);
  const wrapperCn = classNames(
    style.wrapper,
    {
      [style.change]: stateTask === "changes",
    }, // задаю display: none, чтобы было погружение события клика
    { [style.completed]: completed }
  );
  const onOpen = () => {
    toggleStateTask();
  };

  return (
    <div className={wrapperCn} ref={wrapperRef}>
      <div className={style.edit_task_text}>
        {stateTask === "changes" && (
          <EditTaskText
            parentRef={wrapperRef}
            setText={setText}
            text={text}
            toggleStateTask={toggleStateTask}
          />
        )}
      </div>

      <p className={style.text} onClick={onOpen}>
        {textTask}
      </p>
    </div>
  );
};

export default TaskText;
