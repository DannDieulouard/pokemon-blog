import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import PokemonDetailsPage from "./pages/PokemonDetailsPage";
import PokemonByTypePage from "./pages/PokemonByTypePage";
import PokemonRandomTeamPage from "./pages/PokemonRandomTeamPage";
import PokemonByResistancePage from "./pages/PokemonByResistancePage";
import SearchResultsPage from "./pages/SearchResultsPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/pokemon-details/:pokemonId" element={<PokemonDetailsPage />} />
        <Route path="/pokemons-by-type/:type" element={<PokemonByTypePage />} />
        <Route path="/pokemon-random-team/" element={<PokemonRandomTeamPage />} />
        <Route path="/pokemon-resistance/:type" element={<PokemonByResistancePage />} />
        <Route path="/search/:searchText" element={<SearchResultsPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App
