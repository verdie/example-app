import React from 'react';
import {useQuery} from "@apollo/react-hooks";
import {GET_EPISODE_CHARACTERS} from "./query";
import {useParams} from 'react-router';
import {Link} from 'react-router-dom';
import "./style.css"

export default function EpisodeDetails() {
  const {id} = useParams();
  const {loading, error, data} = useQuery(GET_EPISODE_CHARACTERS, {variables: {
      id
    }});

  if (loading) 
    return "Loading...";
  if (error) 
    return `Error! ${error.message}`;
  
  const characters = data.episode.characters || [];

  return (
    <div className="wrap-episode-details">
      <h3 className="list-characters-title">Here is all the characters from episode {id}</h3>
      <ul className="list-characters">
        {characters.map(character => (
          <li className="list-characters-item" key={character.id}>
            <Link className="episode-character-link" to={`/characters/${character.id}`} key={character.id}>
              <img className="episode-character-image" src={character.image} alt={character.name} />
              <span className="episode-character-name">{character.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}