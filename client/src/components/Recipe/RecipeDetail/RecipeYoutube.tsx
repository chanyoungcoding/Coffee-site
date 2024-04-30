import React from "react";
import YouTube from "react-youtube";
import { Data } from "../../../models/coffee";
import styled from "styled-components";

interface YoutubeData {
  data: Data[] | undefined
}

const YoutubeContainer = styled.div`
  height: 600px;
  .youtube {
    display: flex;
    justify-content: center;
  }
`

const RecipeYoutube:React.FC<YoutubeData> = ({data}) => {
  const youtubeUrl = data?.map(item => item.youtube).toString();
  const options = {width : "1000px", height: "500px" }

  return ( 
    <YoutubeContainer>
      <YouTube 
        className="youtube"
        videoId={youtubeUrl}
        opts={options}
      />
    </YoutubeContainer>
  );
}

export default RecipeYoutube;