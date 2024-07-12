import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

const GenreCard = (props) => {

 capitalizeFLetter=(value)=> {
        return (value[0].toUpperCase() +
            value.slice(1).toLowerCase());
    }
  
    return (
        <div >



    <Card className='cardDet' style={{ width: '18rem' }}>
      <Card.Img className="genreImage" variant="middle" src={props.data.iconImage} />
      <Card.Body>
        <Card.Title style={{textAlign:"center"}}>{capitalizeFLetter(props.data.code)}</Card.Title>
        <Card.Text>
         
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


            
        </div>
    );
}

export default GenreCard;
