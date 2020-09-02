import React from "react";
import "./TextComponent.css";

interface Props {
  text: String;
  currentCharacterIndex: number;
  numOfKeyPresses: number;
  keyPressed: string;
}

export const TextComponent = ({ text, currentCharacterIndex }: Props) => {
  const formattedText = text.split("").map((letter, index) => {
    let isCorrectClass = "";
    if (index < currentCharacterIndex) {
      isCorrectClass = "correct";
    }
    return (
      <span key={index} className={`${isCorrectClass}`}>
        {letter}
      </span>
    );
  });

  return <div className="text-component">{formattedText}</div>;
};
