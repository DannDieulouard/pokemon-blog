import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PokemonByTypePage from "./pages/PokemonByTypePage";
import PokemonRandomTeamPage from "./pages/PokemonRandomTeamPage";
import PokemonFinderPage from "./pages/PokemonFinderPage";
import PokemonByResistancePage from "./pages/PokemonByResistancePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-details/:pokemonId" element={<PokemonDetailsPage />} />
        <Route path="/pokemons-by-type/:type" element={<PokemonByTypePage />} />
        <Route path="/pokemon-random-team/" element={<PokemonRandomTeamPage />} />
        <Route path="/pokemon-finder/" element={<PokemonFinderPage />} />
        <Route path="/pokemon-resistance/:type" element={<PokemonByResistancePage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
