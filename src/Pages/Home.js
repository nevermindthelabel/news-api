import React, { useState, UseEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import API from '../util';
import Cards from '../components/Card';

const Home = () => {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  // useEffect(() => {
  //   fetch(`https://newsapi.org/v2/top-headlines?country=us&category=health&apiKey=${API}`).then(response => response.json()).then(data => setArticles(data.articles).then(setIsLoaded(true)))
  // })
  return (
    <Container className='main'>
      <Row>
        <Col>
          <h1>Welcome Home</h1>
        </Col>
      </Row>
      <Row>
        <Col>
          <Cards />
        </Col>
      </Row>
    </Container>

  )
}

export default Home;
