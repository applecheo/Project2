import { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import UserInput from "./components/UserInput";

import Layout from "./Layout";
import HomePage from "./pages/HomePage";
import ViewArtistPage from "./pages/ViewArtistPage";
import GlobalStyles from "./styles/globalStyles";
import { theme } from "./styles/themeStyles";

function App() {
  const [favorite, setFavorite] = useState([]);
  const [name, setName] = useState("");

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<UserInput setName={setName} />} />
              <Route
                path="/home"
                element={
                  <HomePage
                    favorite={favorite}
                    setFavorite={setFavorite}
                    name={name}
                  />
                }
              />
              <Route
                path="/artists"
                element={
                  <ViewArtistPage
                    favorite={favorite}
                    setFavorite={setFavorite}
                  />
                }
              />
            </Route>
          </Routes>
        </BrowserRouter>
      </div>
    </ThemeProvider>
  );
}

export default App;
