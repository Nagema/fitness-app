import { API } from '../../shared/services/api';

export const getWeights = () => async (dispatch) => {

    try {
        const result = await API.get('/weights')
        dispatch({type: 'getWeights', payload: result.data})
    } catch (error) {
        dispatch({type: 'errorWeights', payload: error.message})
    }
}