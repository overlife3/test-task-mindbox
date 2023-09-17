import React, { FC } from "react";
import Clear from "./Clear/Clear";
import CountCurrentTask from "./CountCurrentTask/CountCurrentTask";
import SelectType from "./SelectType/SelectType";
import style from "./Footer.module.css";
const Footer: FC = () => {
  return (
    <div className={style.footer}>
      <CountCurrentTask />
      <SelectType />
      <Clear />
    </div>
  );
};

export default Footer;
