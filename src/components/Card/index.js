import React, { Fragment, useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import axios from 'axios';
import API from '../../util';
import './style.css';

const Cards = () => {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${API}`).then(data => {
      setArticles(data.data.articles); setIsLoaded(true)
    })
  })
  return (
    <Fragment>
      {!isLoaded ? <h1>spinning</h1> : articles.map(article => <Card>
        <CardImg src={article.urlToImage} alt={article.title} />
        <CardBody>
          <CardTitle><a href={article.url}><h1>{article.title}</h1></a></CardTitle>
          <CardSubtitle><h3>By: {article.author}</h3></CardSubtitle>
          <CardText dangerouslySetInnerHTML={{__html: article.content}} />
          <Button>Read More</Button>
        </CardBody>
      </Card>)}
    </Fragment>
  )
}

export default Cards;
