import "./App.css";
import Beers from "./views/Beers";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router";
import NotFound from "./views/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/beers" element={<Beers />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
