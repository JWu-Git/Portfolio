import React from 'react';

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

export default function Input() {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Your numbers:</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter numbers seperated by commas. e.g. 1, 2, 3"
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Start Sorting!
      </Button>
    </Form>
  );
}
