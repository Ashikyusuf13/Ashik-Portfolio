import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Showmore from "./components/Showmore";
import "./App.css";

function App() {
  return (
    <Router>
      <Header />
      <main className="l-main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Project />
                <Contact />
              </>
            }
          />
          <Route path="/showmore" element={<Showmore />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
