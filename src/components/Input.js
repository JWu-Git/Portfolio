import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { useState } from 'react';

export default function Input({ setData }) {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setData(value);
    setValue('');
  };

  return (
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
  );
}
