import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";
import "./StepGoal.css";

const StepGoal = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="step-goal">
      <div>
        <h1>CREA TU CUERPO PERFECTO</h1>
        <p>Obtén un plan de ejercicios personal</p>
        <h2>Elije tu meta</h2>
      </div>
      <div className="step-goal-label">
        <label>
          <input className="none"
            name="bodytype"
            type="radio"
            value="Perder peso"
            onClick={(ev) =>
              nextStep(ev, dispatch, navigate, "/step-target-body-perder-peso")
            }
          />
          <div className="step-goal-choise">
            <h2>Perder peso</h2>
          </div>
          <div className="cont-img">
            <img className="span-img"
              src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FSLIM_SHREDDED_BODY.png&w=128&q=75"
              alt="perder-peso"
            />
          </div>
        </label>
        <label>
          <input className="none"
            name="bodytype"
            type="radio"
            value="Crecer musculo"
            onClick={(ev) =>
              nextStep(
                ev,
                dispatch,
                navigate,
                "/step-target-body-crecer-musculo"
              )
            }
          />
          <div className="step-goal-choise">
            <h2>Crecer músculo</h2>
          </div>
          <div className="cont-img">
            <img className="span-img"
              src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FHERO.png&w=128&q=75"
              alt="crecer-musculo"
            />
          </div>
        </label>
        <label>
          <input className="none"
            name="bodytype"
            type="radio"
            value="Define tu cuerpo"
            onClick={(ev) =>
              nextStep(ev, dispatch, navigate, "/step-target-body-definir")
            }
          />
          <div className="step-goal-choise">
            <h2>Define tu cuerpo</h2>
          </div>
          <div className="cont-img">
            <img className="span-img"
              src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FBEACH_BODY.png&w=128&q=75"
              alt="definir"
            />
          </div>
        </label>
      </div>
    </div>
  );
};

export default StepGoal;
