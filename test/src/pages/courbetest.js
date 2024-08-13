import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, Title, Tooltip, Legend);

const LineChart = ({ data }) => {
  const chartData = {
    labels: data.labels, // Étiquettes pour l'axe des X
    datasets: [
      {
        label: 'Entretiens Programmés',
        data: data.datasets[0].data, // Données pour l'axe des Y
        borderColor: '#42A5F5', // Couleur de la ligne
        backgroundColor: 'rgba(66, 165, 245, 0.2)', // Couleur de l'ombre
        fill: true, // Remplir sous la ligne
        tension: 0.1, // Adoucir les courbes
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            const value = tooltipItem.raw;
            return `Nombre d'entretiens: ${value}`;
          },
        },
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Date', // Légende pour l'axe des X
        },
      },
      y: {
        title: {
          display: true,
          text: 'Nombre d\'entretiens', // Légende pour l'axe des Y
        },
        beginAtZero: true, // Commencer l'axe des Y à zéro
      },
    },
  };

  return <Line data={chartData} options={options} />;
};

export default LineChart;
