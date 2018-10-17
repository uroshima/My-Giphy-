import React, { Component } from 'react';
import $ from 'jquery';
import HomepageItem from './HomepageItem.js';
import { API_KEY } from './constants.js'

class Homepage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
      searchInput: "beautiful day",
      isDone: false,
      limit: 20
    }
    this.onSearch = this.onSearch.bind(this);
    this.showSearch = this.showSearch.bind(this);
  }

  loadData() {
    let url = "http://api.giphy.com/v1/gifs/search?q=" + this.state.searchInput + "&api_key=" + API_KEY + "&limit=" +  this.state.limit
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
    return this.state.data.map((giffObj, idx)=>{
      return  <HomepageItem
              key={idx}
              giffObj={giffObj} />
    })
  }

  onSearch() {
    let searchInput = $( "#searchInput" ).val();
    this.setState({searchInput: searchInput, isDone: false})
  }

  showSearch() {
    // return <div>
    //         <input id="search-input" type="text" placeholder="Search GIFs"></input>
    //         <button type="button" onClick={() => this.onSearch()} className="btn btn-outline-dark">GO</button>
    //        </div>
    return (
      <div className="input-group mb-3">
        <div className="input-group-prepend">
          <span className="input-group-text" id="inputGroup-sizing-default" >Trending GIFs</span>
        </div>
        <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" placeholder="Search All the GIFs and Stickers" />
      </div>

    )

  }

  render() {
    let limit = this.state.limit;
    let that = this;

    $(window).scroll(function() {
       if($(window).scrollTop() + $(window).height() === $(document).height()) {
           that.setState({limit: limit + 20, isDone: false})
       }
    });

    if (!this.state.isDone) {
      this.loadData()
    }
    if (!this.state.data) {
      return <div><h1>Loading ...</h1></div>
    }

    return (
      <div>
          {this.showSearch()}
        <div>
          <HomepageItem />
        </div>
          {this.showAllGiffs()}
      </div>

    );
  }
};

export default Homepage;
