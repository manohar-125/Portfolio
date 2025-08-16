import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from "react";
import "./index.css";
import Home from "./Pages/Home";
import About from "./Pages/About";
import AnimatedBackground from "./components/Background";
import Navbar from "./components/Navbar";
import Portofolio from "./Pages/Portofolio";
import ContactPage from "./Pages/Contact";
import ProjectDetails from "./components/ProjectDetail";
import WelcomeScreen from "./Pages/WelcomeScreen";
import { AnimatePresence } from "framer-motion";

const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <>
          <Navbar />
          <AnimatedBackground />
          <Home />
          <About />
          <Portofolio />
          <ContactPage />
          <footer className="text-center py-4">
            <span className="block text-sm pb-4 text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()}{" "}
              <a
                href="https://www.linkedin.com/in/shyam-manohar-gupta-a12726230/"
                className="hover:underline text-indigo-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                Shyam Manohar Gupta
              </a>
              . All Rights Reserved.
            </span>
          </footer>
        </>
      )}
    </>
  );
};

const ProjectPageLayout = () => (
  <>
    <ProjectDetails />
    <footer className="text-center py-4">
      <span className="block text-sm pb-4 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()}{" "}
        <a
          href="https://www.linkedin.com/in/shyam-manohar-gupta-a12726230/"
          className="hover:underline text-indigo-400"
          target="_blank"
          rel="noopener noreferrer"
        >
          Shyam Manohar Gupta
        </a>
        . All Rights Reserved.
      </span>
    </footer>
  </>
);

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <LandingPage
              showWelcome={showWelcome}
              setShowWelcome={setShowWelcome}
            />
          }
        />
        <Route path="/project/:id" element={<ProjectPageLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
