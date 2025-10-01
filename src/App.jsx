import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Showmore from "./components/Showmore";
import "./App.css";

function App() {
  const location = useLocation();

  return (
    <div>
      {location.pathname !== "/showmore" && <Header />}
      <main className="l-main">
        <Routes>
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Skills />
                <Work />
                <Contact />
              </>
            }
          />
          <Route path="/showmore" element={<Showmore />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
