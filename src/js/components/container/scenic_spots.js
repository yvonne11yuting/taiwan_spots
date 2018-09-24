import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import GoogleImages from "google-images";

import { CSE_ID, API_KEY } from '../../constants/config';
import { getSpots } from '../../actions/index';
import ScenicSpotsEach from '../presentational/scenic_spots_each';

class ScenicSpots extends Component {
  constructor() {
    super();
  }

  componentDidMount(){
    const client = new GoogleImages(CSE_ID, API_KEY);
    client.search('宏亞食品巧克力觀光工廠');

    this.props.getSpots();
    // axios.get('https://taiwanspots.firebaseio.com/Info.json').then(res => {
    //   res.status === 200 && this.setState({infos: res.data})
    // })
  }
  render() {
    console.log(this.props.filterResult);
    return (
      <div>
        <ScenicSpotsEach spots ={ this.props.filterResult ? this.props.filterResult : this.props.all}/>
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