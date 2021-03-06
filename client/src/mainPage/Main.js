import React from "react";
// import myVideo from "./Videos/vid.mp4";
import "./Main.css";
import { Link } from "react-router-dom";
import { useRef, useEffect } from "react";

function Main() {
  useEffect(() => {
    menuToggle.current.addEventListener("click", clicked);
  }, []);

  const menuToggle = useRef(null);
  const show = useRef(null);

  function clicked() {
    menuToggle.current.classList.toggle("active");
    show.current.classList.toggle("active");
  }

  return (
    <div>
      <div className="show" ref={show}>
        <header>
          <h2 className="logo">SIGNAL</h2>
          <div className="toggle" ref={menuToggle}></div>
        </header>

        <video muted autoPlay loop>
          <source src={require("./Videos/vid.mp4")} type="video/mp4"></source>
        </video>

        <div className="overlay"></div>

        <div className="text">
          <h2>Music:</h2>
          <h3>A Universal Language.</h3>
          <p>Love music, and want to meet your new lover? </p>

          <Link to="/genres">
            <button>Lets Jam!</button>
          </Link>
        </div>
      </div>

      <div className="menu">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li>
            <Link className="link" to="/privacypolicy">
              Privacy Policy
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Main;
