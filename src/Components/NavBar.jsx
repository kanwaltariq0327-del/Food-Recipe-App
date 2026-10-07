import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../Context/Context";

export default function NavBar() {

    const { search, setSearch, handleSubmit } = useContext(GlobalContext);
    

  return (
    <nav className="flex justify-between items-center p-8 mx-auto flex-col gap-5 lg:flex-row lg:gap-0 bg-pink-950 rounded-tl-4xl rounded-br-4xl">
      <h2 className="text-2xl font-semibold">
        <NavLink
          to={"/"}
          className="text-white hover:text-gary-700 duration-300"
        >
          Food Recipe
        </NavLink>
      </h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search Item..."
          className="bg-white/75 text-black placeholder:text-gray-500 p-3 px-8 rounded-full outline-none lg:w-96 shadow-lg shadow-black/45 focus:shadow-white/25"
        />
      </form>

      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-white hover:text-cyan-700 duration-300"
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/Favorites"}
            className="text-white hover:text-cyan-700 duration-300"
          >
            Favorites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
