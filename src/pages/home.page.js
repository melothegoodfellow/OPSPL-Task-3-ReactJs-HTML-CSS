import React, { useState } from "react";
import axios from "axios";

import { Input, DatePicker, Button, Tooltip, List } from 'antd';
import { SearchOutlined } from '@ant-design/icons'

import Articles from "../components/articles.component";

function HomePage() {

  const [ searchText, setSearchText ] = useState();
  const [ fromDate, setFromDate ] = useState();
  const [ toDate, setToDate ] = useState();
  const [ articles, setArticles ] = useState([]);
  const { RangePicker } = DatePicker;
  const { Search } = Input;
  const pageSize = 5;
  var loading = false;

  const getNews = async (searchText) => {
    loading = true;
    const response = await axios.get(
      "http://newsapi.org/v2/everything?q="+searchText
      +"&from="+fromDate+"&to="+toDate+"&apiKey=452b0dca80764e8f9898f80dfc4015be&sortBy=publishedAt"
      );
    setArticles(response.data.articles);
    loading = false;
  }

  return (
    <div className="home">
      <div className="range">
        <h3>
          Please choose date range
        </h3>
        <div className="range-picker">
          <RangePicker
              onChange={ (date, dateString) => {
                setFromDate(dateString[0]);
                setToDate(dateString[1]);
              }
            }
          />
        </div>
      </div>{
        fromDate && toDate && 
        <div className="search-box">
          <Search
            placeholder="Enter subject" 
            value={searchText}
            style={{ width: 200 }}
            onSearch={searchText => {
              console.log(searchText);
              getNews(searchText);
            }} />
        </div>
      }
      <Articles 
        articles={articles}
        pageSize={pageSize}
        displayFavorite={true}
        loading={loading}
      />
    </div>
  );
}


export default HomePage;