import React, { Component } from 'react';
import '../../../css/scroll-back-to-top.css';

class ScrollBackToTop extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showBtn: false
    };
    this.handleScroll = this.handleScroll.bind(this);
    this.backToTop = this.backToTop.bind(this);
  }

  componentDidMount() {
    window.addEventListener('scroll', this.handleScroll);
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.handleScroll);
  }

  handleScroll() {
    const val = 100;
    const showBtnFlag = document.body.scrollTop > val || document.documentElement.scrollTop > val
    this.setState({ showBtn: showBtnFlag });
  }

  backToTop() {
    let scrollTimer = setInterval(scrollAnimation, 10);
    function scrollAnimation() {
      if(document.body.scrollTop === 0 && document.documentElement.scrollTop === 0) {
        clearInterval(scrollTimer);
      }
      document.body.scrollTop -= 50;
      document.documentElement.scrollTop -= 50;
    }
  }

  render() {
    return (
      <span
        className={ this.state.showBtn ? 'to-top' : 'to-top hide' }
        onClick={this.backToTop}>▲</span>
    )
  }
}

export default ScrollBackToTop;