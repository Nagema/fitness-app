import React from 'react'
import { Bar } from 'react-chartjs-2'
import { Chart as ChartJS } from 'chart.js/auto'

const BarChart = ({chartData}) => {
  return (
    <Bar 

        data={chartData} 
        options={{
            responsive: true,
            maintainAspectRatio: true,
            aspectRatio: 2,
            plugins: {
                tooltip: {
                    enabled: true,
                    callbacks: {
                        title: () => null
                    }
                },
                legend: {
                    display: false
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    }
                }
            },
        }}
    />
  )
}

export default BarChart