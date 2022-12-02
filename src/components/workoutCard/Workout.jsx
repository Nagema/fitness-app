import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getWorkouts } from "../../redux/workouts/workouts.functions";

const Workout = () => {

  const [rutina, setRutina] = useState();
  const dispatch = useDispatch();

  const {workouts, userData, isLoading, error} = useSelector(state => state.workouts);

  useEffect(() => {

  dispatch(getWorkouts());
    
  setRutina(workouts.find(workout => {

    return JSON.stringify(workout.requirements) === JSON.stringify(userData) 
   })) 

   

  }, [workouts, userData])
  


  
  return (
    <div>
    {console.log(rutina)}
    {console.log(userData)}
    </div>
  );
};

export default Workout;
