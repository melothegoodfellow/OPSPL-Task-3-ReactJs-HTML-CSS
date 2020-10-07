import React from "react";

import Articles from "../components/articles.component";
import {
	getLocalStorage
} from "../lib/localStorage.library";

function FavoritePage() {

	const pageSize = 5;
	const favorites = getLocalStorage("favorites");

	return (
		<div className="favorite">
			<Articles 
		      articles={favorites}
		      pageSize={pageSize}
		      displayFavorite={false}
		    />
		</div>
	);
}

export default FavoritePage;