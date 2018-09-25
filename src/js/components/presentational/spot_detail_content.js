import React from 'react';

const SpotDetailContent = ({detail, images}) => {
  return (
    <div>
      <h3>{detail.Name}</h3>
      <div>{images.map(({thumbnail, url}, i) => (
        <img key={i} src={thumbnail} alt={detail.name}/>
      ))}
      </div>
    </div>
  );
};

export default SpotDetailContent;