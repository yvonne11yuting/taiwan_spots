import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { getSpots } from '../../actions/index';
import ScenicSpotsEach from '../presentational/scenic_spots_each';

class ScenicSpots extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    this.props.getSpots();
  }

  renderSpots(spots) {
    return spots.map(spot => <ScenicSpotsEach key={spot.Id} spot={spot}/>);
  }

  render() {
    return (
      <div>
        {this.renderSpots(this.props.filterResult || this.props.all)}
      </div>
    );
  }
}

function mapStateToProps({ spots }) {
  let { all, filterResult } = spots;
  return { all, filterResult };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ getSpots }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScenicSpots);