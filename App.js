import React, { useState } from "react";
import "./App.css";

function App() {
  // Properties
  const [showResults, setShowResults] = useState(false);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    {
      text: "In C, parameters are always'",
      options: [
        { id: 0, text: "Passed by value", isCorrect: true },
        { id: 1, text: "Passed by reference", isCorrect: false },
        { id: 2, text: "Non-pointer variables are passed by value and pointers are passed by reference", isCorrect: false },
        { id: 3, text: "Passesd by value result", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is true about return type of functions in C?",
      options: [
        { id: 0, text: "Functions can return any type", isCorrect: false },
        { id: 1, text: "Functions can return any type except array and functions", isCorrect: true },
        { id: 2, text: "Functions can return any type except array, functions and union", isCorrect: false },
        { id: 3, text: "Functions can return any type except array, functions, function pointer and union", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not a storage class specifier in C?",
      options: [
        { id: 0, text: "volatile", isCorrect: true },
        { id: 1, text: "register", isCorrect: false },
        { id: 2, text: "static", isCorrect: false },
        { id: 3, text: "auto", isCorrect: false },
      ],
    },
    {
      text: "Which of the following is not a logical operator?",
      options: [
        { id: 0, text: "||", isCorrect: false },
        { id: 1, text: "!", isCorrect: false },
        { id: 2, text: "&&", isCorrect: false },
        { id: 3, text: "|", isCorrect: true },
      ],
    },
    {
      text: "How are String represented in memory in C?",
      options: [
        { id: 0, text: "The object of some class", isCorrect: false },
        { id: 1, text: "An array of characters", isCorrect: true },
        { id: 2, text: "Same as other primitive datatype", isCorrect: true },
        { id: 3, text: "Linkedlist of character", isCorrect: false },
      ],
    },
  ];


  const optionClicked = (isCorrect) => {
    if (isCorrect) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResults(true);
    }
  };

  const restartGame = () => {
    setScore(0);
    setCurrentQuestion(0);
    setShowResults(false);
  };

  return (
    <div className="App">
      <h1>Placement Quiz</h1>

      <h2>Score: {score}</h2>

      {showResults ? (
        <div className="final-results">
          <h1>Final Results</h1>
          <h2>
            {score} out of {questions.length} correct - (
            {(score / questions.length) * 100}%)
          </h2>
          <button onClick={() => restartGame()}>Restart game</button>
        </div>
      ) : (
        <div className="question-card">
          <h2>
            Question: {currentQuestion + 1} out of {questions.length}
          </h2>
          <h3 className="question-text">{questions[currentQuestion].text}</h3>

          <ul>
            {questions[currentQuestion].options.map((option) => {
              return (
                <li
                  key={option.id}
                  onClick={() => optionClicked(option.isCorrect)}
                >
                  {option.text}
                </li>
              );
            })}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
