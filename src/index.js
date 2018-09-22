import React, { Component } from "react";
import ReactDOM from "react-dom";
import GoogleImages from "google-images";
import { CSE_ID, API_KEY } from './js/constants/config';

class ScenicSpots extends Component {
  componentDidMount(){
    const client = new GoogleImages(CSE_ID, API_KEY);
    client.search('林口酒廠');
  }
  render() {
    return (
      <div>Hello World</div>
    );
  }
}

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<ScenicSpots />, wrapper) : false;