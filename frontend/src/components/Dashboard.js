import React from 'react';
import { Line } from 'react-chartjs-2';

function Dashboard({ data }) {
  const chartData = {
    labels: data.map(d => new Date(d.timestamp).toLocaleTimeString()),
    datasets: [
      {
        label: 'Energy Usage (kWh)',
        data: data.map(d => d.usage),
        fill: false,
        borderColor: 'blue',
      },
    ],
  };

  return (
    <div>
      <h2>Energy Usage Dashboard</h2>
      <Line data={chartData} />
    </div>
  );
}

export default Dashboard;
