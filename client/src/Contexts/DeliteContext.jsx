/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import axios from 'axios';
import React, {
  createContext, useCallback, useContext,
} from 'react';
import { TaskContext } from './PostsContext';

const URL = process.env.REACT_APP_BASEURL;

const DeliteContext = createContext();

function DeliteContextProvider({ children }) {
  const { setTasks } = useContext(TaskContext);

  const handleDelete = useCallback((id) => {
    axios.delete(`${URL}/tasks/${id}`).then(() => setTasks((prev) => prev.filter((el) => el.id !== id)));
  }, []);
  return (
    <DeliteContext.Provider value={handleDelete}>
      {children}
    </DeliteContext.Provider>
  );
}

export { DeliteContext };

export default DeliteContextProvider;
