import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import _ from 'lodash';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      searchTerm: ''
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    let searchTerm = e.target.value;
    this.setState({searchTerm});

    let filterSpots =  this.props.spots.filter(spot => {
      let regex = new RegExp(searchTerm, 'g');
      return regex.test(spot.Add) || regex.test(spot.Name);
    })

    console.log(filterSpots);
  }

  filterSpots(term, spots) {
  }

  render() {
    return (
      <form onSubmit="">
        <input type="text"
          value={this.state.searchTerm}
          onChange={this.handleChange}
          placeholder="請輸入想去的縣市或景點名稱"
        />
        <button tpye="submit">搜尋</button>
      </form>
    );
  }
}

// export default SearchBar;
const mapStateToProps = ({spots}) => {
  return { spots };
}

// const mapDispatchToProps = (dispatch) => {
//   return bindActionCreators({ filterSearch }, dispatch);
// }

export default connect(mapStateToProps)(SearchBar);