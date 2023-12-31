import React, { Fragment } from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import { Col } from 'react-bootstrap';

interface Props {
  setData: (data: number[]) => void;
  title: string;
  is_sorting: boolean;
}

export default function Input({ setData, title, is_sorting }: Props) {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const numberArray = input.split(',').map((num) => parseInt(num));
    if (!numberArray.includes(NaN)) {
      setData(numberArray);
      setInput('');
      setError('');
    } else {
      setError('Your input is not numbers separated by commas.');
    }
  };

  const handlePick = (num: number) => {
    setError('');
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
            disabled={is_sorting}
            onClick={() => {
              handlePick(25);
            }}
            variant="success"
          >
            Pick 25 Random Numbers
          </Button>
        </Col>
        <Col>
          <Button
            disabled={is_sorting}
            onClick={() => {
              handlePick(50);
            }}
            variant="primary"
          >
            Pick 50 Random Numbers
          </Button>
        </Col>
        <Col>
          <Button
            disabled={is_sorting}
            onClick={() => {
              handlePick(100);
            }}
            variant="warning"
          >
            Pick 100 Random Numbers
          </Button>
        </Col>
        <Col></Col>
      </Row>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Your numbers:</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter numbers seperated by commas. e.g. 3, 2, 1"
            value={input}
            onChange={handleChange}
          />
        </Form.Group>

        <Button disabled={is_sorting} variant="primary" type="submit">
          Start Sorting!
        </Button>
        <p className="red mt-2">{error}</p>
      </Form>
    </>
  );
}
