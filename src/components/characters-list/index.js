import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import shuffle from "lodash.shuffle";
import {Link} from 'react-router-dom';
import { GET_CHARACTERS } from "./query";
import "./style.css"

export default function CharactersList({ species, excludeId }) {
  const { loading, error, data } = useQuery(GET_CHARACTERS, {
    variables: { species }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const characters = data.characters.results || [];

  return (
    <div className="wrap-characters-list">
      <h2 className="other-characters-title">Same species characters:</h2>
      <ul className="other-characters">
        {shuffle(characters).slice(0, 3).map((character) => (
          <li className="other-characters-item">
            <Link className="other-character-link" to={`/characters/${character.id}`} key={character.id}>
              <img className="other-character-image" src={character.image} alt={character.name} />
              <span className="other-character-name">{character.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}