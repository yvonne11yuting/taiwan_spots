import React, { Component } from 'react';
import '../../../css/slideshow.css'

class SlideShow extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentImg: 0
    };

    // images={images}
    // title={detail.Name}
    // alt={`${detail.Name}-相關照片`}
    // amount={`[500, 100]`}


  }

  showImages(amount, key) {
    let width = this.props.width;
    let gap = 10;
    let totalGap = (amount + 1) * 10;
    let eachImgLength = Math.floor((width - totalGap) / amount);
    let eachImgLengthWithMargin = eachImgLength + gap;
    let images = this.props.images;
    let imagesAmount = images.length;
    let matchImages = images.map(({thumbnail, imgUrl}) => {
      return amount === 1 ? imgUrl : thumbnail;
    });

    return (
      <div
        key={key}
        style={ { width: `${width}px`, height: `${eachImgLengthWithMargin}px` } }
        className="slideshow-container"
      >
        <a
          className="slideshow-arrow"
          style={{ height: `${eachImgLength}px` }}
        >&lt;</a>
        <a
          className="slideshow-arrow"
          style={{ height: `${eachImgLength}px`, right: 0 }}
        >&gt;</a>
        <div
          className="slideshow-image-container"
          style={ { height: `${eachImgLength}px` } }
        >
          <ul
            className="slideshow-image-wrap"
            style={ { width: `${eachImgLength * imagesAmount }px`, height: `${eachImgLength}px` } }
          >
            {matchImages.map((image, i) => (
              <li
                key={i}
                style={ {
                  width: `${eachImgLength}px`,
                  height: `${eachImgLength}px`,
                  margin: `${gap}px`
                } }
                className="align-center">
                <img
                  src={image}
                  alt={this.props.alt}
                  title={this.props.title}
                  className="slideshow-image-img"
                />
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }

  render() {
    console.log(this.props.images);
    let hasImages = this.props.images && this.props.images.length > 0;
    return (
      <div>
        {
          hasImages && this.props.amount.map((amount, i) => this.showImages(amount, i) )
        }


        {/* { currentImgUrl && <img src={ currentImgUrl } alt={this.props.alt}/> }
        <ul>
          {this.props.images.map(({thumbnail, url}, i) => (
            <li key={i}><img src={thumbnail} alt={this.props.alt}/></li>
          ))}
        </ul> */}


      </div>
    );
  }
}

export default SlideShow;