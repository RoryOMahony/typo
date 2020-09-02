import React from "react";
import "./InfoComponent.css";

interface Props {
  title: string;
  info: string;
}

export const InfoComponent = ({ title, info }: Props) => {
  return (
    <div id="info-component">
      <div>{title}</div>
      <div>{info}</div>
    </div>
  );
};
