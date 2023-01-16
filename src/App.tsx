import React, {} from 'react';
import { Box } from "@mui/material";
import { BrowserRouter, Route, Route as Routes } from "react-router-dom";
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
              route.protected ? (
                  <route.component />
              ) : (
                <route.component />
              )
            }
          />
        ))}
      </Routes>
    </BrowserRouter>
  </Box>
  );
}

export default App;
