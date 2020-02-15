import React, { useState } from 'react';
import { Container, Row, Col, Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Label } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGlobeAmericas } from '@fortawesome/free-solid-svg-icons';
import Form from '../components/Form';
import { API, countriesToSearchFrom } from '../util';
import axios from 'axios';
import Card from '../components/Card';
import HeroImage from '../components/HeroImage';
import Wrapper from '../components/Wrapper';
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
      <HeroImage image={Image} title={'Search'} />
      <Container className='main'>
        <Row className="search-intro">
          <Col md="4">
            <p>Here you can search by country and topic.</p>
            <p>Available countries include:</p>
            <ul className="fa-ul">
              {countriesToSearchFrom.map(country => (<li><FontAwesomeIcon icon={faGlobeAmericas} style={{ marginRight: '.4em' }} />{country}</li>))}
            </ul>
          </Col>
          <Col md="4">
            <Form handleSubmit={handleSubmit} handleChange={handleChange} />
          </Col>
          <Col md="4">
            <Label>Select Country</Label>
            <Dropdown isOpen={dropdownOpen} toggle={toggle}>
              <DropdownToggle caret >
                Country
        </DropdownToggle>
              <DropdownMenu>
                <DropdownItem onClick={handleDropdownClick} value={'ae'}>United Arab Emirates</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'au'}>Australia</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'ca'}>Canada</DropdownItem>
                <DropdownItem onClick={handleDropdownClick} value={'cn'}>Chinac</DropdownItem>
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
          <Wrapper>
            {articles.map((article, index) =>
              <Card key={index} article={article} />)}
          </Wrapper>
        </Row>
      </Container>
    </>
  )
}

export default Search;
