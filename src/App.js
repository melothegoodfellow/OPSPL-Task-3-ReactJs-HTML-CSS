import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import 'antd/dist/antd.css';

import { Input, DatePicker, Button, Tooltip, List } from 'antd';
import { SearchOutlined } from '@ant-design/icons'
import axios from "axios";

import dotenv from "dotenv";

import Article from "./components/Article.component";
dotenv.config();

function App() {

  const { RangePicker } = DatePicker;
  const pageSize = 5;

  const [ searchText, setSearchText ] = useState();
  const [ articles, setArticles ] = useState([]);

  const getNews = async () => {
    const response = await axios.get(
      "http://newsapi.org/v2/everything?q="+searchText
      +"&from=2020-09-26&apiKey=452b0dca80764e8f9898f80dfc4015be&sortBy=publishedAt"
      );
    setArticles(response.data.articles);
  }

  return (
    <div className="App">
      <Input 
        placeholder="Enter subject" 
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)} />
      <RangePicker />
      <Tooltip title="search">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<SearchOutlined />} 
          onClick={ getNews }/>
      </Tooltip>
      <List
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
              />
          </List.Item>)
      }
      >
      </List>
    </div>
  );
}

export default App;
