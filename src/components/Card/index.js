import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Spinner
} from 'reactstrap';
import './style.css';

const Cards = ({ article }) => {

  return (

    <Card>
      <CardImg src={article.urlToImage} alt={article.title} />
      <CardBody>
        <CardTitle><a href={article.url} target='_blank' rel='noopener noreferrer'><h1>{article.title}</h1></a></CardTitle>
        <CardSubtitle><h3>By: {article.author}</h3></CardSubtitle>
        <CardText dangerouslySetInnerHTML={{ __html: article.content }} />
        <a href={article.url} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Read More</a>
      </CardBody>
    </Card>
  )
}

export default Cards;
