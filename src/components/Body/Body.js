import React, { useEffect, useState } from 'react';
import GenreCon from './GenreCon';
import TitleCard from './TitleCard';
import TitleCon from './TitleCon';




const Body = () => {
    const [resDetails,setResDetails]= useState([]);


    useEffect(()=>{
        fetchData()

    },[])


    fetchData = async ()=>{


        const url = 'https://webtoon.p.rapidapi.com/canvas/genres/list?language=en';
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
    const data = result?.message?.result?.genreTabList?.genreTabs
    console.log("data",data)
    setResDetails(data)
} catch (error) {
	console.error(error);
}
    }




    return (
        <div>
            <GenreCon data={resDetails}/>
            {/* <TitleCon/> */}
            
        </div>
    );
}

export default Body;
