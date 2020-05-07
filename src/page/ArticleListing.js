import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useRouteMatch, Switch, Route } from "react-router-dom";
import Article from "./Article";

const ArticleListing = () => {
  let match = useRouteMatch();
  const [isLoading, setIsLoading] = useState(false);
  const [articleList, setArticleList] = useState([]);
  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const res = await axios.get(
        "https://5eb2bd4d974fee0016eccd98.mockapi.io/rr/articles"
      );
      const dati = await res.data;
      setArticleList(dati);
      setIsLoading(false);
    }
    getData();
  }, []);
  return (
    <>
      <h1>A R T I C L E L I S T I N G</h1>
      {isLoading && "CARICAMENTO"}
      {articleList && (
        <>
          {articleList.map((item) => (
            <Link key={item.id} to={`${match.url}/${item.id}`}>
              <div key={item.id}>
                <img src={item.photo} alt="" style={{ width: 50 }} />
                {item.title}
              </div>
            </Link>
          ))}
          <Switch>
            {articleList.map((item) => (
              <Route key={item.id} path={`${match.path}/:articleId`}>
                <Article />
              </Route>
            ))}
          </Switch>
        </>
      )}
    </>
  );
};

export default ArticleListing;
