import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PokemonByTypePage from "./pages/PokemonByTypePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-details/:pokemonId" element={<PokemonDetailsPage />} />
        <Route path="/pokemons-by-type/:type" element={<PokemonByTypePage />} /> 
      </Routes>
    </BrowserRouter>
  );
};

export default App
