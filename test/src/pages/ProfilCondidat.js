import React, { useState, useEffect, useCallback } from 'react';
import { Chart, registerables } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faClipboard, faListUl, faCalendarCheck, faCogs, faQuestionCircle, faBell, faSignOutAlt, faChartLine, faCalendarAlt, faBriefcase, faTachometerAlt, faUserFriends, faTasks, faDownload, faRobot } from '@fortawesome/free-solid-svg-icons';

// Register Chart.js components
Chart.register(...registerables);

const PerformanceDashboard = () => {
  const [chatboxVisible, setChatboxVisible] = useState(false);
  const [contactOptionsVisible, setContactOptionsVisible] = useState(false);
  const [isFirstDashboard, setIsFirstDashboard] = useState(true);

  const initializeCharts = useCallback(() => {
    // Cleanup previous charts
    const clearCanvas = (id) => {
      const canvas = document.getElementById(id);
      if (canvas) {
        const ctx = canvas.getContext('2d');
        if (ctx.chart) {
          ctx.chart.destroy();
        }
      }
    };

    // Clear previous charts
    clearCanvas('quarterlyChart');
    clearCanvas('downtimeChart');
    clearCanvas('otherStatsChart');

    // Create new charts
    const ctxQuarterly = document.getElementById('quarterlyChart').getContext('2d');
    const quarterlyChart = new Chart(ctxQuarterly, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
        datasets: [{
          label: 'Quarterly Performance',
          data: [30, 40, 35, 50, 45, 60],
          backgroundColor: 'rgba(76, 175, 80, 0.2)',
          borderColor: '#4CAF50',
          borderWidth: 2,
          fill: true
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#2C3352' }
          },
          x: {
            grid: { color: '#2C3352' }
          }
        },
        plugins: {
          legend: { labels: { color: '#FFFFFF' } }
        }
      }
    });
    ctxQuarterly.chart = quarterlyChart; // Store the chart instance

    const ctxDowntime = document.getElementById('downtimeChart').getContext('2d');
    const downtimeChart = new Chart(ctxDowntime, {
      type: 'doughnut',
      data: {
        labels: ['Network Issues', 'Server Downtime', 'Maintenance', 'Others'],
        datasets: [{
          label: 'Downtime Causes',
          data: [10, 20, 30, 40],
          backgroundColor: ['#FF5733', '#FFBD33', '#28B463', '#3498DB']
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { labels: { color: '#FFFFFF' } }
        }
      }
    });
    ctxDowntime.chart = downtimeChart; // Store the chart instance

    const ctxOtherStats = document.getElementById('otherStatsChart').getContext('2d');
    const otherStatsChart = new Chart(ctxOtherStats, {
      type: 'bar',
      data: {
        labels: ['Metric 1', 'Metric 2', 'Metric 3', 'Metric 4'],
        datasets: [{
          label: 'Other Statistics',
          data: [10, 20, 30, 40],
          backgroundColor: '#4CAF50'
        }]
      },
      options: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
            grid: { color: '#2C3352' }
          },
          x: {
            grid: { color: '#2C3352' }
          }
        },
        plugins: {
          legend: { labels: { color: '#FFFFFF' } }
        }
      }
    });
    ctxOtherStats.chart = otherStatsChart; // Store the chart instance

  }, []);

  useEffect(() => {
    initializeCharts();
  }, [initializeCharts]);

  const toggleDashboard = () => {
    setIsFirstDashboard(!isFirstDashboard);
  };

  return (
    <div>
      <div className="sidebar">
        <button className="sidebar-item" onClick={() => window.location.href = 'profile.html'}>
          Profile
        </button>
        <button className="sidebar-item" onClick={() => window.location.href = 'test.html'}>
          Test
        </button>
        <button className="sidebar-item" onClick={() => window.location.href = 'joblist.html'}>
          Job List
        </button>
        <button className="sidebar-item" onClick={() => window.location.href = 'interview.html'}>
          Interviews
        </button>
        <button className="sidebar-item" onClick={() => window.location.href = 'settings.html'}>
          Settings
        </button>
        <button className="sidebar-item" onClick={() => window.location.href = 'help.html'}>
          Help
        </button>
        <button className="sidebar-item" onClick={() => window.location.href = 'notifications.html'}>
          Notifications
        </button>
        <button className="sidebar-item" onClick={() => window.location.href = 'logout.html'}>
          Logout
        </button>
      </div>

      <div className="container">
        {isFirstDashboard ? (
          <>
            {[
              { icon: faChartLine, title: 'Applications Sent', value: 10431 },
              { icon: faCalendarAlt, title: 'Interviews Scheduled', value: 7061 },
              { icon: faBriefcase, title: 'Sales Revenue', value: 290 },
              { icon: faTachometerAlt, title: 'Performance Overview', value: 37061 },
              { icon: faUserFriends, title: 'New Users', value: 1534 },
              { icon: faCogs, title: 'System Uptime', value: '99.9%' },
              { icon: faTasks, title: 'Tasks Completed', value: 837 },
              { icon: faDownload, title: 'Downloads', value: 2045 }
            ].map((card, index) => (
              <div key={index} className={`card ${index === 3 ? 'large-card' : ''}`}>
                <div className="square" style={{ backgroundColor: index % 3 === 0 ? '#4CAF50' : index % 3 === 1 ? '#FF5733' : '#FFBD33' }}></div>
                <div className="card-content">
                  <p className="card-title">{card.title}</p>
                  <h3>{card.value}</h3>
                </div>
              </div>
            ))}
          </>
        ) : (
          <>
            {[
              { icon: faCalendarAlt, title: 'Metric A', value: 123 },
              { icon: faTasks, title: 'Metric B', value: 456 },
              { icon: faDownload, title: 'Metric C', value: 789 },
              { icon: faBriefcase, title: 'Metric D', value: 101 },
              { icon: faChartLine, title: 'Metric E', value: 112 },
              { icon: faUserFriends, title: 'Metric F', value: 131 }
            ].map((card, index) => (
              <div key={index} className="card">
                <div className="square" style={{ backgroundColor: index % 3 === 0 ? '#4CAF50' : index % 3 === 1 ? '#FF5733' : '#FFBD33' }}></div>
                <div className="card-content">
                  <p className="card-title">{card.title}</p>
                  <h3>{card.value}</h3>
                </div>
              </div>
            ))}
          </>
        )}
        <div className="chart-container">
          <canvas id="quarterlyChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="downtimeChart"></canvas>
        </div>
        <div className="chart-container">
          <canvas id="otherStatsChart"></canvas>
        </div>
        <button className="toggle-btn" onClick={toggleDashboard}>
          {isFirstDashboard ? 'Show Second Dashboard' : 'Show First Dashboard'}
        </button>
      </div>

      <div className="chatbot" onClick={() => setChatboxVisible(!chatboxVisible)}>
        <FontAwesomeIcon icon={faRobot} />
      </div>

      {chatboxVisible && (
        <div className="chatbox" id="chatbox">
          <p>Do you have a question?</p>
          <button onClick={() => setContactOptionsVisible(!contactOptionsVisible)}>
            Contact Options
          </button>
          {contactOptionsVisible && (
            <div id="contactOptions">
              <button>
                <a href="mailto:support@example.com">Email Support</a>
              </button>
              <button>
                <a href="tel:+0877488938">Call Support</a>
              </button>
              <button>
                <a href="https://wa.me/0877488938" target="_blank" rel="noopener noreferrer">WhatsApp</a>
              </button>
            </div>
          )}
        </div>
      )}

      <style jsx>{`
        body {
            font-family: 'Arial', sans-serif;
            background-color: #1E233A;
            color: #FFFFFF;
            margin: 0;
            padding: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
        }

        .container {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 15px;
            width: 1000px;
            height: 600px;
            background-color: #1E233A;
            padding: 20px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
            border-radius: 10px;
            position: relative;
        }

        .card, .large-card {
            background-color: #2C3352;
            padding: 20px;
            border-radius: 8px;
            color: #FFFFFF;
            text-align: center;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
            position: relative;
            display: flex;
            align-items: center;
            gap: 10px;
        }

        .card .icon {
            font-size: 24px;
            margin-bottom: 10px;
        }

        .large-card {
            grid-column: span 2;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
        }

        .chart-container {
            grid-column: span 3;
            height: 250px;
            background-color: #2C3352;
            border-radius: 8px;
            padding: 20px;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        }

        .sidebar {
            position: fixed;
            top: 0;
            left: 0;
            width: 150px;
            height: 100%;
            background-color: #1E233A;
            display: flex;
            flex-direction: column;
            align-items: start;
            padding-top: 20px;
            z-index: 100;
        }

        .sidebar-item {
            background: none;
            border: none;
            color: #FFFFFF;
            font-size: 16px;
            margin: 10px 0;
            cursor: pointer;
            text-align: left;
            padding: 10px 20px;
            width: 100%;
            border-radius: 5px;
            transition: background-color 0.3s;
        }

        .sidebar-item:hover {
            background-color: #2C3352;
        }

        .chatbot {
            position: fixed;
            bottom: 20px;
            right: 20px;
            width: 60px;
            height: 60px;
            background-color: #4CAF50;
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            z-index: 100;
        }

        .chatbox {
            position: fixed;
            bottom: 100px;
            right: 20px;
            width: 300px;
            background-color: #2C3352;
            padding: 15px;
            border-radius: 8px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
            z-index: 1000;
        }

        #contactOptions {
            margin-top: 15px;
        }

        #contactOptions button {
            display: block;
            margin: 10px 0;
            background: #4CAF50;
            color: #FFFFFF;
            border: none;
            padding: 10px;
            border-radius: 5px;
            cursor: pointer;
        }

        #contactOptions button a {
            color: #FFFFFF;
            text-decoration: none;
        }

        #contactOptions button:hover {
            background: #388E3C;
        }

        .toggle-btn {
            position: absolute;
            bottom: 20px;
            left: 50%;
            transform: translateX(-50%);
            background-color: #4CAF50;
            color: #FFFFFF;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            box-shadow: 0 0 5px rgba(0, 0, 0, 0.3);
        }

        .toggle-btn:hover {
            background-color: #388E3C;
        }

        .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;
        }

        .card-title {
            font-size: 18px;
            margin-bottom: 10px;
        }

        .square {
            width: 2px;
            height: 2px;
            background-color: #4CAF50;
        }
      `}</style>
    </div>
  );
};

export default PerformanceDashboard;
