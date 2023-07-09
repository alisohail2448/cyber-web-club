import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Event from "./pages/Event";
import Registration from "./pages/Registration";
import Main from "./pages/Main";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/event" element={<Event />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </Router>
      <Toaster position="top-center" reverseOrder={false}
        toastOptions={{
          style: {
            background: '#000000',
            color: '#fff',
          }
        }} />
    </>
  );
}

export default App;
