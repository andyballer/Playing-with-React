import React, { Component } from 'react';
import ImageLink from './ImageLink.jsx';

/*
Takes a list of pictures created in App and turns the pictures in the list into MakeLink components

*/

class PicList extends Component {
		
	render() {
		return (
			<div>
				{this.props.urlList.map(elem => {
					return (
							<ImageLink url={elem.url} key={elem.id} />
							);
				})}
			</div>
		);
	}

	
}

PicList.propTypes = {
	urlList: React.PropTypes.array.isRequired
};

export default PicList;