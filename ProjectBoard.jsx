import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { io } from 'socket.io-client';

const socket = io('http://localhost:5000');

const ProjectBoard = () => {
  const { id } = useParams();
  const [tasks, setTasks] = useState([]);
  const [title, setTitle] = useState('');
  const [comments, setComments] = useState({});
  const [newComment, setNewComment] = useState('');

  const fetchTasks = async () => {
    const res = await axios.get(`http://localhost:5000/api/tasks/${id}`);
    setTasks(res.data);
  };

  const addTask = async () => {
    await axios.post('http://localhost:5000/api/tasks', {
      projectId: id,
      title,
      description: 'Task desc',
    });
    fetchTasks();
  };

  const fetchComments = async (taskId) => {
    const res = await axios.get(`http://localhost:5000/api/comments/${taskId}`);
    setComments((prev) => ({ ...prev, [taskId]: res.data }));
  };

  const sendComment = async (taskId) => {
    const user = JSON.parse(localStorage.getItem('user'));
    const res = await axios.post('http://localhost:5000/api/comments', {
      taskId,
      user: user._id,
      message: newComment,
    });
    socket.emit('send-comment', res.data);
    setNewComment('');
    fetchComments(taskId);
  };

  useEffect(() => {
    fetchTasks();
    socket.on('receive-comment', (data) => {
      fetchComments(data.taskId);
    });
    return () => socket.disconnect();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Project Tasks</h1>
      <input className="border p-2" placeholder="Task title" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={addTask} className="bg-green-500 text-white px-4 py-2 ml-2">Add Task</button>

      <div className="mt-6">
        {tasks.map((task) => (
          <div key={task._id} className="border p-4 mb-4 rounded">
            <h2 className="font-bold">{task.title}</h2>
            <div className="mt-2">
              <input className="border p-1 mr-2" placeholder="Add comment..." onChange={(e) => setNewComment(e.target.value)} />
              <button onClick={() => sendComment(task._id)} className="bg-blue-500 text-white px-2 py-1">Send</button>
            </div>
            <div className="text-sm mt-2">
              {(comments[task._id] || []).map((c, i) => (
                <p key={i}><b>{c.user.username}:</b> {c.message}</p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectBoard;