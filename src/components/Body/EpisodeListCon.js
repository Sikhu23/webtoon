import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import EpisodeListCard from "./EpisodeListCard";

export default EpisodeListCon =()=>{

    const [episodeList,setEpisodeList]=useState([])


    const data= useParams()
    console.log("---",data)
    const{titleNo,seriesName}=data

    useEffect(()=>{
        fetchEpisodeList()
    },[])


    fetchEpisodeList=async()=>{
        const url = `https://webtoon.p.rapidapi.com/canvas/episodes/list?startIndex=0&titleNo=${data.titleNo}&language=en&pageSize=21`;
const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': 'e728662d59msh5dfd46e8369670cp1789b4jsnc0e684d756df',
		'x-rapidapi-host': 'webtoon.p.rapidapi.com'
	}
};

try {
	const response = await fetch(url, options);
	const result = await response.json();
	console.log(result);
    const tempList=result?.message?.result?.episodeList?.episode
    setEpisodeList(tempList)
} catch (error) {
	console.error(error);
}
    }



    return(
        <div className="episode-card">
            <div className="series-name">
            <p>{data.seriesName}</p>
            </div>
        {episodeList.map(episode=>{
            const tempNo=episode.episodeNo
            // return  <Link to={`series/${data.seriesName}/${data.titleNo}/${episode.episodeNo}`} style={{textDecoration:"none", color:"#333"}}></Link>
            return <EpisodeListCard episode={episode} routeData={{seriesName,titleNo,tempNo}}/>
        })}
       
    </div>
    )
}