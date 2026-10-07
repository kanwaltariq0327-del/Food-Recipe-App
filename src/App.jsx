import { Routes, Route } from "react-router-dom"
import NavBar from "./Components/NavBar"
import Home from "./Pages/Home"
import Favorites from "./Pages/Favorites"
import Details from "./Pages/Details"


function App() {
  return (
      <>
        <div className="min-h-screen p-6 bg-black/85 text-white">
          <NavBar />
          <Routes >
            <Route path="/" element={<Home />} />
            <Route path="/Favorites" element={<Favorites />} />
            <Route path="/Recipe-item/:id" element={<Details />} />
          </Routes>
        </div>
      </>
  )
}

export default App
