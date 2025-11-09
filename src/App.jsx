/* import { Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Skills from "./components/Skills";
import Work from "./components/Work";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Showmore from "./components/Showmore"; */
import Spline from "@splinetool/react-spline";
import { useState, Suspense } from "react";
/* import "./App.css"; */

function App() {
  const [splineLoading, setSplineLoading] = useState(true);

  return (
    <>
      <main className="relative min-h-screen w-full overflow-hidden bg-black">
        {splineLoading && (
          <div className="fixed inset-0 flex flex-col items-center justify-center bg-black z-50">
            <div className="relative w-16 h-16 mb-8">
              <div className="absolute w-full h-full border-4 border-white rounded-full opacity-20"></div>
              <div className="absolute w-full h-full border-4 border-white rounded-full border-t-transparent animate-spin"></div>
            </div>
            <div className="flex flex-col items-center">
              <div className="text-white text-2xl font-light tracking-wider mb-2">
                LOADING
              </div>
              <div className="flex space-x-1">
                <div
                  className="w-2 h-2 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0.2s" }}
                ></div>
                <div
                  className="w-2 h-2 bg-white rounded-full animate-bounce"
                  style={{ animationDelay: "0.4s" }}
                ></div>
              </div>
            </div>
          </div>
        )}

        <div className="absolute inset-0 z-0 scale-150 md:scale-125">
          <Suspense fallback={null}>
            <Spline
              scene="https://prod.spline.design/6y-Uyhml5PhnK1re/scene.splinecode"
              onLoad={() => setSplineLoading(false)}
            />
          </Suspense>
        </div>

        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-4">
          <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-8 animate-fade-in">
            Thanks for visiting my portfolio
          </h1>

          <a
            href="https://ashik-portfolio-web.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold md:text-white md:bg-transparent border-2 border-white rounded-full overflow-hidden transition-all duration-300 bg-white text-black md:hover:bg-white md:hover:text-black hover:scale-105 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
          >
            <span>Visit My New Portfolio</span>
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </a>
        </div>
      </main>
    </>
  );
}

export default App;
