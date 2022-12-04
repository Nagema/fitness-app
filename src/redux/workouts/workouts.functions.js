import { API } from '../../shared/services/api';

export const getWorkouts = () => async (dispatch) => {
    dispatch({type: 'gettingWorkouts'})

    try {
        const result = await API.get('/workouts')
        dispatch({type: 'getWorkouts', payload: result.data})
    } catch (error) {
        dispatch({type: 'errorWorkouts', payload: error.message})
    }
}

export const checkingStep = (step, userData, newData) => async (dispatch) => {
    userData.push(newData)
    /* while (step < userData.length) {
        userData.pop()
    } */
    console.log('Nuestro user data va a ser este ', userData);
    console.log('Nuestro step más 1 va a ser este ', parseInt(step) + 1);
    const newUserData = userData.splice(parseInt(step) + 1)
    dispatch({type: 'checkUserData', payload: newUserData})
}