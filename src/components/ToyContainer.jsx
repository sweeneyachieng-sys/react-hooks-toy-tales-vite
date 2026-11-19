import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, onLike, onDonate }) {
  const toyCards = toys.map((toy) => (
    <ToyCard
      key={toy.id}
      toy={toy}
      onLike={() => onLike(toy)}
      onDonate={() => onDonate(toy.id)}
    />
  ));

  return (
    <div id="toy-collection">{toyCards}</div>
  );
}

export default ToyContainer;
