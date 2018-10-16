import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const HomepageItem = props => {
  if (!props.giffObj) {
    return <div></div>
  }
    return (
            <div>
              <div>
              {console.log("this is HomepageItem", props.giffObj)}
              <img src={props.giffObj.images.original.url} height="200" width="300"/>
              </div>
            </div>
      );
};

export default HomepageItem;
