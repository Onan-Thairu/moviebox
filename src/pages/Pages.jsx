import Home from "./Home";
import Detail from "./Detail";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/detail" element={ <Detail /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}