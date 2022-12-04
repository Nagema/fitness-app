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
      <p>Tu ojbetivo es Crecer músculo</p>
      <h2>Elige tu cuerpo deseado</h2>
      </div>
     <div className="step-label">
     <label>
        <input className="none" name="atleta" type="radio" value="Atleta" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>Atleta</h2>
        </div>
        <div className="cont-img">
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FATHLETE.png&w=128&q=75" alt="atleta" />
        </div>
      </label>
      <label>
        <input className="none" name="heroe" type="radio" value="Heroe" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>Héroe</h2>
        </div>
        <div className="cont-img">
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FHERO.png&w=128&q=75" alt="heroe" />
        </div>
      </label>
      <label>
        <input className="none" name="culturista" type="radio" value="Culturista" onClick={(ev) => navigate('/step-bodytype')}/>
        <div className="step-options">
          <h2>Culturista</h2>
        </div>
        <div className="cont-img">
        <img src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FBODYBUILDER.png&w=128&q=75" alt="culturista" />
        </div>
      </label>
     </div>
    </div>
    )
};

export default StepTargetBody;