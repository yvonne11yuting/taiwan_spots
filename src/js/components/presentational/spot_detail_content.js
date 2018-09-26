import React from 'react';
import SlideShow from '../widget/slideshow';

const SpotDetailContent = ({detail:{ name, images, contentText }}) => {
  return (
    <div className="media">
      <div className="media-left">
        <SlideShow
          images={images}
          title={name}
          alt={`${name}-相關照片`}
          amount={[1, 5]}
          width="500"
        />
      </div>
      <div className="media-body">
      <h1 className="spot-detail-title">{name}</h1>
      <p className="spot-detail-content">{contentText}</p>
      </div>
    </div>
  );
};

export default SpotDetailContent;