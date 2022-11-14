import React from 'react';
import { Container } from 'reactstrap';
import ChangeContextProvider from './Contexts/ChangeContext';
import DeliteContextProvider from './Contexts/DeliteContext';
import TasksContextProvider from './Contexts/PostsContext';
import MyForm from './MyForm/MyForm';
import PostsList from './PostsList/PostsList';

function App() {
  // const expensiveEncrypt = (arr) => {
  //   const result = [];
  //   for (let i = 0; i < 1e5; i++) {
  //     result.push(JSON.stringify(arr) + Math.random())
  //   }
  //   return result
  // }

  // const result = useMemo(() => expensiveEncrypt(posts), []);
  // console.log(result)

  return (
    <Container>
      <TasksContextProvider>
        <DeliteContextProvider>
          <ChangeContextProvider>
            <MyForm />
            <PostsList />
          </ChangeContextProvider>
        </DeliteContextProvider>
      </TasksContextProvider>
    </Container>
  );
}

export default App;
