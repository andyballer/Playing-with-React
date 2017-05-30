import React, { Component } from 'react';
import { Link } from 'react-router';

/*
Takes an image from PicList and turns it into a clickable link

*/

class ImageLink extends Component{

	render(){
		return (
			<Link to={"/BigViewPage/?url=" + this.props.url}>
				<img src={this.props.url} />
			</Link>				
			);
	}
}

export default ImageLink;