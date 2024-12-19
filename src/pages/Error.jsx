import React from "react";
import { useNavigate } from "react-router-dom";

function Error() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>This is the Error route</h1>
      <button
        className="bg-red-500"
        onClick={() => {
          navigate("/submission"{});
        }}
      >
        Go To Home
      </button>
    </div>
  );
}
