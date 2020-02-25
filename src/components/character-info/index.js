import React from 'react';
import "./style.css"

export default function CharacterInfo({character}) {
  console.log("character:", character)
  return (
    <div className="single-character-wrap">
      <h2 className="character-title">Character info:</h2>
      <div className="character">
        <img className="character-image" src={character.image} alt={character.name}/>
        <div className="character-data">
          <p>Name: {character.name}</p>
          <p>Gender: {character.gender}</p>
          <p>Status: {character.status}</p>
          <p>Species: {character.species}</p>
          {character.location && <p>Location: {character.location.name}</p>}
        </div>
      </div>
    </div>
  );
}