// App.js

import React from "react";
import "./App.css";

import AuthProvider from "./provider/authProvider";
import Routes from "./routes/Routes";
function App() {
  return (
    <AuthProvider>
      <Routes />
    </AuthProvider>
  );
}

export default App;
