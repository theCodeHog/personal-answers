import React, { createContext, useState, useEffect } from "react";

export const QuestionContext = createContext();

export default function QuestionContextProvider(props) {
  const [questions, setQuestions] = useState([]);

  const fetchQuestions = () => {
    /* let data = await fetch(`http://localhost:3000/questions`);
    data = await data.json(); */

    let data = [
      {
        name: "How do I lower my blood pressure?",
        color: "#cb2432",
        category: "Health",
        questions: [
          {
            name: "Are you male or female?",
            answers: [],
          },
          { name: "How old are you?", answers: [] },
          {
            name: "What are your favorite colors?",
            answers: [],
          },
        ],
        tests: [
          {
            name: "test1",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
          {
            name: "test2",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
        ],
      },
      {
        name: "How do I lower my cholesterol?",
        color: "#00aa8d",
        category: "Biology",
        questions: [
          {
            name: "Are you male or female?",
            answers: [],
          },
          { name: "How old are you?", answers: [] },
          {
            name: "What are your favorite colors?",
            answers: [],
          },
        ],
        tests: [
          {
            name: "test1",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
          {
            name: "test2",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
        ],
      },
      {
        name: "How long does alcohol stay in my system?",
        color: "#004e64",
        category: "Health",
        questions: [
          {
            name: "Are you male or female?",
            answers: [],
          },
          { name: "How old are you?", answers: [] },
          {
            name: "What are your favorite colors?",
            answers: [],
          },
        ],
        tests: [
          {
            name: "test1",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
          {
            name: "test2",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
        ],
      },
      {
        name: "Will I get kidney stones?",
        color: "#0056ad",
        category: "Health",
        questions: [
          {
            name: "Are you male or female?",
            answers: [],
          },
          { name: "How old are you?", answers: [] },
          {
            name: "What are your favorite colors?",
            answers: [],
          },
        ],
        tests: [
          {
            name: "test1",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
          {
            name: "test2",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
        ],
      },
      {
        name: "Should I do the keto diet?",
        color: "#f65462",
        category: "Health",
        questions: [
          {
            name: "Are you male or female?",
            answers: [],
          },
          { name: "How old are you?", answers: [] },
          {
            name: "What are your favorite colors?",
            answers: [],
          },
        ],
        tests: [
          {
            name: "test1",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
          {
            name: "test2",
            description: "You need to test the following: etc",
            possibleResults: [],
          },
        ],
      },
    ];
    setQuestions(data);
  };

  useEffect(() => {
    fetchQuestions();
  }, []);

  const values = {
    questions,
  };

  return (
    <QuestionContext.Provider value={values}>
      {props.children}
    </QuestionContext.Provider>
  );
}
