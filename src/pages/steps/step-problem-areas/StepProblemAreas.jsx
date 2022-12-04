import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepProblemArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { userData } = useSelector(
    (state) => state.workouts
  );

  return (
      <div className="steps-container">
      <div>
      <h1>Elige áreas difíciles</h1>
      </div>
        <div className="step-label">
        <label>
          <input className="none"
            step='2'
            name="problemarea"
            type="radio"
            value="Parte superior"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-level-of-fitness", userData)}
          />
          <div className="step-options">
            <h2>Pecho débil</h2>
          </div>
          <div className="problem-area-img">
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fproblem-areas%2Fw-120%2Fchest.png&w=128&q=75"
            alt="pecho"
          />
          </div>
          
        </label>
        <label>
          <input className="none"
            step='2'
            name="problemarea"
            type="radio"
            value="Parte superior"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-level-of-fitness", userData)}
          />
          <div className="step-options">
            <h2>Brazos flacos</h2>
          </div>
          <div className="problem-area-img">
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fproblem-areas%2Fw-120%2Farms.png&w=128&q=75"
            alt="brazos"
          />
          </div>
          
        </label>
        <label>
          <input className="none"
            step='2'
            name="problemarea"
            type="radio"
            value="Parte media"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-level-of-fitness", userData)}
          />
          <div className="step-options">
            <h2>Abdomen</h2>
          </div>
          <div className="problem-area-img">
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fproblem-areas%2Fw-120%2Ftummy.png&w=128&q=75"
            alt="abdomen"
          />
          </div>
          
        </label>
        <label>
          <input className="none"
            step='2'
            name="problemarea"
            type="radio"
            value="Parte inferior"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-level-of-fitness", userData)}
          />
          <div className="step-options">
            <h2>Piernas flacas</h2>
          </div>
          <div className="problem-area-img">
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fproblem-areas%2Fw-120%2Flegs.png&w=128&q=75"
            alt="piernas"
          />
          </div>
          
        </label>
        </div>
        
    </div>
  )
}
export default StepProblemArea