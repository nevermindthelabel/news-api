import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeroImage from '../components/HeroImage';
import Image from '../images/banner.png';

const About = () => {
  return (
    <>
      <HeroImage image={Image} />
      <Container className='main'>
        <Row>
          <Col>
            <h1 className='mt-3 mb-3'>About</h1>
          </Col>
        </Row>
        <Row>
          <Col>
            <p>This project was created with Create React App and the News API. Currently, it pulls in the top news stories from the US and displays them on the home page, taking advantage of the News API's robust API. </p>
            <p>Future planned updates include creating a seperate search page where someone can search for news on a particular topic, or news by country. The News API allows you to filter the data by topic, country, or search timeframe.</p>
          </Col>
        </Row>
      </Container>
    </>
  )
}

export default About;
