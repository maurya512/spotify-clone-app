import React from "react";
import './App.css';
// import the login component into the main app page
import Login from "./Login";

function App() {
  return (
    // BEM (Block, Element and Modifier) naming convention
    <div className="app">
      <h1> something awesome is in the making</h1>
      <h3> check back shortly</h3>
      <Login></Login>
      {/* spotify logo */}
      {/* spotify login with button */}
    </div>
  );
}

export default App;
