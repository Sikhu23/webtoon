import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EpisodeCard = () => {
    const data= useParams();
    const [episode,setEpsiode]=useState()
    useEffect(()=>{
        fetchEpisode()
    },[])

    console.log("0000",data)


    fetchEpisode=async ()=>{
        const url = `https://webtoon.p.rapidapi.com/canvas/episodes/get-info?titleNo=${data.titleNo}&episodeNo=${data.episodeNo}&language=en`;
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
} catch (error) {
	console.error(error);
}
    }



    return (
        <div>


            
        </div>
    );
}

export default EpisodeCard;
