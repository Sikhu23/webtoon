import React, { useEffect, useState } from 'react';
import GenreCard from './GenreCard';
import TitleCard from './TitleCard';

const TitleCon = () => {
    const [data1,setData]=useState([])


    useEffect(()=>{
fetchByGenre()
    },[])


fetchByGenre=async ()=>{
    const url = 'https://webtoon.p.rapidapi.com/canvas/titles/list?genre=SF&sortOrder=READ_COUNT&startIndex=0&pageSize=20&language=en';
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

    const data1=result?.message?.result?.titleList?.titles
    console.log(data1);
    setData(data1)
} catch (error) {
	console.error(error);
}
}

    return (
        <div className='cardCon'>

            {data1.map(list=>{
               return <TitleCard key={list.index} data={list}/>
            }
            )}
            
        </div>
    );
}

export default TitleCon;
