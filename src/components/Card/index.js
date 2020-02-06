import React, { Fragment, useState, useEffect } from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Spinner
} from 'reactstrap';
import axios from 'axios';
import API from '../../util';
import './style.css';

const Cards = () => {
  const [articles, setArticles] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=7a915ef2180a43f2844db9159852e4ec`).then(data => {
      setArticles(data.data.articles); setIsLoaded(true)
    })
  })
  return (
    <Fragment>
      {!isLoaded ? <Spinner style={{ width: '3rem', height: '3rem', margin: 'auto' }} /> : articles.map(article => <Card>
        <CardImg src={article.urlToImage} alt={article.title} />
        <CardBody>
          <CardTitle><a href={article.url} target='_blank' rel='noopener noreferrer'><h1>{article.title}</h1></a></CardTitle>
          <CardSubtitle><h3>By: {article.author}</h3></CardSubtitle>
          <CardText dangerouslySetInnerHTML={{__html: article.content}} />
          <a href={article.url} className='btn btn-primary' target='_blank' rel='noopener noreferrer'>Read More</a>
        </CardBody>
      </Card>)}
    </Fragment>
  )
}

export default Cards;
