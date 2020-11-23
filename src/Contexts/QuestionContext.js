import React, { createContext } from "react";

export const QuestionContext = createContext();

export default function QuestionContextProvider(props) {
  let complexQuestion = {};

  const complexQuestions = [
    {
      id: 1,
      name: "How do I lower my blood pressure?",
      color: "#cb2432",
      category: "Health",
      information:
        "This is informational text regarding what will be calculated here and why it is interesting. See it as an introduction to the questionaire you are about to complete.",
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
      id: 2,
      name: "How do I lower my cholesterol?",
      color: "#00aa8d",
      category: "Biology",
      information:
        "This is informational text regarding what will be calculated here and why it is interesting. See it as an introduction to the questionaire you are about to complete.",
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
      id: 3,
      name: "How long does alcohol stay in my system?",
      color: "#004e64",
      category: "Health",
      information:
        "This is informational text regarding what will be calculated here and why it is interesting. See it as an introduction to the questionaire you are about to complete.",

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
      id: 4,
      name: "Will I get kidney stones?",
      color: "#437db8",
      category: "Health",
      information:
        "This is informational text regarding what will be calculated here and why it is interesting. See it as an introduction to the questionaire you are about to complete.",

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
      //ADVERTISEMENT
      name: "",
      color: "none",
      image:
        "url(https://images-na.ssl-images-amazon.com/images/I/61GrcNbffXL._SX466_.jpg)",
      link: "",
    },
    {
      id: 5,
      name: "Should I do the keto diet?",
      color: "#f65462",
      category: "Health",
      information:
        "This is informational text regarding what will be calculated here and why it is interesting. See it as an introduction to the questionaire you are about to complete.",

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

  const values = {
    complexQuestion,
    complexQuestions,
  };

  return (
    <QuestionContext.Provider value={values}>
      {props.children}
    </QuestionContext.Provider>
  );
}
