import React, { Component } from 'react';
import $ from 'jquery';
import HomepageItem from './HomepageItem.js';

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchInput: "medical marijuana",
      isDone: false
    }
    this.onSearch = this.onSearch.bind(this);
    this.showSearch = this.showSearch.bind(this);
  }

  componentDidMountNew() {
    let url = "http://api.giphy.com/v1/gifs/search?q=" + this.state.searchInput + "&api_key=Q8Pm82z06A50nknC7mFIAUf5w6bsUuaA&limit=3"
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
      return  <HomepageItem
              key={idx}
              giffObj={giffObj} />
    })
  }

  onSearch() {
    console.log("inside onSearch")
    let searchInput = $( "#searchInput" ).val();
    this.setState({searchInput: searchInput})
  }

  showSearch() {
    console.log("inside showSearch");
    return <div>
            <input id="searchInput" type="text" placeholder="search for giffs"></input>
            <button type="button" onClick={() => this.onSearch()}>search</button>
           </div>
  }

  render() {
    if (!this.state.isDone) {
      this.componentDidMountNew()
    }
    if (!this.state.data) {
      return <div><h1>Loading ...</h1></div>
    }
    return (
      <div>
      <HomepageItem />
        {this.showSearch()}
        {this.showAllGiffs()}
      </div>

    );
  }
};

export default Homepage;
