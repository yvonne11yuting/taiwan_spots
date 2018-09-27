import React, { Component } from 'react';
import LazyLoad from 'react-lazyload';
import '../../../css/slideshow.css'

class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImg: 0,
      movedMargin: 0,
      disabledDirection: null
    };

    this.showImages = this.showImages.bind(this);
    this.moveImg = this.moveImg.bind(this);
    this.updateCurrentImg = this.updateCurrentImg.bind(this);
  }

  updateCurrentImg(index) {
    this.setState({
      currentImg: index
    });
  }

  moveImg({event, moveVal, limitLength}) {
    let targetElem = event.currentTarget;
    let movedMargin = this.state.movedMargin;

    this.setState({
      movedMargin: movedMargin + Number(moveVal)
    });

    if(Math.abs(movedMargin) === limitLength) {
      this.setState({disabledDirection: targetElem});
    } else {
      this.setState({disabledDirection: null});
    }
    console.log(movedMargin, limitLength)
  }

  showImages(amount, key) {
    let width = this.props.width;
    let gap = 5;
    let eachImgLength = Math.floor(width / amount);
    let eachImgLengthWithPadding = eachImgLength + gap;
    let images = this.props.images;
    let imagesAmount = images.length;
    let totalImgsLength = eachImgLength * imagesAmount;
    let matchImages = images.map(({thumbnail, imgUrl}) => {
      return amount === 1 ? imgUrl : thumbnail;
    });

    return (
      <div
        key={key}
        style={ { width: `${width}px`, height: `${eachImgLengthWithPadding}px` } }
        className="slideshow-container"
      >
        <a
          ref="arrorLeft"
          className="slideshow-arrow"
          style={{
            height: `${eachImgLength}px`,
            display: this.state.disabledDirection === this.refs.arrorLeft ? 'none' : 'flex',
            pointerEvents: this.state.disabledDirection === this.refs.arrorLeft ? 'none' : 'auto'
          }}
          onClick={event => this.moveImg({
            event,
            moveVal:`${eachImgLength}`,
            limitLength: eachImgLength
          })}
        >&lt;</a>
        <a
          ref="arrorRight"
          className="slideshow-arrow"
          style={{
            height: `${eachImgLength}px`,
            right: 0,
            display: this.state.disabledDirection === this.refs.arrorRight ? 'none' : 'flex',
            pointerEvents: this.state.disabledDirection === this.refs.arrorRight ? 'none' : 'auto'
          }}
          onClick={event => this.moveImg({
            event,
            moveVal:`-${eachImgLength}`,
            limitLength: totalImgsLength - eachImgLength * 2
          })}
        >&gt;</a>
        <div
          className="slideshow-image-container"
          style={ { height: `${eachImgLength}px` } }
        >
          <ul
            className="slideshow-image-wrap"
            style={ {
              width: `${totalImgsLength}px`,
              height: `${eachImgLength}px`,
              marginLeft: `${this.state.movedMargin}px`,
              transition: 'margin .5s'
            } }
          >
            {matchImages.map((image, i) => (
              <li
                key={i}
                style={ {
                  width: `${eachImgLength}px`,
                  height: `${eachImgLength}px`,
                  padding: `0 ${gap}px`
                } }
                className="align-center"
                onMouseOver={() => this.updateCurrentImg(i)}
              >
                <LazyLoad height={200} once>
                <img
                  src={image}
                  alt={this.props.alt}
                  title={this.props.title}
                  className="slideshow-image-img"
                />
                </LazyLoad>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    let hasImages = this.props.images && this.props.images.length > 0;
    return (
      <div>
        {
          hasImages && this.props.amount.map((amount, i) => this.showImages(amount, i) )
        }
      </div>
    );
  }
}

export default SlideShow;