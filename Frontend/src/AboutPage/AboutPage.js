import React from 'react';

function AboutPage() {
  const aboutPageStyle = {
    textAlign: 'center',
    padding: '20px',
    backgroundColor: '#f0f0f0',
    borderRadius: '8px',
    boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
    margin: '20px auto',
    width: '70%',
  };

  return (
    <div style={aboutPageStyle}>
      <h2 style={{ fontSize: '24px', color: '#333' }}>About Page</h2>
      {/* Additional content for the personal budget management app */}
      <h3 style={{ fontSize: '20px', marginTop: '30px', color: '#333' }}>About Personal Budget Management App</h3>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        Welcome to our Personal Budget Management App! Our application is designed to help you take control of your finances effortlessly.
      </p>
      <h4 style={{ fontSize: '18px', marginTop: '20px', color: '#333' }}>Key Features:</h4>
      <ul style={{ fontSize: '16px', lineHeight: '1.6' }}>
        <li>Expense Tracking: Easily track your expenses and categorize them for better insights.</li>
        <li>Budget Planning: Plan your monthly budget and set spending limits for different categories.</li>
        <li>Visual Reports: Visualize your spending patterns through intuitive graphs and charts.</li>
      </ul>
      <h4 style={{ fontSize: '18px', marginTop: '20px', color: '#333' }}>Why Choose Our App?</h4>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        We understand the importance of managing finances effectively. Our app provides a user-friendly interface, empowering you to make informed financial decisions.
      </p>
      <h4 style={{ fontSize: '18px', marginTop: '20px', color: '#333' }}>How It Works:</h4>
      <ol style={{ fontSize: '16px', lineHeight: '1.6' }}>
        <li>Sign Up: Create your account to start managing your finances.</li>
        <li>Add Transactions: Record your expenses and income transactions easily.</li>
        <li>Analyze & Plan: Review your spending habits, set budgets, and work towards your financial goals.</li>
      </ol>
      <h4 style={{ fontSize: '18px', marginTop: '20px', color: '#333' }}>Start Your Financial Journey Today!</h4>
      <p style={{ fontSize: '16px', lineHeight: '1.6' }}>
        Join thousands of users who are taking control of their finances with our Personal Budget Management App. Start managing your money better today!
      </p>
    </div>
  );
}

export default AboutPage;
