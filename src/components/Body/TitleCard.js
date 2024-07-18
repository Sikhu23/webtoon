import React, { useEffect, useState } from 'react';

import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

const TitleCard = (props) => {

  
console.log(props)
const {genreColor}= props.data
// https://webtoon-phinf.pstatic.net/20240702_141/1719884771486Ld3SD_JPEG/d3052e75-142c-4b5b-947b-dfc1b2442f072208512527210784424.jpg?type=a210
return (
  <div className="card-title" >
    <div className="card-image-title">
      <img src={`data:image/png;base64,https://webtoon-phinf.pstatic.net${props.data.thumbnail}`} alt={props.data.title} />
    </div>
    <div className="card-content-title" >
    <Link to={`/series/${props.data.title}/${props.data.titleNo}`  }  style={{textDecoration:"none", color:"#333"}} > <h3 className="card-title2">{props.data.title}</h3></Link>
      <p className="card-synopsis-title">{props.data.starScoreAverage}</p>
      <p className="card-synopsis-title">{props.data.synopsis}</p>
      <h3 className="card-date">last updated on:- {new Date(props.data.lastEpisodeRegisterYmdt).toDateString()}</h3>
    </div>
  </div>
);
}

export default TitleCard;
