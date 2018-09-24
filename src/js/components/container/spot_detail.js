import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import _ from 'lodash';
import GoogleImages from "google-images";

import { CSE_ID, API_KEY } from '../../constants/config';
class SpotDetail extends Component {
  constructor() {
    super();
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
    client.search(detail.Name).then(images => {
      console.log(images)
      this.setState({ images });
    });
  }

  showDetail(detail) {
    return (
      <div>
        <h3>{detail.Name}</h3>
        <div>{this.state.images.map(({thumbnail}, i) => (
          <img key={i} src={thumbnail.url} width={thumbnail.width} height={thumbnail.height} alt={detail.Name}/>))}
        </div>
      </div>
    )
  }

  render() {
    return (
      <div>
        <Link to="/">返回</Link>
        {
          !_.isEmpty(this.state.detail) ?
          this.showDetail(this.state.detail)
          :
          <div>目前一定要先去首頁過水要資料，待處理</div>
        }
      </div>
    );
  }
}

const mapStateToProps = ({spots:{all}}) => {
  return { all }
}

export default connect(mapStateToProps)(SpotDetail);