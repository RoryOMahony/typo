import { TestInfo } from "../objects/TestInfo";

export const TEST_INFO_REDUCER_ACTIONS = {
  KEY_PRESSED: "KEY_PRESSED"
};

interface Action {
  type: string;
  payload: string;
}

export const TestInfoReducer = (state: TestInfo, action: Action) => {
  const updatedState = { ...state };

  console.log(updatedState);

  switch (action.type) {
    case TEST_INFO_REDUCER_ACTIONS.KEY_PRESSED:
      updatedState.keyPressed = action.payload;
      updatedState.numOfKeysPressed += 1;

      updateCharacterIndex(updatedState);
      updateAccuracy(updatedState);

      return updatedState;
    default:
      return state;
  }
};

function updateCharacterIndex(testInfo: TestInfo) {
  const requiredKey = testInfo.text.charAt(testInfo.currentCharacterIndex);
  if (checkKeyPress(testInfo.keyPressed, requiredKey)) {
    testInfo.currentCharacterIndex += 1;
  }
}

function checkKeyPress(keyPressed: string, requiredKey: string): boolean {
  return requiredKey === keyPressed;
}

function updateAccuracy(testInfo: TestInfo) {
  if (testInfo.currentCharacterIndex === 0) {
    if (testInfo.numOfKeysPressed === 0) {
      testInfo.accuracy = "--";
    } else {
      testInfo.accuracy = "0%";
    }
  } else {
    const percentage =
      (testInfo.currentCharacterIndex / testInfo.numOfKeysPressed) * 100;
    testInfo.accuracy = percentage.toFixed(0) + "%";
  }
}
