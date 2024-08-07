import React, { useState } from "react";
import useToggle from "../hooks/useToggle";

function Navbar() {
  const [isLogged, setIsLogged] = useToggle(false);

  return (
    <div>
      <button onClick={setIsLogged}>{isLogged ? "Logout" : "Login"}</button>
    </div>
  );
}

export default Navbar;
