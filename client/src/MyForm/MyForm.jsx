import React, { useContext } from 'react';
import {
  Button, Col, Form, FormGroup, Input, Label, Row,
} from 'reactstrap';
import { TaskContext } from '../Contexts/PostsContext';

export default function MyForm() {
  const { handleChange, handleSubmit, input } = useContext(TaskContext);

  return (
    <Row>
      <Col>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="postTitle">
              Симулятор прокурора
            </Label>
            <Input
              id="postTitle"
              name="title"
              placeholder="накатать моляву?"
              type="text"
              value={input}
              onChange={handleChange}
            />
          </FormGroup>
          <FormGroup>
            <Button color="danger" type="submit">Отправить оперу</Button>
          </FormGroup>
        </Form>
      </Col>
    </Row>
  );
}
