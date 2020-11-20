import React, { useContext } from "react";

import QuestionBlock from "../QuestionBlock";
import { QuestionContext } from "../../Contexts/QuestionContextProvider";

function Home() {
  const { questions } = useContext(QuestionContext);

  let introText =
    "Providing personal answers to difficult questions based on your own individual input.";
  let introQuestion = "What would you like to know?";

  return (
    <div className="col-12 home">
      <p className="intro-text">{introText}</p>
      <p className="intro-question">{introQuestion}</p>
      <hr></hr>
      <grid-container>
        {questions.map((question, i) => {
          return (
            <QuestionBlock
              className="m-1 q-block"
              key={i}
              question={question}
            />
          );
        })}
      </grid-container>
    </div>
  );
}

export default Home;
