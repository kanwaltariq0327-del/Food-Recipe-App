import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import RecipeItem from "../Components/Recipe-item"

export default function Home() {
  const { loader, recipeList } = useContext(GlobalContext);

  if (loader) {
    return 
    <div>Loading... Please Wait !</div>;
  }

  return (
    <div className="py-8 container flex justify-center flex-wrap gap-10 mx-auto">
      
      {recipeList && recipeList.length > 0
        ? recipeList.map((item) => <RecipeItem item={item} />)
        : <div>
            <p className="lg:text-4xl text-xl text-center text-white font-extrabold">Search Your Recipe...</p>
          </div>}

    </div>
  );
}
