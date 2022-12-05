const INITIAL_STATE = {
    weights: [],
}

const weightsReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case 'getWeights':
            return {...state, weights: action.payload}
        case 'errorWeights':
            return {...state, weights: [], error: action.payload}
        default:
            return state;
    }
}

export default weightsReducer;