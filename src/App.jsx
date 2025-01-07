import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home.jsx";

function App() {
  return (
    <Router> {/* This is where BrowserRouter is wrapped around your app */}
      <div className="bg-[#1F1E24] text-zinc-50 h-screen w-screen flex">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
