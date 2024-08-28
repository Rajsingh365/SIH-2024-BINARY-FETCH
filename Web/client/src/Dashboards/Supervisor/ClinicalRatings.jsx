import React from 'react';
import { Radar, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, RadialLinearScale, PointElement, LineElement, Filler, Tooltip, Legend, CategoryScale, LinearScale, BarElement } from 'chart.js';

ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement
);

const ClinicalRatings = () => {
  // Sample data for radar chart and bar graph
  const radarData = {
    labels: ['Adherence to Plan', 'Patient Improvement', 'Session Frequency', 'Communication Skills', 'Professionalism'],
    datasets: [
      {
        label: 'Therapist A',
        data: [4, 5, 3, 4, 5],
        backgroundColor: 'rgba(75, 192, 192, 0.2)',
        borderColor: 'rgba(75, 192, 192, 1)',
        borderWidth: 1,
      },
      {
        label: 'Therapist B',
        data: [3, 4, 4, 3, 4],
        backgroundColor: 'rgba(153, 102, 255, 0.2)',
        borderColor: 'rgba(153, 102, 255, 1)',
        borderWidth: 1,
      },
    ],
  };

  const barData = {
    labels: ['Therapist A', 'Therapist B', 'Therapist C'],
    datasets: [
      {
        label: 'Clinical Ratings',
        data: [4.2, 3.8, 4.5],
        backgroundColor: 'rgba(255, 99, 132, 0.2)',
        borderColor: 'rgba(255, 99, 132, 1)',
        borderWidth: 1,
      },
    ],
  };

  const optionsRadar = {
    scales: {
      r: {
        angleLines: {
          display: false,
        },
        suggestedMin: 0,
        suggestedMax: 5,
      },
    },
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    responsive: true,
  };

  const optionsBar = {
    plugins: {
      legend: {
        display: true,
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return `${context.label}: ${context.raw}`;
          },
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
      },
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <div className="bg-[#21222D] p-6 py-10 rounded-lg mx-5 w-[100%]">
      <h2 className="text-2xl font-bold mb-4 text-white">Clinical Ratings Overview</h2>

      {/* Radar Chart */}
      {/* <div className="bg-[#2c2f36] p-4 rounded-lg mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">Performance by Aspect</h3>
        <Radar data={radarData} options={optionsRadar} />
      </div> */}

      {/* Bar Graph */}
      <div className="bg-[#2c2f36] p-4 rounded-lg">
        <h3 className="text-xl font-bold mb-4 text-white">Distribution of Ratings</h3>
        <Bar data={barData} options={optionsBar} height={'40px'} />
      </div>
    </div>
  );
};

export default ClinicalRatings;
