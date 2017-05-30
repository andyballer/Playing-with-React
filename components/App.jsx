import React, { Component } from 'react';
import SearchBar from './SearchBar.jsx';
import PicList from './PicList.jsx';

/*
Runs the application. Responsible for updating the state of the photos from the flickr api to as the search query changes. 
Also takes the photos from flickr and alters the url into something useful that we can use to show them on our webpage. 

*/

class App extends Component {
  //sets up an instance of this component
  constructor(props) {
    super(props);

//intializes the state of our App that will update an array of image locations from Flickr and a query
    this.state = {
      query: '',
      urlList: []
    };

//binds the result of the flickr API images to the page
    this.getResult = this.getResult.bind(this);
  }

/**
 Makes use of the flickr API to get images in a useful way
 **/
  getResult(keyword) {
    var url = "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=dc106e75308d3f2abfa4670af6a4f2c3&format=json&per_page=10&text="+ keyword;
    console.log(url);

    var urlList = [];

    //covert the url into xml that we can then process into pieces and insert them into the flickr API so we can get their images
    var request = new XMLHttpRequest();
    request.open('GET', url);

    //function takes necessary info from url to put images into an array
    request.onload = function(e){

      console.log(e);

      //this is where the xml of the photo lives
      var photoText = e.target.response.substring(14, (e.target.response.length -1)); 
      //make an array of photos with their url
      var photos = JSON.parse(photoText).photos.photo;

      //for every photo in our array, use the flickr api to actually return a photo on my page
      for(var a = 0; a < photos.length; a++){
        var imageSize = "t";
        //Flickr API format
        var url = "https://farm" + photos[a].farm  + ".staticflickr.com/" + photos[a].server + "/" + photos[a].id + "_" + photos[a].secret + "_" + imageSize + ".jpg";
  
        //update our image array
        urlList.push({
          url: url,
          id: photos[a].id,
          size: 't'
        });
      }

      //update our state to the current array 
      this.setState({
        urlList
      });
    }.bind(this);
    request.send();
  }

  //react function to return our code. Babel and JSX allows us to include html and other react components, so long as they are 
  //contained within a single div 
  render() {
    return (
      <div>
        <h1> Flickr Pictures </h1>
        <SearchBar getResult={this.getResult} />
        <PicList urlList={this.state.urlList} />
      </div>
    );
  }
}

export default App;


// have a App component that renders Search bar and list of pictures

