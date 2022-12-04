import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { getWeights } from '../../redux/weights/weights.functions';

const Charts = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getWeights())
    },[])

  return (
    <div>Charts</div>
  )
}

export default Charts