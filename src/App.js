import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Four from "./components/Four";
import Hello from "./components/Hello";

function App() {
  return (
    <div>
      <h1>Routing Example</h1>
      <Routes>
        <Route path="/hello" element={<Hello />} />
        <Route path="/4" element={<Four />} />
        <Route path="/about" element={<About />} />
        <Route exact path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
