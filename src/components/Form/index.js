import React, { useState } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import axios from 'axios';
// import API from '../../util';

const SearchForm = (props) => {
  // const [searchTerm, setSearchTerm] = useState('');

  // const handleSubmit = e => {
  //   e.preventDefault();
  //   if (!searchTerm) return;
  //   setSearchTerm('');
  //   axios.get(`https://newsapi.org/v2/top-headlines?country=us&category=${searchTerm}&apiKey=${API}`).then(data => console.log(data.data.articles))
  // }

  // const handleChange = e => {
  //   setSearchTerm(e.target.value)
  // }

  return (
    <Form onSubmit={props.handleSubmit}>
      <FormGroup>
        <Label for='Enter a search term'>Search for the latest news</Label>
        <Input type='text' onChange={props.handleChange} placeholder='Search by news Topic' />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default SearchForm;
