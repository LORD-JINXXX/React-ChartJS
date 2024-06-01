import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import data from '../eve.json';

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    DoughnutController,
    ArcElement,
    Title,
    Tooltip,
    Legend,

} from 'chart.js';

ChartJS.register(
    CategoryScale,
    LinearScale,
    DoughnutController,
    ArcElement,
    Title,
    Tooltip,
    Legend
);

const DoughNutChart = () => {

    const alertData = data.filter(event => event.event_type === 'alert');

    // Aggregate alerts by severity and category
    const severityCategoryCount = alertData.reduce((acc, alert) => {
        const { severity, category } = alert.alert;
        const key = `${severity} - ${category}`;

        if (!acc[key]) {
            acc[key] = 0;
        }
        acc[key]++;
        return acc;
    }, {});

    // Prepare data for the chart
    const labels = Object.keys(severityCategoryCount);
    const counts = Object.values(severityCategoryCount);
    const backgroundColors = labels.map(
        () => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`
    );

    const chartData = {
        labels: labels,
        datasets: [
            {
                data: counts,
                backgroundColor: backgroundColors,
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                labels: {
                  color: 'white' 
                }
              },
            title: {
                text: "Alert Severity by Category",
                color: 'white',
                font: {
                    weight: 'bold',
                    size: 18
                },
                align: 'center',
                display:true
            },
            tooltip: {
                backgroundColor: 'rgba(0, 0, 0, 0.8)', // Tooltip background color
                titleColor: 'white', // Tooltip title color
                bodyColor: 'white' // Tooltip body color
              }
        }
    };

    return (
        <Doughnut data={chartData} options={options} />
    )
}

export default DoughNutChart;