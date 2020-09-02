import React from "react";
import "./App.css";
import { TitleComponent } from "./components/title/TitleComponent";
import { TypoComponent } from "./components/typo/TypoComponent";

function App() {
  const applicationTitle = "Typo";

  return (
    <div className="App">
      <header className="App-header">
        <TitleComponent title={applicationTitle}></TitleComponent>
      </header>
      <div>
        <TypoComponent></TypoComponent>
      </div>
    </div>
  );
}

export default App;
