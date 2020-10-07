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

function Article({
		urlToImage,
		title,
		author,
		description,
		content,
		publishedAt,
		displayFavorite
	}) {
	
	const markFavorite = (article) => {
		let favorites = getLocalStorage("favorites") || [];
		let checkArticle = favorites.find((favorite) => 
			favorite.urlToImage === article.urlToImage
		);
		if(!checkArticle) {
			favorites.push(article);
			setLocalStorage("favorites", favorites);
		}
	}

	return (
		<div className="article">
			<div className="image">
			<img
              width="200px"
              height="200px"
              alt="image"
              src={urlToImage}
            />
            </div>
            <div className="details">
				<h1>
					{title}
				</h1>
				<p>
					By { author ? author : "Anonymous"}
				</p>
				<p>
					{description}
		        </p>
		        <p>
		        	{content}
		        </p>
		        <p>
		        	Published: { moment(publishedAt).calendar(publishedAt) }
		        </p>
	        </div>
	        {
	        	displayFavorite &&
		        <Tooltip title="mark as favorite">
			       <Button 
			          type="primary" 
			          shape="circle" 
			          icon={<HeartOutlined />} 
			          onClick={ () => markFavorite({
						urlToImage,
						title,
						author,
						description,
						content,
						publishedAt
					}) }/>
			    </Tooltip>
	        }
		</div>
	);
}

export default Article;