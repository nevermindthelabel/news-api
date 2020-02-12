import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label } from 'reactstrap';
import Form from '../components/Form';
import API from '../util';
import axios from 'axios';
import Card from '../components/Card';
import HeroImage from '../components/HeroImage';
import Image from '../images/banner.png';

const Search = () => {
  const [searchTerm, setSearchTerm] = useState();
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [dropdownValue, setDropdownValue] = useState();
  const [articles, setArticles] = useState([]);

  const toggle = () => setDropdownOpen(prevState => !prevState)

  const handleSubmit = e => {
    e.preventDefault();
    if (!searchTerm) return;
    setSearchTerm('');
    axios.get(`https://newsapi.org/v2/top-headlines?country=${dropdownValue}&category=${searchTerm}&apiKey=${API}`).then(data => setArticles(data.data.articles));
  }

  const handleChange = e => {
    setSearchTerm(e.target.value)
  }

  const handleDropdownClick = e => {
    setDropdownValue(e.target.value)
  }

  return (
    <>
      <HeroImage image={Image} title={'Search'}/>
      <Container className='main'>
        <Row>
          <Col>
            <h1>Search</h1>
          </Col>
        </Row>
        <Row>
          <Col md="6">
            <Form handleSubmit={handleSubmit} handleChange={handleChange} />
          </Col>
          <Col md="6">
            <Label>Select Country</Label>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret >
                Country
        </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={handleDropdownClick} value={'ae'}>United Arab Emirates</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'au'}>Australia</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'ca'}>Canada</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'cn'}>China</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'de'}>Germany</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'fr'}>France</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'gb'}>Great Britain</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'hk'}>Hong Kong</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'in'}>India</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'il'}>Israel</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'jp'}>Japan</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'mx'}>Mexico</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'us'}>United States</DropdownItem>
              </DropdownMenu>
            </Dropdown>
          </Col>
        </Row>
        <Row>
          {articles.map((article, index) =>
            <Card key={index} article={article} />)}
        </Row>
      </Container>
    </>
  )
}

export default Search;
