import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';

const TitleCard = (props) => {

  
console.log(props)

return (
  <div className="card-title">
    <div className="card-image-title">
      <img src={props.data.thumbnail} alt={props.data.title} />
    </div>
    <div className="card-content-title">
      <h3 className="card-title2">{props.data.title}</h3>
      <p className="card-synopsis-title">{props.data.starScoreAverage}</p>
      <p className="card-synopsis-title">{props.data.synopsis}</p>
    </div>
  </div>
);
}

export default TitleCard;
