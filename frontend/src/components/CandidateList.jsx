import React, { useEffect, useState } from "react";
import { getCandidates, deleteCandidate } from "../api.js";
import CandidateForm from "./CandidateForm.jsx";

const CandidateList = () => {
  const [candidates, setCandidates] = useState([]);
  const [editingCandidate, setEditingCandidate] = useState(null);

  const fetchCandidates = async () => {
    const response = await getCandidates();
    setCandidates(response.data);
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handleDelete = async (id) => {
    await deleteCandidate(id);
    fetchCandidates();
  };

  return (
    <div>
      <h1>Candidate List</h1>
      <CandidateForm
        fetchCandidates={fetchCandidates}
        editingCandidate={editingCandidate}
        setEditingCandidate={setEditingCandidate}
      />
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Status</th>
            <th>Resume</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {candidates.map((c) => (
            <tr key={c.id}>
              <td>{c.name}</td>
              <td>{c.email}</td>
              <td>{c.phone_number}</td>
              <td>{c.current_status}</td>
              <td>
                <a href={c.resume_link} target="_blank" rel="noopener noreferrer">
                  View Resume
                </a>
              </td>
              <td>
                <button onClick={() => setEditingCandidate(c)}>Edit</button>
                <button onClick={() => handleDelete(c.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CandidateList;
