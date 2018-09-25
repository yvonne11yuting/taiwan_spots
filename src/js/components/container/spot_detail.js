import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import _ from 'lodash';
import GoogleImages from "google-images";

import { CSE_ID, API_KEY } from '../../constants/config';
import SpotDetailContent from '../presentational/spot_detail_content';
class SpotDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {},
      images: []
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const detail = this.props.all.filter(spot => spot.Id === id)[0];
    const client = new GoogleImages(CSE_ID, API_KEY);

    this.setState({ detail });
    if(detail) {
      client.search(detail.Name).then(res => {
        let images = res.map(item => ({ thumbnail: item.thumbnail.url, image: item.url}))
        this.setState({ images });
      });
    }
  }

  render() {
    return (
      <div>
        {/* <Link to="/">返回</Link> */}
        {
          _.isEmpty(this.props.all) ?
          <Redirect to="/"/> :
          <SpotDetailContent detail={this.state.detail} images={this.state.images}/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({spots:{all}}) => {
  return { all }
}

export default connect(mapStateToProps)(SpotDetail);