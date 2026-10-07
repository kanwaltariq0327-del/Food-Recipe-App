import { useContext } from "react";
import { GlobalContext } from "../Context/Context";
import RecipeItem from "../Components/Recipe-item"

export default function Favorites() {
  const { favoritesList } = useContext(GlobalContext);

  return (
    <div className="py-8 container flex justify-center flex-wrap gap-10 mx-auto">
      {favoritesList && favoritesList.length > 0 ? (
        favoritesList.map((item) => <RecipeItem item={item} />)
      ) : (
        <div>
          <p className="lg:text-4xl text-xl text-center text-white font-extrabold">
            No Recipe Added To Favorite...
          </p>
        </div>
      )}
    </div>
  );
}
