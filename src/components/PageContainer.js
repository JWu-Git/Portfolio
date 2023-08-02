import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function PageContainer({ children }) {
  return (
    <Container>
      <Row>
        <Col></Col>
        <Col xs={8}>{children}</Col>
        <Col></Col>
      </Row>
    </Container>
  );
}
