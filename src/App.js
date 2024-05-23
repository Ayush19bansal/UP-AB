import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import theme from "./Component/theme"; // Import your custom theme if you have one
import Login from "./Component/Login/Login";
import SignUp from "./Component/Login/Register";
import Home from "./Component/Home";
import UserContext from "./Component/UserContext";
import { auth } from "./Component/Firebase/Firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css"

function App() {
  const [user, setUser] = useState();
  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
  });
  return (
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <UserContext>
        <Router>
          <div className="App">
            <div className="auth-wrapper">
              <div className="auth-inner">
                <Routes>
                  <Route
                    path="/"
                    element={user ? <Navigate to="/profile" /> : <Login />}
                  />
                  <Route path="/login" element={<Login />} />
                  <Route path="/register" element={<SignUp />} />
                  <Route path="/profile" element={<Home />} />
                </Routes>
                <ToastContainer />
              </div>
            </div>
          </div>
        </Router>
      </UserContext>
    </ChakraProvider>
  );
}

export default App;
