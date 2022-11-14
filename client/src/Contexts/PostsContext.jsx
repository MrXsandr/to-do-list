/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import React, {
  createContext, useEffect, useState,
} from 'react';

const URL = process.env.REACT_APP_BASEURL;

const TaskContext = createContext();

function TasksContextProvider({ children }) {
  const [input, setInput] = useState('');
  const [task, setTasks] = useState([]);

  useEffect(() => {
    axios.get(`${URL}/tasks`).then((res) => setTasks(res.data));
  }, []);

  const handleChange = (e) => setInput(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`${URL}/tasks`, { input }).then((res) => setTasks((prev) => [...prev, res.data]));
    setInput('');
  };

  return (
    <TaskContext.Provider value={{
      input,
      handleChange,
      handleSubmit,
      // handleDelete,
      task,
      setTasks,
    }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export { TaskContext };

export default TasksContextProvider;
