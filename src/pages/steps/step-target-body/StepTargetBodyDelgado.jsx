import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";
import "../Steps.css";
const StepTargetBody = () => {

  const dispatch = useDispatch();
  const navigate = useNavigate();

 
  
  return (
    <div className="steps-container">
      <div>
      <p>Tu ojbetivo es perder peso</p>
      <h2>Elige tu cuerpo deseado</h2>
      </div>
      <div className="step-label">
      <label>
        <input className="none" name="delgado" type="radio" value="Delgado" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>Delgado</h2>
        </div>
        <div className="cont-img">
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75" alt="delgado" />
        </div>
      </label>
      <label>
        <input className="none" name="delgado-tonificado" type="radio" value="Delgado y tonificado" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>Delgado y tonificado</h2>
        </div>
        <div className="cont-img">
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FSLIM_SHREDDED_BODY.png&w=128&q=75" alt="delgado-tonificado" />
        </div>
      </label>
      </div>
      
      
    </div>
    )
};

export default StepTargetBody;
