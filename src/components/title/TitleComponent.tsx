import React from "react";
import "./TitleComponent.css";

export interface Props {
  title: string;
}

export const TitleComponent = ({ title }: Props) => {
  return (
    <div className="title-container">
      <h1>{title}</h1>
    </div>
  );
};
