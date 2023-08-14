import React from 'react';
import Container from 'react-bootstrap/Container';

interface Props {
  children: React.ReactNode;
}
export default function PageContainer({ children }: Props) {
  return <Container>{children}</Container>;
}
