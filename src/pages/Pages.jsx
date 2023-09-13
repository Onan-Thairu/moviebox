import Home from "./Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}