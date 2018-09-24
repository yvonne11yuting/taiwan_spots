import React from 'react';
import { Link } from 'react-router-dom';

const ScenicSpotsEach = ({spot}) => {
  return (
    <section>
      <Link to={`/${spot.Id}`}><img src={`https://dummyimage.com/150x100/cccccc/333333.jpg`} alt={spot.Name}/></Link>
      <div>
        <h3><Link to={`/${spot.Id}`}>{spot.Name}</Link></h3>
        <span><b>電話 </b>{spot.Tel}</span><br/>
        <span><b>地址 </b>{spot.Add}</span>
      </div>
    </section>
  );
};

export default ScenicSpotsEach;