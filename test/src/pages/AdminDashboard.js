import React from 'react';

class AdminDashboard extends React.Component {
  render() {
    const path = `${process.env.PUBLIC_URL}dist/AdminDasboard.html`;

    return (
      <iframe
        src={path}
        style={{ width: '100%', height: '100vh', border: 'none' }}
        title="Condidat Dashboard"
      />
    );
  }
}

export default AdminDashboard;
