const INITIAL_STATE = {
    workouts: [],
    userData: [],
    usersStats: [],
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
        case 'emptyUserData':
            return {...state, userData: []}
        case 'getStats':
            return {...state, usersStats: action.payload}
        case 'errorStats':
            return {...state, usersStats: [], error: action.payload}
        case 'createExercise':
            return {...state, isloading:false, error: false}
        case 'errorCreatingExercise':
            return{...state, loading: false, error: action.payload}
        default:
            return state;
    }
}

export default workoutsReducer;