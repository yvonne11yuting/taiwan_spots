import React, { Component } from "react";
import ReactDOM from "react-dom";
import GoogleImages from "google-images";
import { CSE_ID, API_KEY } from '../../constants/config';

class FormContainer extends Component {
  componentDidMount(){
    const client = new GoogleImages(CSE_ID, API_KEY);
    client.search('林口酒廠');
    console.log(CSE_ID, API_KEY);
  }
  render() {
    return (
      <div>Hello World</div>
    );
  }
}
export default FormContainer;

const wrapper = document.getElementById("app");
wrapper ? ReactDOM.render(<FormContainer />, wrapper) : false;