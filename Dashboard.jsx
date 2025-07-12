import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Dashboard = () => {
  const [projects, setProjects] = useState([]);
  const [title, setTitle] = useState('');
  const navigate = useNavigate();

  const fetchProjects = async () => {
    const res = await axios.get('http://localhost:5000/api/projects');
    setProjects(res.data);
  };

  const createProject = async () => {
    await axios.post('http://localhost:5000/api/projects', {
      title,
      description: 'Project Description',
      members: [],
    });
    fetchProjects();
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Dashboard</h1>
      <input className="border p-2 mr-2" placeholder="Project Title" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={createProject} className="bg-blue-500 text-white px-4 py-2">Create Project</button>

      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((proj) => (
          <div key={proj._id} className="p-4 border rounded shadow" onClick={() => navigate(`/project/${proj._id}`)}>
            <h2 className="font-bold">{proj.title}</h2>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;