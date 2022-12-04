import { checkingStep } from "../redux/workouts/workouts.functions";

const nextStep = (ev, dispatch, navigate, nextRoute, userData) => {
    
    console.log(ev.target.value);
    console.log(ev.target.step);
    dispatch({type: 'addUserData', payload: ev.target.value})
    userData.push(ev.target.value)
    console.log(userData);
    console.log(ev.target.step);
    dispatch(checkingStep(ev.target.step, userData, ev.target.value))

    navigate(nextRoute);
};

export default nextStep ;