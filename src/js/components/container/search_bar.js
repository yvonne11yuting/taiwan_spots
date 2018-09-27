import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

import { filterSpots } from '../../actions/index';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let term = e.target.value;
    let filterResult = this.props.spots.all.filter(spot => {
      let regex = new RegExp(term, 'g');
      return regex.test(spot.address) || regex.test(spot.name);
    })

    this.setState({term});
    this.props.filterSpots(filterResult)
  }

  render() {
    return (
      <div className="align-center">
        <input type="search"
          value={this.state.term}
          onChange={this.handleChange}
          placeholder="請輸入想去的縣市或景點名稱"
          className="search-bar-input"
        />
      </div>
    );
  }
}

// export default SearchBar;
const mapStateToProps = ({spots}) => {
  return { spots };
}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ filterSpots }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);