import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ViewArtistPage from "./pages/ViewArtistPage";

function App() {
  const [favorite, setFavorite] = useState([]);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route
              path="/Home"
              element={
                <HomePage favorite={favorite} setFavorite={setFavorite} />
              }
            />
            <Route
              path="/Artists"
              element={
                <ViewArtistPage favorite={favorite} setFavorite={setFavorite} />
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
