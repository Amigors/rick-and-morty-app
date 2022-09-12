import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import { store } from "./redux/store";
import CharactersList from "./pages/CharactersList";
import CharacterCard from "./pages/CharacterCard";
import { Layout } from "./components/Layout";

const root = createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="list" element={<CharactersList />} />
            <Route path="card/:userId" element={<CharacterCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);
