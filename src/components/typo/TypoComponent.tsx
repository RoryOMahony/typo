import React, { useEffect, useCallback, useReducer } from "react";
import { TextComponent } from "../text/TextComponent";
import "./TypoComponent.css";
import { retrieveText } from "../../objects/TextRetriever";
import { InfoComponent } from "../info/InfoComponent";
import {
  TestInfoReducer,
  TEST_INFO_REDUCER_ACTIONS
} from "../../reducers/TestInfoReducer";
import { TestInfo } from "../../objects/TestInfo";

export const TypoComponent = () => {
  const [testInfo, testInfoDispatch] = useReducer(
    TestInfoReducer,
    new TestInfo(retrieveText())
  );

  const logKeyPress = useCallback(
    event => {
      const key = event.key;

      if (key === " " || key.length === 1) {
        testInfoDispatch({
          type: TEST_INFO_REDUCER_ACTIONS.KEY_PRESSED,
          payload: key
        });
      }
    },
    [testInfoDispatch]
  );

  useEffect(() => {
    window.addEventListener("keydown", logKeyPress);
    return () => {
      window.removeEventListener("keydown", logKeyPress);
    };
  }, [logKeyPress]);

  return (
    <div>
      <div id="text-component-container">
        <TextComponent
          text={testInfo.text}
          currentCharacterIndex={testInfo.currentCharacterIndex}
          numOfKeyPresses={testInfo.numOfKeysPressed}
          keyPressed={testInfo.keyPressed}
        ></TextComponent>
      </div>
      <div id="info-components-container">
        <div className="info-component-container">
          <InfoComponent title="Total Time" info="01:52"></InfoComponent>
        </div>
        <div className="info-component-container">
          <InfoComponent
            title="Accuracy"
            info={testInfo.accuracy}
          ></InfoComponent>
        </div>
        <div className="info-component-container">
          <InfoComponent title="WPM" info="64"></InfoComponent>
        </div>
      </div>
    </div>
  );
};
