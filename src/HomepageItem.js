import React, { Component } from 'react';
import './App.css';

class HomepageItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      info: false
    }
  }

  printInfo() {
    return (
      <div className="giffInfo">
        <p>Id: {this.props.giffObj.id}<br /></p>
        <p>Username: {this.props.giffObj.username}<br /></p>
        <p>Title: {this.props.giffObj.title}<br /></p>
        <p>Rating: {this.props.giffObj.rating}<br /></p>
      </div>
    )
  }

  showGifInfo(e) {
    e.preventDefault();
    if (!this.state.info) {
      this.setState({info: true})
    }
    else {
      this.setState({info: false})
    }
  }

  render() {
    if (!this.props.giffObj) {
      return <div></div>
    }

    return (
            <div>
              <div>
                <img onClick={(e) => this.showGifInfo(e)} src={this.props.giffObj.images.original.url} alt="single giff" className="singleGiff"/>
                {this.state.info ? this.printInfo() : ''}
              </div>
            </div>
      );
  }
};

export default HomepageItem;
