import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

const SearchForm = (props) => {

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
