import React from "react";
import User from "./Chapter31/User";
import ErrorBoundary from "./Chapter31/ErrorBoundary";

function App() {
  const user = {
    id: 1,
    username: "hee",
  };
  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
