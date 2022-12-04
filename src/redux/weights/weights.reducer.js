const INITIAL_STATE = {
    weights: [],
    isLoading: false,
    error: false
}

const weightsReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case 'getWeights':
            return {...state, isLoading: false, weights: action.payload, error: false}
        case 'errorWeights':
            return {...state, isLoading: false, weights: [], error: action.payload }
        default:
            return state;
    }
}

export default weightsReducer;