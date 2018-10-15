import React, { Component } from 'react';
import $ from 'jquery';

class DisplayGif extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchInput: "medical marijuana",
      isDone: false
    }
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMountNew() {
    console.log('inside componentDidMountNew', this.state)
    let url = "http://api.giphy.com/v1/gifs/search?q=" + this.state.searchInput + "&api_key=Q8Pm82z06A50nknC7mFIAUf5w6bsUuaA&limit=100"
    let xhr = $.get(url);
    xhr.done(function(response) {
      return response.data;
    }).then((data) => {
      this.setState({data: data.data, isDone: true})
    }).catch((err) => {
      console.log("error inside catch", err);
    })
  }

  showAllGiffs() {
    console.log("inside showAllGiffs", this.state.data);
    return this.state.data.map((giffObj, idx)=>{
      console.log(giffObj);

      return <div key={idx}>
                <a href="">
                <img src={giffObj.images.original.url} height="200" width="300"/>
                </a>
             </div>
    })
  }

  onSearch() {
    let searchInput = $( "#searchInput" ).val();
    this.setState({searchInput: searchInput})
  }

  showSearch() {
    console.log("inside showSearch");
  }

  render() {
    if (!this.state.searchInput) {
      return <div>
              <input id="searchInput" type="text" placeholder="search for giffs"></input>
              <button type="button" onClick={() => this.onSearch()}>search</button>
             </div>
    }
    if (!this.state.isDone) {
      this.componentDidMountNew()
    }
    // {this.componentDidMountNew()}
    if (!this.state.data) {
      return <div><h1>Loading ...</h1></div>
    }
    {console.log('gifffss',this.state.data)}
    return (
      <div>
        {this.showSearch()}
        {this.showAllGiffs()}
      </div>

    );
  }
};

export default DisplayGif;
