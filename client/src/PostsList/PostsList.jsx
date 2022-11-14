import React, { useContext } from 'react';
import { ListGroup } from 'reactstrap';
import { TaskContext } from '../Contexts/PostsContext';
import PostItem from '../PostItem/PostItem';

export default function PostsList() {
  const { task } = useContext(TaskContext);
  return (
    <ListGroup>{task && task?.map((el) => <PostItem key={el.id} task={el} />)}</ListGroup>
  );
}
