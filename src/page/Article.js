import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const Article = (props) => {
  let { articleId } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [article, setArticle] = useState({});
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await axios.get(
        `https://5eb2bd4d974fee0016eccd98.mockapi.io/rr/articles/${articleId}`
      );
      const dati = await res.data;
      // console.log(dati);
      setArticle(dati);
      setIsLoading(false);
    }
    getData();
  }, [articleId]);
  // console.log(articleId);
  return (
    <>
      <h1>{articleId} id</h1>
      <p>{article.createdAt}</p>
      <img src={article.photo} />
      <h1>{article.title}</h1>
    </>
  );
};

export default Article;
