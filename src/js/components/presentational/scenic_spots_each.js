import React from 'react';

const ScenicSpotsEach = ({spots}) => {
  console.log(spots)
  return (
    <div>
      {spots.map(spot => <div key={spot.Id}>{spot.Add}</div>)}
    </div>
  );
};

export default ScenicSpotsEach;