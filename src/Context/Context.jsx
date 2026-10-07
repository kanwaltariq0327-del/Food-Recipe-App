import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const GlobalContext = createContext(null);

export default function GlobalContextProvider({ children }) {
  const [search, setSearch] = useState("");
  const [loader, setLoader] = useState(false);
  const [recipeList, setRecipeList] = useState([]);
  const [recipeDetailData, setRecipeDetailData] = useState(null);
  const [favoritesList, setFavoriteList] = useState([]);

  const navigate = useNavigate()

  async function handleSubmit(e) {
    e.preventDefault();
    setLoader(true);
    try {
      const response = await fetch(
        `https://forkify-api.jonas.io/api/v2/recipes?search=${search}`,
      );
      const data = await response.json();

      console.log(search);
      
      if (data?.data?.recipes) {
        setRecipeList(data?.data?.recipes);
        setLoader(false);
        setSearch("");
        navigate('./')
      }
    } catch (error) {
      console.log(error);
      setLoader(false);
      setSearch("");
    }
  }

  function handleAddToFavorite (getCurrentItem) {
    let copyFavoritesList = [...favoritesList];
    const index = copyFavoritesList.findIndex(item => item.id === getCurrentItem.id)

    if(index === -1){
      copyFavoritesList.push(getCurrentItem)
    }else {
      copyFavoritesList.splice(index)
    }

    setFavoriteList(copyFavoritesList);
  }

  return (
    <GlobalContext.Provider
      value={{
        search,
        setSearch,
        loader,
        recipeList,
        handleSubmit,
        recipeDetailData,
        setRecipeDetailData,
        handleAddToFavorite,
        favoritesList,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
