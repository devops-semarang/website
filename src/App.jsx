import { HashRouter as Router, Route, Routes } from "react-router-dom";
import { Events } from "./pages/events";
import { Index } from "./pages";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/events/:id" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
