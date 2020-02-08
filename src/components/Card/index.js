import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Spinner
} from 'reactstrap';
import './style.css';

const Cards = (props) => {

  return (

    <Card>
      <CardImg src={props.article.urlToImage} alt={props.article.title} />
      <CardBody>
        <CardTitle><a href={props.article.url} target='_blank' rel='noopener noreferrer'><h1>{props.article.title}</h1></a></CardTitle>
        <CardSubtitle><h3>By: {props.article.author}</h3></CardSubtitle>
        <CardText dangerouslySetInnerHTML={{ __html: props.article.content }} />
        <a href={props.article.url} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Read More</a>
      </CardBody>
    </Card>
  )
}

export default Cards;
