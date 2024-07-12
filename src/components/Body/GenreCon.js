import React from 'react';
import GenreCard from './GenreCard';

const GenreCon = (props) => {
    return (
        <div className='cardCon'>

            {props.data.map(list=>{
               return <GenreCard key={list.index} data={list}/>
            }
            )}
            
        </div>
    );
}

export default GenreCon;
