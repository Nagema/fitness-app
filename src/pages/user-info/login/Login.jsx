import React from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import "./Styles.css";
import { useDispatch } from "react-redux";
import { loginUser } from "../../../redux/auth/auth.actions";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm();
  const send = async (formData) => {
    dispatch(loginUser(formData, navigate));
    navigate("/");
  };

  const goToRegister = () => {
    navigate("/register");
  };

  return (
    <div className="login-wrapper">
      <form onSubmit={handleSubmit(send)} className="login">
        <h2>Login</h2>
        <div className="inputs-wrapper">
          <div>
            <input
              placeholder="Email"
              type="email"
              name="user"
              {...register("email", {
                required: "Introduce tu email, por favor",
                minLength: {
                  value: 2,
                  message: "el email tiene que ser mas largo",
                },
              })}
            />
          </div>
          <div>
            <input
              placeholder="Contraseña"
              type="password"
              name="password"
              {...register("password", {
                required: "El password tiene que existir",
                // pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*_=+-]).{8,12}$/,
              })}
            />
          </div>
        </div>
        <button>Login</button>
      </form>
      <div>
        <a onClick={goToRegister}>No tienes una cuenta?</a>
      </div>
    </div>
  );
};

export default Login;
