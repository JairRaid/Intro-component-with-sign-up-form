import React from "react";
import Signup from "./components/Signup";
import { ToastContainer } from "react-toastify";
import "react-toastify/ReactToastify.css";

const App = () => {
  return (
    <>
      <ToastContainer />
      <main className="main-content">
        <section className="hero" aria-labelledby="hero-title">
          <div className="hero__content">
            <h1 id="hero-title" className="hero__title">
              Learn to code by watching others
            </h1>
            <p className="hero__description">
              See how experienced developers solve problems in real-time.
              Watching scripted tutorials is great, but understanding how
              developers think is invaluable.
            </p>
          </div>

          <Signup />
        </section>
      </main>
    </>
  );
};

export default App;
