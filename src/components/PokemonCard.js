import React,{useState} from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({pokemon}) {

  const {id,name,hp,sprites}=pokemon
  const [frontOrBack,setFrontOrBack]=useState(sprites.front)

  function handleCardClick(){
      setFrontOrBack(
        frontOrBack===sprites.front?sprites.back:sprites.front
      )
  }

  return (
    <Card>
      <div>
        <div className="image" onClick={handleCardClick}>
          <img src={frontOrBack} alt="oh no!" />
        </div>
        <div className="content">
          <div className="header">{name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
