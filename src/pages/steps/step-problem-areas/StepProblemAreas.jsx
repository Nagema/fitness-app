import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepProblemArea = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
      <div>
        <h1>Elige áreas difíciles</h1>
        <label>
          <input
            name="problemarea"
            type="radio"
            value="Parte superior"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-level-of-fitness")}
          />
          <span>
            <h2>Pecho débil</h2>
          </span>
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fproblem-areas%2Fw-120%2Fchest.png&w=128&q=75"
            alt="pecho"
          />
        </label>
        <label>
          <input
            name="problemarea"
            type="radio"
            value="Parte superior"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-level-of-fitness")}
          />
          <span>
            <h2>Brazos flacos</h2>
          </span>
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fproblem-areas%2Fw-120%2Farms.png&w=128&q=75"
            alt="brazos"
          />
        </label>
        <label>
          <input
            name="problemarea"
            type="radio"
            value="Parte media"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-level-of-fitness")}
          />
          <span>
            <h2>Abdomen</h2>
          </span>
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fproblem-areas%2Fw-120%2Ftummy.png&w=128&q=75"
            alt="abdomen"
          />
        </label>
        <label>
          <input
            name="problemarea"
            type="radio"
            value="Parte inferior"
            onClick={(ev) => nextStep(ev, dispatch, navigate, "/step-level-of-fitness")}
          />
          <span>
            <h2>Piernas flacas</h2>
          </span>
          <img
            src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fproblem-areas%2Fw-120%2Flegs.png&w=128&q=75"
            alt="piernas"
          />
        </label>
    </div>
  )
}
export default StepProblemArea