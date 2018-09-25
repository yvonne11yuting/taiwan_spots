import React from 'react';
import { Link } from 'react-router-dom';

const ScenicSpotsEach = ({spot}) => {
  return (
    <Link className="spot" to={`/${spot.Id}`}>
      <img src={`https://dummyimage.com/300x200/cccccc/333333.jpg`} alt={spot.Name}/>
      <div>
        <h3>{spot.Name}</h3>
        <span><b>電話 </b>{spot.Tel}</span><br/>
        <span><b>地址 </b>{spot.Add}</span>
      </div>
    </Link>
  );
};

export default ScenicSpotsEach;