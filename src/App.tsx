import React, { useEffect } from 'react';
import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import routes from "./config/routes";
import AuthChecker from './config/AuthCheker';
import { useAuth } from './components/hooks/useAuth';


function App() {
  const { isAuthenticated } = useAuth()

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
                <AuthChecker >
                <route.component />
              </AuthChecker>
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
