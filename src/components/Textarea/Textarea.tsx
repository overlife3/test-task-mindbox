import React, { FC, useRef, useEffect } from "react";
import style from "./Textarea.module.css";

type Props = {
  handleTextarea: (text: string) => void;
  value: string;
  focus?: boolean;
  handleKeyDown?: React.KeyboardEventHandler<HTMLTextAreaElement>;
};

const Textarea: FC<Props> = ({
  handleTextarea,
  value,
  focus,
  handleKeyDown,
}) => {
  const textareaRef = useRef(null);
  const handleChange: React.ChangeEventHandler<HTMLTextAreaElement> = (e) => {
    if (e.target.parentElement)
      e.target.parentElement.dataset.replicatedValue = e.target.value;
    const text = e.target.value;
    handleTextarea(text);
  };

  useEffect(() => {
    const elem: any = textareaRef.current;
    if (elem && focus) {
      elem.select();
    }
  }, [textareaRef]);

  return (
    <div className={style.textarea_grow_wrap}>
      <textarea
        className={style.textarea}
        name="text"
        id="text"
        onChange={handleChange}
        value={value}
        rows={1}
        ref={textareaRef}
        onKeyDown={handleKeyDown}
      ></textarea>
    </div>
  );
};

export default Textarea;
