import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Styles.css";

const Home = () => {
  const { user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/login");
  };

  const chooseProgram = () => {
    navigate("/step-goal");
  };

  return (
    <div className="main-wrapper">
      <div className="top-part">
        <div>
          <h1>
            <div className="animation">
              <span className="first">Don't sit </span>
              <span className="oh">
                <span className="second">get fit</span>
              </span>
            </div>
          </h1>
        </div>
        <div>
          <img className="phone" src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FappTeaserImg.dc95b0da.png&w=1366&q=75" alt="home" />
        </div>
      </div>
      <div className="home-buttons">
        {!user ? (
          <div>
            <button onClick={goToLogin}>Empieza ahora</button>
          </div>
        ) : (
          <div>
            <button onClick={chooseProgram}>Selecciona tu programa</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
