import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchForm = ({ handleChange, handleSubmit }) => {

  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label for='Enter a search term'>Search for the latest news</Label>
        <Input type='text' onChange={handleChange} placeholder='Search by news Topic' />
      </FormGroup>
      <Button>Submit</Button>
    </Form>
  )
}

export default SearchForm;
