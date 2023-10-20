import React from "react";
import "./Cell.css";
import { ICellProps } from "../../../type/cell";
import { levelNumbers } from "../../../utils/utils";

const Cell = ({ title, backgroundImage, boatImage, typeImage, level }: ICellProps) => {
  return (
    <div className="cell">
      <img className="cell__type" src={`https:${typeImage}`} alt={title} />
      <p className="cell__lvl">{levelNumbers.get(level)}</p>
      <img className="cell__boat" src={`https:${boatImage}`} alt={title} />
      <img className="cell__background" src={`https:${backgroundImage}`} alt={title} />
      <h2 className="cell__title">{title}</h2>
    </div>
  );
};

export default Cell;
