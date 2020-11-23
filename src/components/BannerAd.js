import React from "react";

export default function BannerAd(props) {
  return (
    <div
      className="ad-banner-block"
      style={{
        backgroundImage: props.image.imageUrl,
        paddingTop: props.image.paddingTop,
      }}
    ></div>
  );
}
