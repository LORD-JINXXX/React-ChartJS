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

const DoughNutTwo = () => {

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
                    size: 14
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

    const dnsData = data.filter(event => event.event_type === 'dns');
    const dnsTypeRrtypeCount = dnsData.reduce((acc, event) => {
        const key = `${event.dns.type} - ${event.dns.rrtype}`;
        if (!acc[key]) {
            acc[key] = 0;
        }
        acc[key]++;
        return acc;
    }, {});

    const labels = Object.keys(dnsTypeRrtypeCount);
    const counts = Object.values(dnsTypeRrtypeCount);

    const chartData = {
        labels: labels,
        datasets: [
            {
                data: counts,
                backgroundColor: labels.map(() => `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`),
            },
        ],
        borderColor: 'black',
        borderWidth: 1
    };

    return (
        <Doughnut data={chartData} options={options} />
    )
}

export default DoughNutTwo;