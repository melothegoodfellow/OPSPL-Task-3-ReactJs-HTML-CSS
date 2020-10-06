import React from "react";
import moment from "moment"

import { List, Button, Tooltip } from 'antd';
import {
  HeartOutlined
} from '@ant-design/icons';

import {
	setLocalStorage,
	getLocalStorage
} from "../lib/localStorage.library";

function Article(article) {

	const markFavorite = (article) => {
		let favorites = getLocalStorage("favorites") || [];
		favorites.push(article);
		setLocalStorage("favorites", favorites);
	}

	return (
		<div className="article">
			<div className="image">
			<img
              width="200px"
              height="200px"
              alt="image"
              src={article.urlToImage}
            />
            </div>
            <div className="details">
				<h1>
					{article.title}
				</h1>
				<p>
					By { article.author ? article.author : "Anonymous"}
				</p>
				<p>
					{article.description}
		        </p>
		        <p>
		        	{article.content}
		        </p>
		        <p>
		        	Published: { moment(article.publishedAt).calendar(article.publishedAt) }
		        </p>
	        </div>
	        <Tooltip title="search">
		       <Button 
		          type="primary" 
		          shape="circle" 
		          icon={<HeartOutlined />} 
		          onClick={ markFavorite }/>
		     </Tooltip>
		</div>
	);
}

export default Article;