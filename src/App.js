import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Login from "./pages/user-info/login/Login";
import Register from "./pages/user-info/register/Register";
import User from "./pages/user-info/user/User";
import StepGoal from "./pages/steps/step-goal/StepGoal";
import StepTargetBody from "./pages/steps/step-target-body/StepTargetBody";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/register" element={<Register />}></Route>
        <Route path="/User" element={<User></User>}></Route>
        <Route path="/step-goal" element={<StepGoal></StepGoal>}></Route>
        <Route
          path="/step-target-body"
          element={<StepTargetBody></StepTargetBody>}
        ></Route>
      </Routes>
    </div>
  );
}

export default App;
