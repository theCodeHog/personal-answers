import React from "react";

export default function Question(props) {

  return (
    <div
      className="question-block drop-shadow"
      style={{
        backgroundColor: `${props.question.color}`,
      }}
    >
      <grid-item className="question-name">{props.question.name}</grid-item>
    </div>
  );
}
