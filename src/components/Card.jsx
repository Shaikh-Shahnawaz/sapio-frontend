import React, { useEffect, useState } from "react";

import ReactCardFlip from "react-card-flip";
import Heart from "react-animated-heart";

const Card = ({ data }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const [isClick, setClick] = useState(false);

  const [likedData,setLikedData] = useState([])

  const handleClick = () => {
    setIsFlipped(!isFlipped);
  };

  const handleLiked = (data)=>{
    setClick(!isClick)

    setLikedData([{name:data,isLiked:isClick}])

console.log('Liked Data ==>>',likedData)
  }

  // useEffect(() => {

  //   if(isClick == true){

  //   }

  //   localStorage.setItem()
  // }, [isClick])
  

  return (
    <div className="my-3 col-md-3">
      <ReactCardFlip isFlipped={isFlipped} flipDirection="vertical">
        <div  class="card" style={{ width: "18rem" }}>
          <img onClick={handleClick} class="card-img-top" src={data.image} alt="Card image cap" />
          <p>
          <Heart isClick={isClick} onClick={() =>handleLiked(data.name) } />
          </p>
        </div>

        <div  onClick={handleClick} class="card" style={{ width: "18rem" }}>
         
          <div class="card-body text-start">
            <h5 class="card-title text-center">{data.name}</h5>
            <p class="card-text"> <b>Status:</b> {data.status}</p>
            <p class="card-text"><b>Gender:</b> {data.gender}</p>
            <p class="card-text"><b>Species:</b> {data.species}</p>
          </div>
        </div>
      </ReactCardFlip>
    </div>
  );
};

export default Card;
