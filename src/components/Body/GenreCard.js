import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

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
        <Link to={`/genre/${props.data.code}`} style={{textDecoration:"none", color:"#333"}}><Card.Title style={{textAlign:"center"}}>{capitalizeFLetter(props.data.name)}</Card.Title></Link>
        <Card.Text>
         
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


            
        </div>
    );
}

export default GenreCard;
