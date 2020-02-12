import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import Image from '../images/banner.png';
import HeroImage from '../components/HeroImage'

const Error = (props) => {
  return (
    <>
      <HeroImage image={Image} title={'404'} />
      <Container className='main'>
        <Row>
          <Col>
            <h1>
              Error {props.location.pathname} doesn't exist.
              Go to your <a href="/">Home</a> here.
          </h1>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default Error;
