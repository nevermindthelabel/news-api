import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Cards from '../components/Card';

const Home = () => {

  return (
    <Container className='main'>
      <Row>
        <Col>
          <h1>Top News</h1>
        </Col>
      </Row>
      <Row>
        <Cards />
      </Row>
    </Container>

  )
}

export default Home;
