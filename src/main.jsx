import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "@/global.css";
import Home from "@/pages/Home";
import Submission from "@/pages/Submission";
import Error from "@/pages/Error";
import NotFound from "@/pages/NotFound";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/error" element={<Error />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  </React.StrictMode>,
);
