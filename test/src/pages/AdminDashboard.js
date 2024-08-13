import React from "react";
import { FaHome, FaUserTie, FaUsers, FaFolderOpen, FaClipboard, FaCogs, FaQuestionCircle, FaSignOutAlt } from "react-icons/fa";
import { Line } from "react-chartjs-2";
import 'chart.js/auto';

function AdminDashboard() {
  const navigateTo = (section) => {
    console.log(`Navigating to ${section}`);
  };

  const userChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Active Users",
        data: [65, 59, 80, 81, 56, 55],
        fill: false,
        backgroundColor: "#4CAF50",
        borderColor: "#4CAF50",
      },
    ],
  };

  const activityChartData = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
    datasets: [
      {
        label: "Activity",
        data: [28, 48, 40, 19, 86, 27],
        fill: false,
        backgroundColor: "#1E88E5",
        borderColor: "#1E88E5",
      },
    ],
  };

  return (
    <div style={styles.adminDashboard}>
      <aside style={styles.sidebar}>
        <div style={styles.sidebarItem} onClick={() => navigateTo("dashboard")}>
          <FaHome style={styles.icon} />
          <span>Dashboard</span>
        </div>
        <div style={styles.sidebarItem} onClick={() => navigateTo("recruiters")}>
          <FaUserTie style={styles.icon} />
          <span>Recruiters</span>
        </div>
        <div style={styles.sidebarItem} onClick={() => navigateTo("candidates")}>
          <FaUsers style={styles.icon} />
          <span>Candidates</span>
        </div>
        <div style={styles.sidebarItem} onClick={() => navigateTo("cvtheque")}>
          <FaFolderOpen style={styles.icon} />
          <span>CVthèque</span>
        </div>
        <div style={styles.sidebarItem} onClick={() => navigateTo("tests")}>
          <FaClipboard style={styles.icon} />
          <span>Tests</span>
        </div>
        <div style={styles.sidebarItem} onClick={() => navigateTo("settings")}>
          <FaCogs style={styles.icon} />
          <span>Settings</span>
        </div>
        <div style={styles.sidebarItem} onClick={() => navigateTo("help")}>
          <FaQuestionCircle style={styles.icon} />
          <span>Help</span>
        </div>
        <div style={styles.sidebarItem} onClick={() => navigateTo("logout")}>
          <FaSignOutAlt style={styles.icon} />
          <span>Logout</span>
        </div>
      </aside>

      <main style={styles.mainContent}>
        <div style={styles.card}>
          <h3>Total Recruiters</h3>
          <p>125</p>
        </div>
        <div style={styles.card}>
          <h3>Total Candidates</h3>
          <p>500</p>
        </div>
        <div style={styles.card}>
          <h3>CVs in CVthèque</h3>
          <p>750</p>
        </div>
        <div style={styles.card}>
          <h3>Tests Conducted</h3>
          <p>300</p>
        </div>
        <div style={styles.largeCard}>
          <h3>Platform Overview</h3>
          <p>Active Users: 1000</p>
          <p>Pending Applications: 150</p>
          <p>Jobs Posted: 200</p>
        </div>
        <div style={styles.chartContainer}>
          <Line data={userChartData} />
        </div>
        <div style={styles.chartContainer}>
          <Line data={activityChartData} />
        </div>
      </main>
    </div>
  );
}

const styles = {
  adminDashboard: {
    display: "flex",
    height: "100vh",
    backgroundColor: "#1E233A",
    color: "white",
    fontFamily: "Arial, sans-serif",
  },
  sidebar: {
    width: "250px",
    backgroundColor: "#2C3352",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  },
  sidebarItem: {
    display: "flex",
    alignItems: "center",
    padding: "10px",
    marginBottom: "15px",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s",
  },
  sidebarItemHover: {
    backgroundColor: "#4CAF50",
  },
  icon: {
    marginRight: "10px",
    fontSize: "20px",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "15px",
  },
  card: {
    backgroundColor: "#2C3352",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  largeCard: {
    gridColumn: "span 2",
    backgroundColor: "#2C3352",
    padding: "20px",
    borderRadius: "10px",
    textAlign: "center",
  },
  chartContainer: {
    backgroundColor: "#2C3352",
    padding: "20px",
    borderRadius: "10px",
  },
};

export default AdminDashboard;
