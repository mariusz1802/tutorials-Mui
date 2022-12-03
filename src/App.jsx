import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Tour from "./pages/Tour";
import SearchAppBar from "./components/AppBar";
function App() {
  return (
    <BrowserRouter>
      <SearchAppBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/tour" element={<Tour />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
