import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

export default function Input({ setData, title }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(value);
    setValue('');
  };

  const handlePick = (num) => {
    const arr = [];
    for (let i = 0; i < num; i++) {
      arr.push(Math.random() * 1000);
    }
    setData(arr.toString());
  };

  return (
    <>
      <h1 className="center mb-4">{title}</h1>
      <Row>
        <Col></Col>
        <Col>
          <Button
            onClick={() => {
              handlePick(100);
            }}
            variant="success"
          >
            Pick 100 Random Numbers
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              handlePick(300);
            }}
            variant="primary"
          >
            Pick 300 Random Numbers
          </Button>
        </Col>
        <Col>
          <Button
            onClick={() => {
              handlePick(1000);
            }}
            variant="warning"
          >
            Pick 1000 Random Numbers
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your numbers:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter numbers seperated by commas. e.g. 1, 2, 3"
            value={value}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Start Sorting!
        </Button>
      </Form>
    </>
  );
}
