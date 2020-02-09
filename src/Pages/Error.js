import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from '../images/banner.png';
import HeroImage from '../components/HeroImage'

const Error = () => {
  return (
    <>
      <HeroImage image={Image} />
      <Container className='main'>
        <Row>
          <Col>
            <h1>
              Error
          </h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Error;
