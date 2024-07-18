import React from 'react';
import { Link } from 'react-router-dom';

const EpisodeListCard = (props) => {
    const {episode,routeData}= props
    console.log(routeData)
    return (
        <div className="episode-title" >
        {/* <div className="card-image-title">
          <img src={props.data.thumbnail} alt={props.data.title} />
        </div> */}
        <div className="card-content-title" >
          <Link to={`/series/${routeData.seriesName}/${routeData.titleNo}/${routeData.tempNo}`} style={{textDecoration:"none", color:"#333"}}> <h3 className="card-title2">Ep - {episode.episodeNo} </h3></Link>
          <p className="card-synopsis-title">{episode.episodeTitle}</p>
        </div>
      </div>
    );
}

export default EpisodeListCard;
