import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

interface Props {
  setData: (data: number[]) => void;
  title: string;
}

export default function Input({ setData, title }: Props) {
  const [input, setInput] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numberArray = input.split(',').map((num) => parseInt(num));
    setData(numberArray);
    setInput('');
  };

  const handlePick = (num: number) => {
    const arr: number[] = [];
    for (let i = 0; i < num; i++) {
      arr.push(Math.floor(Math.random() * 1000));
    }
    setData(arr);
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
            value={input}
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
