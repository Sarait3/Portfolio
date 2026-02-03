import { useEffect, useState } from "react";
import Header from "./components/header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/projects";
import Contact from "./components/Contact";
import Footer from "./components/footer";
import IntroLoader from "./components/IntroLoader";
import "./App.css";

const LOADER_DURATION = 1200;
const FADE_OUT = 450;

function App() {
  const [showLoader, setShowLoader] = useState(() => {
    return sessionStorage.getItem("intro_seen") !== "1";
  });

  const [loaderLeaving, setLoaderLeaving] = useState(false);

  useEffect(() => {
    if (!showLoader) {
      window.__INTRO_DONE__ = true;
      return;
    }

    const t1 = setTimeout(() => {
      setLoaderLeaving(true);
    }, LOADER_DURATION);

    const t2 = setTimeout(() => {
      setShowLoader(false);
      sessionStorage.setItem("intro_seen", "1");

      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          window.__INTRO_DONE__ = true;
          window.dispatchEvent(new Event("intro:done"));
        });
      });
    }, LOADER_DURATION + FADE_OUT);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [showLoader]);

  return (
    <>
      {showLoader && <IntroLoader leaving={loaderLeaving} />}

      <main className={`app-shell ${showLoader ? "app-shell--hidden" : "app-shell--show"}`}>
        <Header />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
