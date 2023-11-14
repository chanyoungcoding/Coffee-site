import React from 'react';

import RecipeBanner from '../components/Recipe/RecipeHome/RecipeBanner';
import RecipeIntro from '../components/Recipe/RecipeHome/RecipeIntro';

const RecipeHome:React.FC = () => {

  return ( 
    <div className="recipehome">
      <RecipeBanner/>
      <RecipeIntro/>
    </div>
  );
}

export default RecipeHome;