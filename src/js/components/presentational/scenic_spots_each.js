import React from 'react';
import { Link } from 'react-router-dom';

const ScenicSpotsEach = ({spot}) => {
  return (
    <Link className="spot" to={`/${spot.id}`}>
      <figure className="spot-image-wrap align-center">
        <img
          src={spot.images[0].imgUrl}
          alt={spot.name}
          title={spot.name}
          style={{
            'maxWidth': '300px',
            'maxHeight': '200px'
          }}
        />
      </figure>
      <div className="spot-info">
        <h3 className="spot-info-title"><strong>{spot.name}</strong></h3>
        <span><b>電話 </b>{spot.tel}</span><br/>
        <span><b>地址 </b>{spot.address}</span>
      </div>
    </Link>
  );
};

export default ScenicSpotsEach;