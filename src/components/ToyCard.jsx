import React from "react";

function ToyCard({toy, onlike , onDonate}) {
  const {name,image,likes} = toy

  return (
    <div className="card" data-testid="toy-card">
      <h2>{name /* Toy's Name */}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likes /* Toy's Likes */} Likes </p>
      <button className="like-btn" onClick={onlike}>Like {"<3"}</button>
      <button className="del-btn" onClick={onDonate}>Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
