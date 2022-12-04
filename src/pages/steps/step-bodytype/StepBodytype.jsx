import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import nextStep from "../../../shared/nextStep";

const StepBodytype = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="steps-container">
      <div>
        <h1>Elige tu tipo de cuerpo</h1>
        <p>
          Elige el tipo de cuerpo más similar al tuyo. Puedes guiarte por las
          imágenes.
        </p>
      </div>

      <div className="step-label">
        <label>
          <input
            className="none"
            name="bodytype"
            type="radio"
            value="Ectomorfo"
            onClick={(ev) => navigate('/step-problem-areas')}
          />
          <div className="step-options-bodytype">
            <h2>Ectomorfo</h2>
            <p>Poca grasa corporal y poco músculo.</p>
            <p>Le cuesta ganar peso.</p>
          </div>
          <div className="cont-img">
            <img
              src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-muscles%2FSLIM_BODY.png&w=128&q=75"
              alt="ectomorfo"
            />
          </div>
        </label>
        <label>
          <input
            className="none"
            name="bodytype"
            type="radio"
            value="Mesomorfo"
            onClick={(ev) => navigate('/step-problem-areas')}
          />
          <div className="step-options-boytype">
            <h2>Mesomorfo</h2>
            <p>Pierde grasa corporal fácilmente y gana músculo rápidamente</p>
          </div>
          <div className="cont-img">
            <img
              src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_15_TO_19.png&w=256&q=75"
              alt="mesomorfo"
            />
          </div>
        </label>
        <label>
          <input
            className="none"
            name="bodytype"
            type="radio"
            value="Endomorfo"
            onClick={(ev) => navigate('/step-problem-areas')}
          />
          <div className="step-options-bodytype">
            <h2>Endomorfo</h2>
            <p>
              Gana peso fácilmente en comparación con otros tipos de cuerpo.
            </p>
          </div>
          <div className="cont-img">
            <img
              src="https://madmuscles.com/_next/image?url=%2F_next%2Fstatic%2Fassets%2Fgqzsql1QkLs6XYCpGhvxJ%2Fimages%2Fbody-fat-level%2FFROM_25_TO_29.png&w=256&q=75"
              alt="endomorfo"
            />
          </div>
        </label>
      </div>

      <div className="test-body-type">
      <div className="bodytype-title-img">
      <p>Test para determinar tu tipo de cuerpo</p>
        <img
          src="https://madmuscles.com/_next/static/assets/gqzsql1QkLs6XYCpGhvxJ/images/determine-body-type.svg"
          alt="bodytype"
        />
      </div>
        <div className="bodytype-info">
          <p>
            Sujeta la muñeca con el pulgar y el dedo índice. Si eres diestro,
            usa tu mano derecha para agarrar tu muñeca izquierda.
          </p>
          <p> Pulgar e índice:</p>
          <ul>
            
            <li> <b>Ectomorfo</b> — los dedos se tocan con facilidad.</li>
            <li> <b>Mesomorfo</b> — apenas se tocan.</li>
            <li> <b>Endomorfo</b> — no se tocan.</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default StepBodytype;
