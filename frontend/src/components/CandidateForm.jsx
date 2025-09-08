import React, { useState, useEffect } from "react";
import { addCandidate, updateCandidate } from "../api.js";

const CandidateForm = ({ fetchCandidates, editingCandidate, setEditingCandidate }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone_number: "",
    current_status: "",
    resume_link: ""
  });

  useEffect(() => {
    if (editingCandidate) setFormData(editingCandidate);
  }, [editingCandidate]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (editingCandidate) {
      await updateCandidate(editingCandidate.id, formData);
      setEditingCandidate(null);
    } else {
      await addCandidate(formData);
    }
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", phone_number: "", current_status: "", resume_link: "" });
    fetchCandidates();
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <input name="name" placeholder="Name" value={formData.name} onChange={handleChange} required />
      <input name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
      <input name="phone_number" placeholder="Phone Number" value={formData.phone_number} onChange={handleChange} required />
      <input name="current_status" placeholder="Status" value={formData.current_status} onChange={handleChange} required />
      <input name="resume_link" placeholder="Resume URL" value={formData.resume_link} onChange={handleChange} />
      <button type="submit">{editingCandidate ? "Update" : "Add"} Candidate</button>
    </form>
    </>
  );
};

export default CandidateForm;
