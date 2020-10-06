import React from "react";

import { List } from "antd";

function Article(article) {
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
					By {article.author}
				</p>
				<p>
					{article.description}
		        </p>
		        <p>
		        	{article.content}
		        </p>
		        <p>
		        	Date: {article.publishedAt}
		        </p>
	        </div>
		</div>
	);
}

export default Article;