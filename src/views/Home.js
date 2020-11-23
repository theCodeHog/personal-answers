import React, { useContext } from "react";

import QuestionBlock from "../components/QuestionBlock";
import { QuestionContext } from "../Contexts/QuestionContext";

function Home() {
  const { complexQuestions } = useContext(QuestionContext);

  let introText =
    "Providing personal answers to difficult questions based on your own individual input.";
  let introQuestion = "What would you like to know?";

  return (
    <div className="col-12 home centered">
      <p className="intro-text">{introText}</p>
      <p className="intro-question">{introQuestion}</p>
      <hr></hr>
      <div className="row">
        <div className="col-10 all-questions centered">
          {complexQuestions.map((complexQuestion, i) => {
            return (
              <QuestionBlock
                className="m-1"
                key={i}
                question={complexQuestion}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Home;
