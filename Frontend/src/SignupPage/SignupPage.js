import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function SignupPage() {
  const history = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  });

  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    axios
      .post('http://161.35.190.125:3002/Signup', formData)
      .then((response) => {
        setSuccessMessage(response.data.message);
        setError('');
        history('/login');
      })
      .catch((error) => {
        setError('Error signing up. Please try again.');
        setSuccessMessage('');
      });
  };

  return (
    <div style={{ textAlign: 'center', padding: '20px', position: 'relative' }}>
      <form style={{ display: 'inline-block', textAlign: 'left', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)' }} onSubmit={handleSignup}>
        <h2 style={{ fontSize: '24px', color: '#333' }}>Signup</h2>

        {error && <p style={{ color: 'red', marginTop: '10px' }}>{error}</p>}
        {successMessage && <p style={{ color: 'green', marginTop: '10px' }}>{successMessage}</p>}

        <label htmlFor="username" style={{ color: '#1e90ff', fontSize: '16px' }}>Username:</label>
        <input
          type="text"
          id="username"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          style={{ marginTop: '10px', marginBottom: '20px', marginLeft: '5px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '220px', fontSize: '16px' }}
          required
        />
        <br />

        <label htmlFor="password" style={{ color: '#1e90ff', fontSize: '16px' }}>Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          style={{ marginBottom: '15px', marginLeft: '5px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '220px', fontSize: '16px' }}
          required
        />
        <br />

        <button type="submit" style={{ fontWeight: '600', letterSpacing: '0.05em', backgroundColor: '#4caf50', color: 'white', padding: '10px 15px', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Signup</button>
      </form>
    </div>
  );
}

export default SignupPage;
