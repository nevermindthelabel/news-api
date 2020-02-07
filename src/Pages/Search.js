import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Form from '../components/Form';
import API from '../util';
import axios from 'axios';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();

  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${searchTerm}&apiKey=${API}`).then(data => {
      console.log(`${data.data.articles}`)
    })
  }, [searchTerm])

  return (
    <Container className='main'>
      <Row>
        <Col>
          <h1>Search</h1>
        </Col>
      </Row>
      <Form searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
    </Container>
  )

}

export default Search;
