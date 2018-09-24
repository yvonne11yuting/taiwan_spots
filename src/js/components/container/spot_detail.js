import React, { Component } from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';

class SpotDetail extends Component {
  constructor() {
    super();
    this.state = {
      detail: {}
    }
  }

  componentDidMount() {
    const { id } = this.props.match.params;
    const detail = this.props.allSpots.filter(spot => spot.Id === id)[0];
    this.setState({ detail });

  }
  render() {
    let { Name } = this.state.detail;
    return (
      <div>
        <Link to="/">Back To Index</Link>
        <div>{Name}</div>
      </div>
    );
  }
}

const mapStateToProps = ({spots}) => {
  let { all:allSpots } = spots
  return { allSpots }
}

export default connect(mapStateToProps)(SpotDetail);