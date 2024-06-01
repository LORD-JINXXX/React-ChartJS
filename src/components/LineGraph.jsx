import React from 'react';
import { Line } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend

} from 'chart.js';

import data from '../eve.json';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);




const LineGraph = () => {

    const timeSeriesData = data.reduce((acc, alert) => {
        const timestamp = new Date(alert.timestamp).toLocaleString();
        acc[timestamp] = (acc[timestamp] || 0) + 1;
        return acc;
    }, {});

    const timeSeriesLabels = Object.keys(timeSeriesData);
    const timeSeriesValues = Object.values(timeSeriesData);

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            title: {
                text: "Time Series of Alerts",
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 18
                },
                align: 'center',
                display: true
            },
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
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
              ticks: {
                color: 'white' 
              },
              grid: {
                color: 'gray' 
              }
            }
          }
    }
    return (
            <Line
                data={{
                    labels: timeSeriesLabels,
                    datasets: [
                        {
                            label: 'Number of Alerts',
                            data: timeSeriesValues,
                            fill: false,
                            borderColor: 'rgba(75,192,192,1)',
                        },
                    ],
                }}
                options={options}
            />
    )
}

export default LineGraph;