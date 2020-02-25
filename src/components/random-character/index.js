import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";

import { GET_CHARACTER } from "../character-card/query";
import CharacterInfo from "../character-info";
import "./style.css"

function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const idsInterval = [1, 493];

export default function RandomCharacter() {
  const defaultRandomId = randomIntFromInterval(...idsInterval);
  const [randomId, setRandomId] = useState(defaultRandomId);

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id: randomId }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const character = data.character || {};

  return (
    <div>
      <div className="random">
        <a className="random-link" href="/" onClick={(e) => {
          e.preventDefault();
          setRandomId(randomIntFromInterval(...idsInterval))
        }}>
          Generate random
        </a>
      </div>
      <CharacterInfo character={character} />
    </div>
  );
}