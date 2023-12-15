import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./page/HomePage";
import CocktailPage from "./page/CocktailPage";
import CocktailDetailsPage from "./page/CocktailDetailsPage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cocktails" element={<CocktailPage />} />
        <Route path="/cocktails/details/:id" element={<CocktailDetailsPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
