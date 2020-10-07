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
  const pageSize = 5;
  var loading = false;

  const getNews = async () => {
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
      <Input 
        placeholder="Enter subject" 
        value={searchText}
        onChange={(event) => setSearchText(event.target.value)} />
      <RangePicker
        onChange={ (date, dateString) => {
          setFromDate(dateString[0]);
          setToDate(dateString[1]);
        }
      }
      />
      <Tooltip title="search">
        <Button 
          type="primary" 
          shape="circle" 
          icon={<SearchOutlined />} 
          onClick={ getNews }/>
      </Tooltip>
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