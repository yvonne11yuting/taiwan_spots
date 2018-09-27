import React from 'react';
import { Link } from 'react-router-dom';
import LazyLoad from 'react-lazyload';

const ScenicSpotsEach = ({spot}) => {
  return (
    <Link className="spot" to={`/${spot.id}`} title={spot.name}>
      <span className="favorite">&#x02606;</span>
      <figure className="spot-image-wrap align-center">
        <LazyLoad height={200} once>
          <img
            src={spot.images[0].thumbnail}
            alt={spot.name}
            title={spot.name}
            className="spot-image-wrap-img"
            onError={(e)=> { e.target.onerror = null; e.target.src = "https://dummyimage.com/300x200/cccccc/333333.jpg?text=Something%20Wrong..."}}
          />
        </LazyLoad>
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