import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';

import data from '../eve.json';

ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
);

const BarGraphTwo = () => {

    const protoCount = data.reduce((acc, event) => {
        const { proto } = event;
        if (!acc[proto]) {
            acc[proto] = 0;
        }
        acc[proto]++;
        return acc;
    }, {});

    // Prepare data for the chart
    const labels = Object.keys(protoCount);
    const counts = Object.values(protoCount);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Protocol Count',
                data: counts,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
            },
        ],
    };

    const options = {
        scales: {
            x: {
                ticks: {
                  color: 'white' 
                },
                grid: {
                  color: 'gray' 
                }
              },
            y: {
                beginAtZero: true,
                ticks: {
                    color: 'white' 
                  },
                  grid: {
                    color: 'gray' 
                  }
            },
        },

        plugins: {
            title: {
                text: "Types of Protocol and Count",
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 14
                },
                align: 'center',
                display: true
            },
            legend: {
                labels: {
                    color: 'white'
                }
            }
        }
    };
    return (
        <Bar data={chartData} options={options} />
    )
}

export default BarGraphTwo;