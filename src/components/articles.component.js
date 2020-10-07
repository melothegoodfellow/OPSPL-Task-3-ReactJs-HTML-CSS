import React from "react";

import { List } from 'antd';

import Article from "../components/article.component";

function Articles({ articles, pageSize, displayFavorite, loading }) {

  return (
    <div className="articles">
      <List
        loading={loading}
        dataSource={articles}
        pagination={{
          onChange: page => {
            console.log(page);
          },
          pageSize: pageSize,
        }}
        renderItem={article => (
          <List.Item>
            <Article 
              author={article.author}
              title={article.title}
              description={article.description}
              content={article.content}
              urlToImage={article.urlToImage}
              publishedAt={article.publishedAt}
              displayFavorite={displayFavorite}
              />
          </List.Item>)
        }
        >
      </List>
    </div>
  );
}

export default Articles;