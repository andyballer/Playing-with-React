import React, { Component } from 'react';

/*
Alters the url of the image that is clicked on so that it can appear much larger in a separate view

*/

class BigViewPage extends Component{


	render(){
		console.log(this.props.location.query.url);
		var url = this.props.location.query.url;
		var index = url.length - 5;
		url = url.substr(0, index) + 'h' + url.substr(index+1, url.length)
		return (
			<div>
				<img src={url} />
			</div>
		);
	}
}

export default BigViewPage;