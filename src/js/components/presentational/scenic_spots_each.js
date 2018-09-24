import React from 'react';
import GoogleImages from "google-images";

import { CSE_ID, API_KEY } from '../../constants/config';

const ScenicSpotsEach = ({spot}) => {

  // const client = new GoogleImages(CSE_ID, API_KEY);
  // client.search(spot.Name);

  return (
    <section>
      <img src={`https://dummyimage.com/150x100/cccccc/333333.jpg`} alt={spot.Name}/>
      <div>
        <h3>{spot.Name}</h3>
        <p>
          <b>簡介 </b>{spot.Toldescribe}
        </p>
        <span><b>電話 </b>{spot.Tel}</span><br/>
        <span><b>地址 </b>{spot.Add}</span>
      </div>
    </section>
  );
};

export default ScenicSpotsEach;