import React, { Component } from 'react';
import { Link, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import _ from 'lodash';

import SpotDetailContent from '../presentational/spot_detail_content';
class SpotDetail extends Component {
  constructor(props) {
    super(props);
    this.state = {
      detail: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const detail = this.props.all.filter(spot => spot.id === id)[0];

    this.setState({ detail });
  }

  render(){
    return (
      <div className="spot-detail">
        <Link to="/" className="btn-back">返回</Link>
        {
          _.isEmpty(this.props.all) ?
          <Redirect to="/"/> :
          <SpotDetailContent detail={this.state.detail}/>
        }
      </div>
    );
  }
}

const mapStateToProps = ({spots:{all}}) => {
  return { all }
}

export default connect(mapStateToProps)(SpotDetail);