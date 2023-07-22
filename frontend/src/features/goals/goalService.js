import axios from "axios";

const API_URL = "/api/goals/";

const createGoal = async (goalData, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.post(API_URL, goalData, config);
  return response.data;
};

// Get user goals
const getGoals = async (token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };

  const response = await axios.get(API_URL, config);

  return response.data;
};

//Delete user goals
const deleteGoals = async (goalID, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.delete(API_URL + goalID, config);
  return response.data;
};

//Update user goals
const updateGoal = async (goalID, goalStatus, token) => {
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  const response = await axios.put(
    API_URL + goalID,
    { status: goalStatus },
    config
  );
  return response.data;
};

const goalService = { createGoal, getGoals, deleteGoals, updateGoal };

export default goalService;
