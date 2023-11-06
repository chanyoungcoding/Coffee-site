import { Outlet } from "react-router-dom";
import StoryLink from "../components/CoffeeStory/components/StoryLink";

const CoffeeStoryCommon = () => {
  return (
    <div className="coffeestory">
      <StoryLink/>
      <div className="coffeestory__inner">
        <Outlet/>
      </div>
    </div>
  );
}

export default CoffeeStoryCommon;