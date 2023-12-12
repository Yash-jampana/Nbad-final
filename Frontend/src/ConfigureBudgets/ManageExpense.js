import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useAuth } from '../AuthContext';

function ManageExpense() {
  const [months, setMonths] = useState([]);
  const [categories, setCategories] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');
  const [selectedCategory, setSelectedCategory] = useState({
    categories: [],
  });
  const [expense, setExpenseAmount] = useState('');
  const [month, setMonth] = useState({
    months: [
      'January',
      'February',
      'March',
      'May',
      'June',
      'July',
      'August',
      'September',
      'October',
      'November',
      'December',
    ],
  });
  const [expenseAdded, setExpenseAdded] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setMonths(month.months);
  }, []);

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const userId = localStorage.getItem('userId');
        const token = localStorage.getItem('token');

        const categoriesResponse = await axios.get(
          `http://161.35.190.125:3002/get-categories/${userId}?month=${selectedMonth}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        setCategories(categoriesResponse.data);
      } catch (error) {
        console.error('Error fetching categories:', error);
      }
    };

    if (selectedMonth) {
      fetchCategories();
    } else {
      setCategories([]);
    }
  }, [selectedMonth]);

  const handleAddExpense = async () => {
    try {
      const userId = localStorage.getItem('userId');
      const token = localStorage.getItem('token');

      if (!selectedMonth && !selectedCategory && !expense) {
        console.error('Month, category, and expense amount are required');
        return;
      }

      await axios.post(
        'http://161.35.190.125:3002/add-expense',
        {
          userId: userId,
          month: selectedMonth,
          category: selectedCategory,
          expense: parseFloat(expense),
        },
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      );

      setExpenseAdded(true);
      setError('');
      setSelectedMonth('');
      setSelectedCategory('');
      setExpenseAmount('');
    } catch (error) {
      setExpenseAdded(false);
      setSelectedMonth('');
      setSelectedCategory('');
      setExpenseAmount('');
      setError('Error adding expense. Please try again.');
      console.error('Error adding expense:', error);
    }
  };

  const handleBack = () => {
    window.history.back();
  };

  return (
    <main className="center" id="main" aria-label="main">
      <div style={{ textAlign: 'center', padding: '20px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Manage Expenses</h2>

        <label htmlFor="month" style={{ fontSize: '18px' }}>
          Month:
        </label>
        <select
          id="month"
          onChange={(e) => setSelectedMonth(e.target.value)}
          value={selectedMonth}
          style={{ marginRight: '15px', fontSize: '18px' }}
        >
          <option value="">Select Month</option>
          {months.map((month) => (
            <option key={month} value={month}>
              {month}
            </option>
          ))}
        </select>

        <label htmlFor="category" style={{ fontSize: '18px' }}>
          Category:
        </label>
        <select
          id="category"
          onChange={(e) => setSelectedCategory(e.target.value)}
          value={selectedCategory}
          style={{ marginRight: '15px', fontSize: '18px' }}
        >
          <option value="">Select Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>

        <label htmlFor="expenseAmount" style={{ fontSize: '18px' }}>
          Expense Amount:
        </label>
        <input
          type="number"
          id="expenseAmount"
          value={expense}
          onChange={(e) => setExpenseAmount(e.target.value)}
          style={{ marginRight: '15px', fontSize: '18px' }}
        />

        {expenseAdded && <p>Expense added successfully!</p>}
        {error && <p style={{ color: 'red' }}>{error}</p>}

        <button onClick={handleAddExpense} style={{ fontSize: '18px', marginRight: '15px' }}>
          Add Expense
        </button>
        <button type="button" onClick={handleBack} style={{ fontSize: '18px' }}>
          Back
        </button>
      </div>
    </main>
  );
}

export default ManageExpense;
