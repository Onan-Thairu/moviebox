import Home from "./Home";
import DetailsPage from "./DetailsPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";

export default function Pages() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={ <Home /> }></Route>
        <Route path="/detail" element={ <DetailsPage /> }></Route>
      </Routes>
    </BrowserRouter>
  )
}