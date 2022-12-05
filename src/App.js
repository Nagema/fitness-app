import "./App.css";
import { Route, Routes, useNavigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/user-info/login/Login";
import Register from "./pages/user-info/register/Register";
import User from "./pages/user-info/user/User";
import StepGoal from "./pages/steps/step-goal/StepGoal";
import StepTargetBodyDelgado from "./pages/steps/step-target-body/StepTargetBodyDelgado";
import StepTargetBodyMusculo from "./pages/steps/step-target-body/StepTargetBodyMusculo";
import StepTargetBodyDefinir from "./pages/steps/step-target-body/StepTargetBodyDefinir";
import StepFinal from "./pages/steps/step-final/StepFinal";
import StepBodytype from "./pages/steps/step-bodytype/StepBodytype";
import { checkSession } from "./redux/auth/auth.actions";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import StepProblemArea from "./pages/steps/step-problem-areas/StepProblemAreas";
import StepLevelFitness from "./pages/steps/step-level-fitness/StepLevelFitness";
import StepLevelOfFat from "./pages/steps/step-level-of-fat/StepLevelOfFat";
import StepWorkouts from "./pages/steps/step-workouts/StepWorkouts";
import StepWorkoutIssues from "./pages/steps/step-workout-issues/StepWorkoutIssues";
import StepAditionalGoals from "./pages/steps/step-additional-goals/StepAditionalGoals";
import StepWorkoutFrequency from "./pages/steps/step-workout-frequency/StepWorkoutFrequency";
import EditRutines from "./pages/edit-rutines/EditRutines";
import Charts from "./components/charts/Charts";

function App() {
  const dispatch = useDispatch();
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  useEffect(() => {
    token && dispatch(checkSession(token, navigate));
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/User" element={<User />} />
        <Route path="/step-goal" element={<StepGoal />} />
        <Route
          path="/step-target-body-perder-peso"
          element={<StepTargetBodyDelgado />}
        />
        <Route
          path="/step-target-body-crecer-musculo"
          element={<StepTargetBodyMusculo />}
        />
        <Route
          path="/step-target-body-definir"
          element={<StepTargetBodyDefinir />}
        />
        <Route path="/step-problem-areas" element={<StepProblemArea />} />
        <Route path="/step-level-of-fitness" element={<StepLevelFitness />} />
        <Route path="/step-level-of-fat" element={<StepLevelOfFat />} />
        <Route path="/step-workouts" element={<StepWorkouts />} />
        <Route path="/step-workouts-issues" element={<StepWorkoutIssues />} />
        <Route path="/step-additional-goals" element={<StepAditionalGoals />} />
        <Route
          path="step-workout-frequency"
          element={<StepWorkoutFrequency />}
        />
        <Route path="/step-final" element={<StepFinal />} />
        <Route path="/step-bodytype" element={<StepBodytype />} />
        <Route path="/edit-rutines" element={<EditRutines />} />
        <Route path='/weights' element={<Charts/>} />
      </Routes>
    </div>
  );
}

export default App;
