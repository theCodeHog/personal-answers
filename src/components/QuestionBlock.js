import React from "react";
import { useHistory } from "react-router-dom";

export default function Question(props) {
  let history = useHistory();

  const goToQuestion = async (id, question) => {
    await history.push({
      pathname: `/${id}`,
      state: { question },
    });
  };

  const goToLink = (link) => {
    history.push(link);
  };

  return (
    <div
      className="question-block drop-shadow "
      style={{
        backgroundColor: `${props.question.color}`,
        backgroundImage: props.question.image,
        backgroundSize: "contain",
        boxShadow: props.question.image
          ? "none"
          : "2px 2px 2px rgba(0, 0.3, 0.3, 0.2)",
      }}
      onClick={() => {
        props.question.image
          ? goToLink(props.question.link)
          : goToQuestion(props.question.id, props.question);
      }}
    >
      <grid-item className="question-name ">{props.question.name}</grid-item>
    </div>
  );
}
