import React from 'react';
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import routes from "./config/routes";
import AuthChecker from './config/AuthCheker';
import AuthCheckerPublic from './config/AuthCheckerPublic';

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
                <AuthChecker >
                  <route.component />
                </AuthChecker>
              ) : (
                <AuthCheckerPublic>
                     <route.component />
                </AuthCheckerPublic>
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
