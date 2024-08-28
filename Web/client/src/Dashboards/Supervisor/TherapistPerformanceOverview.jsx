import React from "react";
import { Bar, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  ArcElement
);

// Sample data
const therapistsData = [
  {
    name: "Therapist A",
    activeCases: 5,
    approvedPlans: 10,
    completedSessions: 15,
  },
  {
    name: "Therapist B",
    activeCases: 7,
    approvedPlans: 8,
    completedSessions: 12,
  },
  {
    name: "Therapist C",
    activeCases: 6,
    approvedPlans: 12,
    completedSessions: 10,
  },
];

const performanceData = {
  labels: therapistsData.map((therapist) => therapist.name),
  datasets: [
    {
      label: "Active Cases",
      data: therapistsData.map((therapist) => therapist.activeCases),
      backgroundColor: "rgba(255, 99, 132, 0.7)",
    },
    {
      label: "Approved Plans",
      data: therapistsData.map((therapist) => therapist.approvedPlans),
      backgroundColor: "rgba(54, 162, 235, 0.7)",
    },
    {
      label: "Completed Sessions",
      data: therapistsData.map((therapist) => therapist.completedSessions),
      backgroundColor: "rgba(255, 206, 86, 0.7)",
    },
  ],
};

const pieData = {
  labels: therapistsData.map((therapist) => therapist.name),
  datasets: [
    {
      data: therapistsData.map((therapist) => therapist.activeCases),
      backgroundColor: [
        "rgba(255, 99, 132, 0.7)",
        "rgba(54, 162, 235, 0.7)",
        "rgba(75, 192, 192, 0.7)",
      ],
    },
  ],
};

const TherapistPerformanceOverview = () => {
  return (
    <div className="bg-[#1F1F1F] p-6 py-10 rounded-lg mx-5 w-[100%]">
      <h2 className="text-2xl font-bold mb-4 text-white">
        Therapist Performance Overview
      </h2>

      {/* Stacked Bar Chart */}
      <div className="bg-[#2D2D2D] shadow-md rounded p-4 mb-8">
        <h3 className="text-xl font-bold mb-4 text-white">
          Performance Metrics by Therapist
        </h3>
        <Bar
          data={performanceData}
          options={{
            responsive: true,
            plugins: {
              legend: {
                position: "top",
                labels: {
                  color: "white",
                },
              },
              tooltip: {
                callbacks: {
                  label: function (context) {
                    return `${context.dataset.label}: ${context.raw}`;
                  },
                },
              },
            },
            scales: {
              x: {
                stacked: true,
                ticks: {
                  color: "white",
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.2)",
                },
              },
              y: {
                stacked: true,
                ticks: {
                  color: "white",
                },
                grid: {
                  color: "rgba(255, 255, 255, 0.2)",
                },
              },
            },
          }}
          height={'50px'}
        />
      </div>

      {/* Pie Chart */}
      <div className="bg-[#2D2D2D] shadow-md rounded p-4 text-center">
        <h3 className="text-xl font-bold mb-4 text-white">
          Distribution of Cases by Therapist
        </h3>
        <div  className="flex items-center justify-center">
          <Pie style={{height:'200px',width:'200px'}}
            data={pieData}
            options={{
              responsive: true,
              maintainAspectRatio: false,
              plugins: {
                legend: {
                  position: "top",
                  labels: {
                    color: "white",
                  },
                },
                tooltip: {
                  callbacks: {
                    label: function (context) {
                      return `${context.label}: ${context.raw}`;
                    },
                  },
                },
              },
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default TherapistPerformanceOverview;
