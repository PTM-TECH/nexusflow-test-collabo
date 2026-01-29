import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Homepage from "./components/HomePage";
import Login from "./components/LogIn";
import Subscription from "./components/Subscription";

function App() {
  return (
    <div>
      <Homepage />
      <Dashboard />
      <Login />
      <Subscription />
    </div>
  );
}

export default App;
