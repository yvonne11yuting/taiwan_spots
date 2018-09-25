import React from 'react';
import { Link } from 'react-router-dom';

const ScenicSpotsEach = ({spot}) => {
  return (
    <Link className="spot" to={`/${spot.Id}`}>
      <figure className="spot-image-wrap align-center">
        <img src={`https://dummyimage.com/300x200/cccccc/333333.jpg`} alt={spot.Name}/>
      </figure>
      <div className="spot-info">
        <h3 className="spot-info-title"><strong>{spot.Name}</strong></h3>
        <span><b>電話 </b>{spot.Tel}</span><br/>
        <span><b>地址 </b>{spot.Add}</span>
      </div>
    </Link>
  );
};

export default ScenicSpotsEach;