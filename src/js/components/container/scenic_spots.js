import React, { Component } from 'react';
import { connect } from 'react-redux';

import ScenicSpotsEach from '../presentational/scenic_spots_each';

class ScenicSpots extends Component {
  renderSpots(spots) {
    return spots.map(spot => <ScenicSpotsEach key={spot.id} spot={spot}/>);
  }

  render() {
    return (
      <div className="spot-container">
        {this.renderSpots(this.props.filterResult || this.props.all)}
      </div>
    );
  }
}

function mapStateToProps({ spots }) {
  let { all, filterResult } = spots;
  return { all, filterResult };
}

export default connect(mapStateToProps)(ScenicSpots);