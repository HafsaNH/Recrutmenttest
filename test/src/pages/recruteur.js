import React, { useState, useEffect } from 'react';
import { Chart, registerables } from 'chart.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faUser, faClipboard, faListUl, faCalendarCheck, faCogs, faQuestionCircle, 
  faBell, faSignOutAlt, faChartLine, faCalendarAlt, faBriefcase, faTachometerAlt, 
  faUserFriends, faTasks, faDownload, faRobot 
} from '@fortawesome/free-solid-svg-icons';

Chart.register(...registerables);

const PerformanceDashboard = () => {
  const [chatboxVisible, setChatboxVisible] = useState(false);
  const [contactOptionsVisible, setContactOptionsVisible] = useState(false);
  const [userQuery, setUserQuery] = useState(null);

  const toggleChatbox = () => setChatboxVisible(!chatboxVisible);
  const showContactOptions = () => setContactOptionsVisible(true);

  useEffect(() => {
    const ctxQuarterly = document.getElementById('quarterlyChart').getContext('2d');
    new Chart(ctxQuarterly, {
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
            grid: { color: '#2C3352' },
            ticks: { color: '#FFFFFF' }
          },
          x: {
            grid: { color: '#2C3352' },
            ticks: { color: '#FFFFFF' }
          }
        },
        plugins: {
          legend: { labels: { color: '#FFFFFF' } }
        }
      }
    });

    const ctxDowntime = document.getElementById('downtimeChart').getContext('2d');
    new Chart(ctxDowntime, {
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

    const ctxOtherStats = document.getElementById('otherStatsChart').getContext('2d');
    new Chart(ctxOtherStats, {
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
            grid: { color: '#2C3352' },
            ticks: { color: '#FFFFFF' }
          },
          x: {
            grid: { color: '#2C3352' },
            ticks: { color: '#FFFFFF' }
          }
        },
        plugins: {
          legend: { labels: { color: '#FFFFFF' } }
        }
      }
    });
  }, []);

  const handleUserChoice = (choice) => {
    setUserQuery(choice);
    setContactOptionsVisible(false);
  };

  const handleBack = () => setUserQuery(null);

  return (
    <div className="dashboard">
      <aside className="sidebar">
        {[
          { icon: faUser, text: 'Profile', link: 'profile.html' },
          { icon: faClipboard, text: 'Test', link:'recruteur/test.html' },
          { icon: faListUl, text: 'Candidates', link: 'joblist.html' },
          { icon: faCalendarCheck, text: 'Interviews', link: 'interview.html' },
          { icon: faCogs, text: 'Settings', link: 'settings.html' },
          { icon: faUserFriends, text: 'CVthèque', link: 'cvtheque.html' },
          { icon: faQuestionCircle, text: 'Help', link: 'help.html' },
          { icon: faBell, text: 'Notifications', link: 'notifications.html' },
          { icon: faSignOutAlt, text: 'Logout', link: 'logout.html' },
        ].map((item, index) => (
          <button key={index} className="icon-btn" onClick={() => window.location.href = item.link}>
            <FontAwesomeIcon icon={item.icon} style={{ color: '#FFFFFF' }} />
            <span className="icon-text">{item.text}</span>
          </button>
        ))}
      </aside>

      <main className="content">
        <div className="cards">
          {[
            { icon: faChartLine, title: 'Applications Sent', value: '10431' },
            { icon: faCalendarAlt, title: 'Interviews Scheduled', value: '7061' },
            { icon: faUserFriends, title: 'New Users', value: '1534' },
          ].map((item, index) => (
            <div key={index} className="card">
              <FontAwesomeIcon icon={item.icon} className="card-icon" style={{ color: '#FFFFFF' }} />
              <div className="card-details">
                <p className="card-title">{item.title}</p>
                <h3 className="card-value">{item.value}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="large-cards">
          <div className="performance-card">
            <div className="stats-section">
              <p className="stats-title">Performance Overview</p>
            </div>
            <div className="chart-section">
              <canvas id="quarterlyChart"></canvas>
            </div>
          </div>
          <div className="performance-card">
            <div className="stats-section">
              <p className="stats-title">Downtime Causes</p>
            </div>
            <div className="chart-section">
              <canvas id="downtimeChart"></canvas>
            </div>
          </div>
        </div>

        <div className="chart-container">
          <canvas id="otherStatsChart"></canvas>
        </div>
      </main>

      <div className="chatbot" onClick={toggleChatbox}>
        <FontAwesomeIcon icon={faRobot} style={{ color: '#FFFFFF' }} />
      </div>

      {chatboxVisible && (
        <div className="chatbox">
          {!userQuery ? (
            <>
              <p>Hi there! How can I assist you today?</p>
              <button onClick={() => handleUserChoice('learn_more')}>Learn more about our platform</button>
              <button onClick={() => handleUserChoice('payment_issue')}>Report a payment issue</button>
              <button onClick={() => handleUserChoice('general_inquiry')}>General inquiry</button>
            </>
          ) : userQuery === 'learn_more' ? (
            <>
              <p>What would you like to know more about?</p>
              <button onClick={() => window.location.href = '/blogs'}>Blogs</button>
              <button onClick={() => window.location.href = '/services'}>Services</button>
              <button onClick={handleBack}>Back</button>
            </>
          ) : userQuery === 'payment_issue' ? (
            <>
              <p>Are you experiencing a problem with your payment?</p>
              <button onClick={() => window.location.href = 'mailto:support@yourplatform.com'}>Email Support</button>
              <button onClick={() => window.location.href = 'https://wa.me/0877488938'}>Contact via WhatsApp</button>
              <button onClick={handleBack}>Back</button>
            </>
          ) : userQuery === 'general_inquiry' ? (
            <>
              <p>What do you need help with?</p>
              <button onClick={() => window.location.href = '/help'}>Help Center</button>
              <button onClick={() => window.location.href = '/contact'}>Contact Us</button>
              <button onClick={handleBack}>Back</button>
            </>
          ) : (
            <>
              <p>Do you have a question?</p>
              <button onClick={showContactOptions}>Yes</button>
              <button onClick={toggleChatbox}>No</button>
              {contactOptionsVisible && (
                <div className="contact-options">
                  <p>Contact us:</p>
                  <button onClick={() => window.location.href = 'mailto:help@ehc.ma'}>Email</button>
                  <button onClick={() => window.location.href = 'https://wa.me/0877488938'}>WhatsApp</button>
                </div>
              )}
            </>
          )}
        </div>
      )}
      <style jsx>{`
        .dashboard {
          display: flex;
          height: 100vh;
          background-color: #1E233A;
          color: #FFFFFF;
          font-family: 'Arial', sans-serif;
        }

        .sidebar {
          width: 80px;
          background-color: #2C3352;
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 20px 0;
          position: fixed;
          height: 100%;
        }

        .icon-btn {
          margin: 20px 0;
          background: none;
          border: none;
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          color: #FFFFFF;
        }

        .icon-text {
          font-size: 12px;
          color: #FFFFFF;
          margin-top: 5px;
        }

        .content {
          margin-left: 80px;
          padding: 20px;
          flex: 1;
          overflow: auto;
        }

        .cards {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
          margin-bottom: 20px;
        }

        .card {
          background-color: #2C3352;
          border-radius: 8px;
          padding: 15px;
          flex: 1 1 calc(33% - 20px);
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .card-icon {
          font-size: 32px;
        }

        .card-details {
          text-align: right;
        }

        .card-title {
          color: #FFFFFF;
          font-size: 14px;
          font-weight: bold;
          margin: 0;
        }

        .card-value {
          color: #FFFFFF;
          font-size: 16px;
          font-weight: bold;
          margin: 0;
        }

        .large-cards {
          display: flex;
          gap: 20px;
          margin-bottom: 20px;
        }

        .performance-card {
          background-color: #2C3352;
          border-radius: 8px;
          padding: 15px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .stats-section {
          margin-bottom: 10px;
        }

        .chart-section {
          flex: 1;
        }

        .charts {
          margin-top: 20px;
        }

        .chart-container {
          background-color: #2C3352;
          border-radius: 8px;
          padding: 15px;
          height: 300px;
        }

        .chatbot {
          position: fixed;
          bottom: 20px;
          right: 20px;
          background-color: #2C3352;
          border-radius: 50%;
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;
        }

        .chatbox {
          position: fixed;
          bottom: 80px;
          right: 20px;
          background-color: #2C3352;
          border-radius: 8px;
          padding: 15px;
          width: 250px;
          color: #FFFFFF;
        }

        .contact-options button {
          background: none;
          color: #FFFFFF;
          border: none;
          cursor: pointer;
        }

        .contact-options a {
          color: #FFFFFF;
        }
      `}</style>
    </div>
  );
};

export default PerformanceDashboard;
