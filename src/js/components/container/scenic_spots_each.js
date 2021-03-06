import React, { Component }  from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchSpots, updateStartAt, storeFavorite } from '../../actions';
class ScenicSpotsEach extends Component {
  constructor(props) {
    super(props);
    this.state = {
      onceRequest: 10
    }

    this.countEnd = this.countEnd.bind(this);
    this.loadMoreSpots = this.loadMoreSpots.bind(this);
    this.addFavorite = this.addFavorite.bind(this);
  }

  componentDidMount() {
    let end = this.countEnd();
    this.props.fetchSpots(this.props.currentStart, end - 1);
    this.props.updateStartAt(end)
    window.addEventListener('scroll', this.loadMoreSpots);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.loadMoreSpots);
  }

  countEnd() {
    return this.props.currentStart + this.state.onceRequest;
  }

  loadMoreSpots() {
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
    let bottomOfWindow = scrollTop + window.innerHeight > document.documentElement.offsetHeight - 100;
    let end = this.countEnd();
    if(bottomOfWindow) {
      this.props.fetchSpots(this.props.currentStart, end -1);
      this.props.updateStartAt(end)
    }
  }

  addFavorite(e, spotId) {
    e.preventDefault();
    this.props.storeFavorite({
      uid: this.props.uid,
      spotId
    });
  }

  renderSpots(spot) {
    return (
      <Link key={spot.id} className="spot" to={`/${spot.id}`} title={spot.name}>
        <span
          className="favorite"
          onClick={e => this.addFavorite(e, spot.id)}>&#x02606;</span>
        <LazyLoad height={200} once>
          <figure className="spot-image-wrap align-center">
            <img
              src={spot.images[0].thumbnail}
              alt={spot.name}
              title={spot.name}
              className="spot-image-wrap-img"
            />
          </figure>
        </LazyLoad>
        <div className="spot-info">
          <h3 className="spot-info-title"><strong>{spot.name}</strong></h3>
          <span><b>電話 </b>{spot.tel}</span><br/>
          <span><b>地址 </b>{spot.address}</span>
        </div>
      </Link>
    )
  }

  render() {
    return (
      <div className="spot-container">
        { this.props.spots.map(spot => this.renderSpots(spot)) }
      </div>
    );
  }
};


function mapStateToProps({ spots:{
  all,
  filterResult,
  currentStart,
  favoriteList
}, user: { info: { uid } } }) {
  let spots = filterResult || all;
  return { spots, currentStart, uid, favoriteList };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchSpots, updateStartAt, storeFavorite }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ScenicSpotsEach);