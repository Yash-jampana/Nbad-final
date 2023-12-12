import React from 'react';
import { Link } from 'react-router-dom';

function Dashboard() {
  return (
    <main className="center" id="main" aria-label="main">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Welcome to the Dashboard!</h2>

        <Link to="/configure-budgets">
          <button style={{ marginRight: '20px', fontSize: '16px', padding: '10px 15px', backgroundColor: '#1e90ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Configure Budgets</button>
        </Link>

        <Link to="/add-expense">
          <button style={{ fontSize: '16px', padding: '10px 15px', backgroundColor: '#4caf50', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Manage Expenses</button>
        </Link>
      </div>
    </main>
  );
}

export default Dashboard;
