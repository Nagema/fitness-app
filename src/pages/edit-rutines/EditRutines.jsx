import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import "./EditRoutine.css";
import { API } from "../../shared/services/api";

const EditRutines = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [workout, setWorkout] = useState();
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const fetchWorkout = async () => {
      const { data } = await API.get(`/exercises/id/${id}`);
      setWorkout(data);
    };
    fetchWorkout();
  }, []);

  const deleteWorkout = (id) => {
    try {
      API.delete(`/exercises/delete/${id}`);
      navigate(-1);
    } catch {
      console.log("error");
    }
  };

  const editExercise = async (data) => {
    const formData = new FormData();
    formData.append("description", data.description);
    formData.append("rest", data.rest);
    await API.put(`/exercises/edit/${id}`, {
      description: data.description,
      rest: data.rest,
    });
    navigate(-1);
  };

  return (
    <div className="rutine-wrapper-edit">
      <form className="edit-form" onSubmit={handleSubmit(editExercise)}>
        <p>{workout?.name}</p>
        <div>
          <label>Series:</label>
          <input
            type="text"
            name="description"
            placeholder={workout?.description}
            {...register("description", { required: true })}
          />
        </div>
        <img src={workout?.img} alt="" />
        <div>
          <label>Descanso:</label>
          <input
            type="text"
            placeholder={workout?.rest}
            name="rest"
            {...register("rest", { required: true })}
          />
        </div>
        <button className="edit-delete-button">Editar ejercicio</button>
      </form>
      <div>
        <button
          className="edit-delete-button"
          onClick={(e) => deleteWorkout(id)}
        >
          Borrar ejercicio
        </button>
        <button className="edit-delete-button" onClick={() => navigate(-1)}>
          Volver atras
        </button>
      </div>
    </div>
  );
};

export default EditRutines;
