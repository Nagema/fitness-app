import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Footer from "../../components/footer/Footer";
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
    <>
      <div className="main-wrapper">
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
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;
