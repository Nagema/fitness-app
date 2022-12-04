import React from "react";
import { useNavigate } from "react-router-dom";
import "./CheckboxStyle.css";

const StepWorkouts = () => {
  const navigate = useNavigate();
  return (
    <div className="steps-container">
      <h1>¿Qué deportes te interesan?</h1>
      <div className="checkbox-container">
        <label className="checkbox-label">
            <input type="checkbox" name="workouts" />
            <p className="mark">Entrenamiento en gimnasio</p>
        </label>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span className="mark">Entrenamiento en casa</span>
        </label>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span className="mark">Boxeo</span>
        </label>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />

          <span className="mark">Artes marciales</span>
        </label>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />

          <span className="mark">Correr</span>
        </label>
      </div>
      <div className="checkbox-container">
        <label className="checkbox-label">
          <input type="checkbox" name="workouts" />
          <span className="mark">Ningún otro</span>
        </label>
      </div>
      <button
        className="button-next"
        onClick={(ev) => navigate("/step-workouts-issues")}
      >
        Continuar
      </button>
    </div>
  );
};

export default StepWorkouts;
