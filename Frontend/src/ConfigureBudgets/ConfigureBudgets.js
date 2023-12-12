import React, { useState, useEffect } from "react";
import axios from "axios";

function ConfigureBudgets() {
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [budgetList, setBudgetList] = useState([]);
  const [months, setMonths] = useState([
    "January",
    "February",
    "March",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]);

  const [selectedMonth, setSelectedMonth] = useState("");
  const [userId, setUserId] = useState(localStorage.getItem("userId"));
  const [feedbackMessage, setFeedbackMessage] = useState("");

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleBudgetChange = (e) => {
    setBudget(e.target.value);
  };

  const handleAddBudget = async () => {
    if (category && budget && selectedMonth) {
      const token=localStorage.getItem("token")
      try {
       
        const response = await axios.get(`http://161.35.190.125:3002/check-existing-budget/${userId}/${selectedMonth}/${category}`,{
          headers:{
            Authorization:`Bearer ${token}`
          }
        });

        if (response.data.exists) {
          setFeedbackMessage("Budget for this category already exists for the selected month.");
        } else {
          setBudgetList([...budgetList, { category, budget, month: selectedMonth }]);
          setCategory("");
          setBudget("");
          setFeedbackMessage(""); 
        }
      } catch (error) {
        console.error("Error checking existing budget:", error);
        setFeedbackMessage("Error checking existing budget.");
      }
    }
  };

  const handleEditBudget = (index) => {
    const editedBudget = budgetList[index];
    setCategory(editedBudget.category);
    setBudget(editedBudget.budget);

    const updatedBudgetList = [...budgetList];
    updatedBudgetList.splice(index, 1);
    setBudgetList(updatedBudgetList);
  };

  const handleSaveBudgets = async () => {
    try {
      if (budgetList.length === 0 || !selectedMonth) {
        console.error("Month or budget list is empty");
        return;
      }
      const token = localStorage.getItem("token");
      console.log(token);
      console.log(months);
      await axios.post(
        "http://161.35.190.125:3002/configure-budgets",
        {
          userId,
          months: selectedMonth,
          budgetList,
        },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Budgets saved successfully!");

      setBudgetList([]);
      setSelectedMonth("");
      setFeedbackMessage("Budgets saved successfully!");
    } catch (error) {
      setBudgetList([]);
      setSelectedMonth("");
      setFeedbackMessage("Error saving budgets: " + error.message);
      console.error("Error saving budgets:", error);
    }
  };

  const handleBack = () => {
    window.history.back();
  };



  return (
    <main className="center" id="main" aria-label="main" style={{ textAlign: 'center', padding: '20px' }}>
      <div>
        <h2 style={{ fontSize: '24px', marginBottom: '20px' }}>Configure Budgets</h2>
        <div>
          <label htmlFor="months" style={{ fontSize: '16px', marginBottom: '10px' }}>Month:</label>
          <select
            id="months"
            onChange={(e) => setSelectedMonth(e.target.value)}
            value={selectedMonth}
            style={{ marginBottom: '20px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '220px', fontSize: '16px' }}
          >
            <option value="">Select Month</option>
            {months.map((month) => (
              <option key={month} value={month} style={{ fontSize: '16px' }}>
                {month}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="category" style={{ fontSize: '16px', marginBottom: '10px' }}>Category:</label>
          <input
            type="text"
            id="category"
            value={category}
            onChange={handleCategoryChange}
            style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '220px', fontSize: '16px' }}
          />
        </div>
        <div>
          <label htmlFor="budget" style={{ fontSize: '16px', marginBottom: '10px' }}>Budget:</label>
          <input
            type="number"
            id="budget"
            value={budget}
            onChange={handleBudgetChange}
            style={{ marginBottom: '10px', padding: '8px', border: '1px solid #ccc', borderRadius: '4px', width: '220px', fontSize: '16px' }}
          />
        </div>
        <button type="button" onClick={handleAddBudget} style={{ fontSize: '16px', padding: '8px 12px', marginRight: '10px', backgroundColor: '#1e90ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Add Budget</button>
        {feedbackMessage && <p style={{ fontSize: '14px', color: 'red' }}>{feedbackMessage}</p>}
        <ul>
          {budgetList.map((item, index) => (
            <li key={index}>
              {item.category}: {item.budget}
              <button type="button" onClick={() => handleEditBudget(index)} style={{ marginLeft: '10px', fontSize: '14px', padding: '4px 8px', backgroundColor: '#1e90ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Edit</button>
            </li>
          ))}
        </ul>
        <button type="button" onClick={handleSaveBudgets} style={{ fontSize: '16px', padding: '8px 12px', marginRight: '15px', backgroundColor: '#1e90ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Save Budgets</button>
        <button type="button" onClick={handleBack} style={{ fontSize: '16px', padding: '8px 12px', backgroundColor: '#1e90ff', color: 'white', border: 'none', borderRadius: '5px', cursor: 'pointer', transition: 'background-color 0.3s ease' }}>Back</button>
      </div>
    </main>
  );
}

export default ConfigureBudgets;
