/* eslint-disable react/prop-types */
import React, { memo, useContext } from 'react';
import { Button, ListGroupItem } from 'reactstrap';
import { ChangeContext } from '../Contexts/ChangeContext';
import { DeliteContext } from '../Contexts/DeliteContext';

function PostItem({ task }) {
  const handleDelete = useContext(DeliteContext);
  const changeHandler = useContext(ChangeContext);

  console.log('Item');
  return (
    <ListGroupItem style={{ textDecoration: task.status ? 'line-through' : 'none' }}>
      {task.title}
      <Button
        color="warning"
        onClick={() => handleDelete(task.id)}
      >
        Удалить дело(Получить взятку)
      </Button>
      <Button
        color="success"
        onClick={() => changeHandler(task.id)}
      >
        {task.status ? 'Освободить' : 'Посадить' }
      </Button>
    </ListGroupItem>
  );
}

export default memo(PostItem);
