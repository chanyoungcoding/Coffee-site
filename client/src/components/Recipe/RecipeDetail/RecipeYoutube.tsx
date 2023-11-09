import React from "react";
import YouTube from "react-youtube";
import { Data } from "../../../models/coffee";

interface YoutubeData {
  data: Data[] | undefined
}

const RecipeYoutube:React.FC<YoutubeData> = ({data}) => {
  const youtubeUrl = data?.map(item => item.youtube).toString();
  const options = {width : "1000px", height: "500px" }

  return ( 
    <div className="recipeyoutube">
      <YouTube 
        className="youtube"
        videoId={youtubeUrl}//동영상 주소
        opts={options}
      />
    </div>
  );
}

export default RecipeYoutube;