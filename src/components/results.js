import React, { Component } from "react";
import Logo from "./logo";
import SearchBar from "./search-bar";
class Results extends Component {
	handleSearchBarSubmit(query) {}

	render() {
		return (
			<div>
				<h1>Results</h1>
				<Logo size={55} />
				<SearchBar
					onSubmit={(query) => this.handleSearchBarSubmit(query)}
				/>
			</div>
		);
	}
}
export default Results;
