import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";

function App() {

  // replace 'false' with a state variable that can be toggled between true and false
  // this will be used for the Dark Mode Toggle feature
  const [darkMode, setDarkMode] = useState(false);

  function handleClick(){
    setDarkMode((darkMode) => !darkMode )
  }


  const appClass = darkMode ? "App dark" : "App light";
  const buttonName = darkMode ? "Dark Mode" : "Light Mode";

  return (
    <div className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button onClick={handleClick}>{buttonName}</button>
      </header>
      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
