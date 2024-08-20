import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Events } from "./pages/events";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/events/:id" element={<Events />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
