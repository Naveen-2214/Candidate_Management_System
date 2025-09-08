import axios from "axios";

// URL of your FastAPI backend
const API_URL = "http://127.0.0.1:8000/api/candidates";

// GET all candidates
export const getCandidates = async () => {
  try {
    const response = await axios.get(API_URL);
    return response;
  } catch (error) {
    console.error("Error fetching candidates:", error);
    throw error;
  }
};

// CREATE a new candidate
export const addCandidate = async (candidate) => {
  try {
    const response = await axios.post(API_URL, candidate);
    return response;
  } catch (error) {
    console.error("Error adding candidate:", error);
    throw error;
  }
};

// UPDATE an existing candidate
export const updateCandidate = async (id, candidate) => {
  try {
    const response = await axios.put(`${API_URL}/${id}`, candidate);
    return response;
  } catch (error) {
    console.error("Error updating candidate:", error);
    throw error;
  }
};

// DELETE a candidate
export const deleteCandidate = async (id) => {
  try {
    const response = await axios.delete(`${API_URL}/${id}`);
    return response;
  } catch (error) {
    console.error("Error deleting candidate:", error);
    throw error;
  }
};
