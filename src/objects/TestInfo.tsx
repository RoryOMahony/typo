export interface TestInfo {
  totalTime: string;
  accuracy: string;
  wpm: string;
  numOfKeysPressed: number;
  currentCharacterIndex: number;
  keyPressed: string;
  text: string;
}

export class TestInfo {
  totalTime = "00:00";
  accuracy = "--";
  wpm = "--";
  numOfKeysPressed = 0;
  currentCharacterIndex = 0;
  keyPressed = "";

  constructor(text: string) {
    this.text = text;
  }
}
