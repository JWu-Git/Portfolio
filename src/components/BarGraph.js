import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {},
    title: {
      display: true,
      text: 'Bubble Sort',
    },
  },
};

const labels = ['', '', '', '', '', '', ''];

export const data = {
  labels,
  datasets: [
    {
      label: '',
      data: [1, 2, 3, 4, 5, 6, 7],
      backgroundColor: 'rgba(0, 123, 255, 1)',
    },
  ],
};

export default function BarGraph() {
  return <Bar options={options} data={data} />;
}
