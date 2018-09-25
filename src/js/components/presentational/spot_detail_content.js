import React from 'react';
import SlideShow from '../widget/slideshow';

const SpotDetailContent = ({detail, images}) => {
  return (
    <div className="media">
      <div className="media-left">
        <SlideShow
          images={images}
          title={detail.Name}
          alt={`${detail.Name}-相關照片`}
          amount={[1, 5]}
          width="500"
        />
      </div>
      <div className="media-body">
      <h1>{detail.Name}</h1>
      </div>
    </div>
  );
};

export default SpotDetailContent;