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

const BarGraphOne = () => {

  const protoEventTypeCount = data.reduce((acc, event) => {
    const { proto, event_type } = event;
    if (!acc[event_type]) {
      acc[event_type] = {};
    }
    if (!acc[event_type][proto]) {
      acc[event_type][proto] = 0;
    }
    acc[event_type][proto]++;
    return acc;
  }, {});

  // Prepare data for the chart
  const eventTypes = Object.keys(protoEventTypeCount);
  const protocols = Array.from(new Set(data.map(event => event.proto)));

  const datasets = protocols.map(proto => ({
    label: proto,
    data: eventTypes.map(eventType => protoEventTypeCount[eventType][proto] || 0),
    backgroundColor: `rgba(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, 0.6)`,
  }));

  const chartData = {
    labels: eventTypes,
    datasets: datasets,
  };

  const options = {
    scales: {
      x: {
        stacked: true,
        ticks: {
          color: 'white'
        },
        grid: {
          color: 'gray'
        }
      },
      y: {
        stacked: true,
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
        text: "Protocol and Event Type Chart",
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
    }
  };

  return (
    <Bar data={chartData} options={options} />
  )
}

export default BarGraphOne;