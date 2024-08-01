import React, { useEffect } from "react";

export default function FunctionDisplay() {
  useEffect(() => {
    //* GET /appointments
    console.log("FunctionDisplay se montó al DOM");
  }, []);

  useEffect(
    () => () => {
      console.log("FunctionDisplay se irá del DOM");
    },
    []
  );

  return (
    <div style={{ backgroundColor: "darkslategrey" }}>
      <h3>Display</h3>
    </div>
  );
}
