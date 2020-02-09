import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Form from '../components/Form';
import API from '../util';
import axios from 'axios';
import Card from '../components/Card';
import HeroImage from '../components/HeroImage';
import Image from '../images/banner.png';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [articles, setArticles] = useState([]);

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchTerm) return;
    setSearchTerm('');
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${searchTerm}&apiKey=${API}`).then(data => setArticles(data.data.articles));
  }

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  return (
    <>
      <HeroImage image={Image} />
      <Container className='main'>
        <Row>
          <Col>
            <h1>Search</h1>
          </Col>
        </Row>
        <Form handleSubmit={handleSubmit} handleChange={handleChange} />
        <Row>
          {articles.map((article, index) =>
            <Card key={index} article={article} />)}
        </Row>
      </Container>
    </>
  )
}

export default Search;
