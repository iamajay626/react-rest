// src/components/BarChart.js
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

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const BarChart = () => {
  const barChartData = {
    labels: ['Teens', '20s', '30s', '40s', '50s', '60s', '70s', '80s', '90 and above'],
    datasets: [
      {
        label: 'Male',
        data: [200, 300, 400, 500, 450, 350, 200, 100, 50],
        backgroundColor: 'rgba(255, 165, 0, 0.6)', // Light orange for males
        borderColor: 'rgba(255, 140, 0, 1)', // Darker orange border for males
        borderWidth: 1,
      },
      {
        label: 'Female',
        data: [150, 250, 350, 450, 400, 300, 150, 100, 50],
        backgroundColor: 'rgba(255, 87, 34, 0.8)', // Dark orange for females
        borderColor: 'rgba(255, 87, 34, 1)', // Darker orange border for females
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
        text: 'Gender and Age Group Data',
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
      x: {
        stacked: true, // Enable stacking
      },
      y: {
        stacked: true, // Enable stacking
      },
    },
  };

  return (
    <div style={{ height: '400px' }}> {/* Adjust the height to fit the window */}
      <Bar data={barChartData} options={options} />
    </div>
  );
};

export default BarChart;
