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

interface Props {
  values: number[];
  title: string;
  first_index: number;
  second_index: number;
}

type color = 'rgba(0, 123, 255, 1)' | 'rgba(50, 50, 50, 1)';
type backgroundColor = color[];
export default function BarGraph({
  values,
  title,
  first_index,
  second_index,
}: Props) {
  console.log(first_index, second_index);
  const backgroundColor: backgroundColor = values.map((el, index) => {
    if (index === first_index || index === second_index)
      return 'rgba(50, 50, 50, 1)';
    else return 'rgba(0, 123, 255, 1)';
  });
  const data = {
    labels: values.map((el) => ''),
    datasets: [
      {
        label: '',
        data: values,
        backgroundColor: backgroundColor,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
        padding: 20,
        font: { weight: 'bold', size: 20 },
      },
      legend: {
        display: false,
      },
    },
    animation: {
      duration: 0, // Set animation duration to 0 (disable animation)
    },
  };
  return <Bar options={options} data={data} />;
}
