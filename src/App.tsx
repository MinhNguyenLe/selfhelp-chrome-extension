import * as React from "react";
import "./App.scss";
import InputNewVocabulary from "./components/InputNewVocabulary";
import Quizzes from "./components/Quizzes";

const App = () => {
  return (
    <div className="popup">
      <InputNewVocabulary />
      <Quizzes />
    </div>
  );
};

export default App;
