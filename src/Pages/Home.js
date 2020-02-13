import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import HeroImage from '../components/HeroImage';
import Spinner from '../components/Spinner';
import Cards from '../components/Card';
import Wrapper from '../components/Wrapper';
import Image from '../images/heroimage.jpg'
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
      <HeroImage image={Image} title={'News API'} />
      <Container className='main'>
        <Row>
          <Col>
            <h1>Top News</h1>
          </Col>
        </Row>
        <Row>
          <Wrapper>
          {!isLoaded ? <Spinner /> : articles.map((article, index) => (
          <Cards key={index} article={article} />
        ))
        }
          </Wrapper>
        </Row>
      </Container>
    </>
  )
}

export default Home;
