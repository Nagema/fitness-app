import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkingStep } from "../../../redux/workouts/workouts.functions";
import './InputRange.css'

const StepLevelFitness = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [value, setValue] = useState(4);
  const [nivel, setNivel] = useState("Aficionado");
  const [text, setText] = useState(
    "Trato de hacer ejercicio una vez a la semana, pero todavía no es regular."
  );
  const [newValue, setNewValue] = useState('A');
  const { userData } = useSelector(
    (state) => state.workouts
  );

  useEffect(() => {
    if (value <= 4) {
      setNewValue("A");
      setNivel("Novato");
      if (value == 1) {
        setText(
          "Cada vez que me siento en el suelo, me cuesta ponerme de pie."
        );
      } else if (value == 2) {
        setText(
          "Después de subir y bajar varios escalones, necesito recuperar el aliento."
        );
      } else if (value == 3) {
        setText("Puedo caminar como cardio, pero correr me cuesta.");
      } else if (value == 4) {
        setText(
          "Hago ejercicio pocas veces al año, lo suficiente como para sudar."
        );
      }
    } else if (value <= 7) {
      setNewValue( "B");
      setNivel("Aficionado");
      if (value == 5) {
        setText(
          "Trato de hacer ejercicio una vez a la semana, pero todavía no es regular."
        );
      } else if (value == 6) {
        setText(
          "Empecé a hacer ejercicio al menos una vez a la semana de forma regular."
        );
      } else if (value == 7) {
        setText(
          "Hago ejercicio al menos dos veces por semana en los últimos 3 meses."
        );
      }
    } else if (value <= 10) {
      setNewValue ("C");
      setNivel("Pro");
      if (value == 8) {
        setText(
          "Estoy comprometido con mi forma física y entreno siempre que puedo."
        );
      } else if (value == 9) {
        setText(
          "Créeme. Estoy en muy buena forma, pero todavía quiero ir un nivel más allá."
        );
      } else if (value == 10) {
        setText("¡Soy imparable! Estoy en la mejor forma de mi vida.");
      }
    }
  }, [value]);

  const newNextStep = () => {
    dispatch({ type: "addUserData", payload: newValue });
    dispatch(checkingStep(3, userData))
    navigate("/step-level-of-fat");
    console.log("valor", newValue);
  };
  return (
    <div className="steps-container">
    <div>
    <h1>¿En qué nivel fitness estás?</h1>
      <p>
        Elige tu nivel fitness actual para alinearlo con el plan de ejercicios.
      </p>
    </div>
    <div className="fitness-input">
    <input
        type="range"
        name="levelfitness"
        value={value}
        min={1}
        max={10}
        onChange={(ev) => setValue(ev.target.value)}
      />
    </div>
      <div className="text-level-fitness">
      <h3>{nivel}</h3>
      <p>{text}</p>
      </div>
      <div >
      <button className="button-next" onClick={() => newNextStep()}>Continuar</button>
      </div>
      
    </div>
  );
};

export default StepLevelFitness;
