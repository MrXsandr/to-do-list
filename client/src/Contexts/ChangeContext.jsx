/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-constructed-context-values */
import React, {
  createContext, useCallback, useContext,
} from 'react';
import { TaskContext } from './PostsContext';

const URL = process.env.REACT_APP_BASEURL;

const ChangeContext = createContext();

function ChangeContextProvider({ children }) {
  const { setTasks } = useContext(TaskContext);

  const changeHandler = useCallback(async (id) => {
    const res = await fetch(
      `${URL}/task/${id}`,
      { method: 'PUT' },
    );
    if (res.ok) {
      setTasks((prev) => prev.map((el) => {
        if (el.id === id) {
          return { ...el, status: !el.status };
        }
        return el;
      }));
    }
  }, []);

  return (
    <ChangeContext.Provider value={changeHandler}>
      {children}
    </ChangeContext.Provider>
  );
}

export { ChangeContext };

export default ChangeContextProvider;
