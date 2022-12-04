import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepTargetBody = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  
  return (
    <div className="steps-container">
    <div>
    <p>Tu ojbetivo es Define tu cuerpo</p>
      <h2>Elige tu cuerpo deseado</h2>
    </div>
      <div className="step-label">
      <label>
        <input className="none" name="de-playa" type="radio" value="Playa" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>De playa</h2>
        </div>
        <div className="cont-img">
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FBEACH_BODY.png&w=128&q=75" alt="playa" />
        </div>
      </label>
      <label>
        <input className="none" name="ejercitado" type="radio" value="Ejercitado" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>Ejercitado</h2>
        </div>
        <div className="cont-img">
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FWORKOUT_BODY.png&w=128&q=75" alt="ejercitado" />
        </div>
      </label>
      <label>
        <input className="none" name="crossfit" type="radio" value="Crossfit" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>De crossfit</h2>
        </div>
        <div className="cont-img">
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FCROSS_FIT_BODY.png&w=128&q=75" alt="crossfit" />
        </div>
      </label>
      </div>
      
      
    </div>
    )
};

export default StepTargetBody;