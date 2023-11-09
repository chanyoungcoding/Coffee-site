import React from "react";
import YouTube from "react-youtube";

const RecipeYoutube:React.FC = () => {

  const options = {width : "1000px", height: "500px", playerVars: { autoplay: 1, modestbranding: 1, playlist: "auAQ_A--c5I"}}

  return ( 
    <div className="recipeyoutube">
      <YouTube 
        className="youtube"
        videoId="auAQ_A--c5I" //동영상 주소
        opts={options}
      />
    </div>
  );
}

export default RecipeYoutube;