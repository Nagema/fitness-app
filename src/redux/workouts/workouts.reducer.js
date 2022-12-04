const INITIAL_STATE = {
    workouts: [],
    userData: [],
    isLoading: false,
    error: false,
}

const workoutsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'gettingWorkouts':
            return {...state, isLoading: true}
        case 'getWorkouts':
            return {...state, isLoading: false, workouts: action.payload, error: false}
        case 'errorWorkouts':
            return {...state, isLoading: false, workouts: [], error: action.payload}
        case 'addUserData':
            return {...state, userData: [...state.userData, action.payload] }
        case 'checkUserData':
            return {...state, userData: action.payload}
        default:
            return state;
    }
}

export default workoutsReducer;