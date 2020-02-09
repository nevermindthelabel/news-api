import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeroImage from '../components/HeroImage';
import Cards from '../components/Card';
import axios from 'axios';
import API from '../util';

const Home = () => {

  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`).then(data => {
      setArticles(data.data.articles); setIsLoaded(true)
    })
  })

  return (
    <>
      <HeroImage />
      <Container className='main'>
        <Row>
          <Col>
            <h1>Top News</h1>
          </Col>
        </Row>
        <Row>{!isLoaded ? <div className='loader'></div> : articles.map((article, index) => (
          <Cards key={index} article={article} />
        ))
        }
        </Row>
      </Container>
    </>
  )
}

export default Home;
