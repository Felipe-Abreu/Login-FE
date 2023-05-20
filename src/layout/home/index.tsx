import React, { useContext } from 'react';
import { AuthContext } from '../../context/auth';
import { Card, Button, Container, Row, Col } from 'reactstrap';

export default function HomeLayout() {
  const { logout } = useContext(AuthContext);
  return (
    <Container>
      <Row>
        <Col className='d-flex justify-content-end mt-2'>
          <Button size='sm' onClick={() => logout()}>
            Logout
          </Button>
        </Col>
      </Row>
      <Row className='h-100'>
        <Col className='d-flex align-items-center justify-content-center'>
          <p className='text-center'>Logado com sucesso</p>
        </Col>
      </Row>
    </Container>
  );
}
