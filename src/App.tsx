import React, {} from 'react';
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routes";

function App() {
  return (
    <Box>
    <BrowserRouter basename='/'>
      <Routes>
        {routes?.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            element={
              <route.component />
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  </Box>
  );
}

export default App;
