import React, { Component } from 'react';
import { Redirect } from "react-router-dom";
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

  componentDidUpdate() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  }

  render(){
    return (
      <div className="spot-detail">
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