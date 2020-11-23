import React from "react";
import { useHistory } from "react-router-dom";
import BannerAd from "../components/BannerAd";
import Questionaire from "../components/Questionaire";

export default function QuestionPage() {
  let history = useHistory();
  let complexQuestion = history.location.state.question;

  let imageUrls = [
    {
      imageUrl:
        "url(https://www.eventsvanuatu.com/wp-content/uploads/2017/03/3erwerhb.gif)",
      paddingTop: "22%",
    },
    {
      imageUrl:
        "url(https://blog.hubspot.com/hubfs/Banner%20Ads%20Explained%20in%20500%20Words%20or%20Less.png)",
      paddingTop: "16%",
    },
  ];

  return (
    <div>
      <div
        className="title-block"
        style={{
          backgroundColor: `${complexQuestion.color}`,
        }}
      >
        {complexQuestion.name}
      </div>

      <BannerAd image={imageUrls[0]} />

      <div className="form m-5">{complexQuestion.information}</div>

      <Questionaire question={complexQuestion} />

      <BannerAd image={imageUrls[1]} />
    </div>
  );
}
