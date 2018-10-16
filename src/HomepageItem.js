import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class HomepageItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: false
    }
  }

  printInfo() {
    console.log("inside printInfo")
    return (
      <div>
        <p>id:{this.props.giffObj.id}<br /></p>
        <p>username:{this.props.giffObj.username}<br /></p>
        <p>title:{this.props.giffObj.title}<br /></p>
        <p>rating:{this.props.giffObj.rating}<br /></p>
      </div>
    )
  }

  showGifInfo(e) {
    e.preventDefault();
    if (!this.state.info) {
      return this.printInfo();
      this.setState({info: true})
      console.log("info true")

    } else {
      this.setState({info: false})
      console.log("info false")

    }
    console.log("inside showGifInfo", this.props.giffObj.rating);
  }

  render() {
    if (!this.props.giffObj) {
      return <div></div>
    }
      return (
              <div>
                <div>
                {console.log("this is HomepageItem", this.props.giffObj)}
                <a href="#" onClick={(e) => this.showGifInfo(e)}>
                  <img src={this.props.giffObj.images.original.url} height="200" width="300"/>
                </a>
                </div>
              </div>
        );
  }
};

export default HomepageItem;
