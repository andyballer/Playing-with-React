import React, { Component } from 'react';

/*
Creates a search bar component where the user can type a query and returns the most recent flickr images that correspond to the query

*/

class SearchBar extends Component{

  handleChange(e){
    this.props.getResult(e.target.value);
  }

  render() {
    return (
      <input type="text" placeholder="search" 
      onChange={this.handleChange.bind(this)} /> 
    );
  }
}

//this ensures that the functions exists, built into react
SearchBar.propTypes = {
	getResult: React.PropTypes.func.isRequired
};

export default SearchBar;
