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

export default function BarGraph({ values }) {
  const data = {
    labels: values.map((el) => ''),
    datasets: [
      {
        label: '',
        data: values,
        backgroundColor: 'rgba(0, 123, 255, 1)',
      },
    ],
  };

  return <Bar options={options} data={data} />;
}
