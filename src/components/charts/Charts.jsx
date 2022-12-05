import React, { useEffect, useState } from 'react'
import { Bar } from 'react-chartjs-2'
import { useDispatch, useSelector } from 'react-redux'
import { getWeights } from '../../redux/weights/weights.functions'
import { Chart as chartJS } from 'chart.js/auto'

const Charts = () => {

    const dispatch = useDispatch();

    const weights = useSelector(
        (state) => state.weights
    )

    const [userWeight, setUserWeight] = useState({
        labels: [1, 2, 3, 4, 5, 6, 7, 8],
        datasets: [{
            label: "Users weight",
            data:  weights.map((data) => data.weight),

        }]
    });


    useEffect(() => {
        dispatch(getWeights());
    },[])

  return (
    <Bar data={userWeight} />
  )
}

export default Charts