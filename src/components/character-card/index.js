import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { useParams } from "react-router-dom";

import { GET_CHARACTER } from "./query";
import CharacterInfo from "../character-info";
import CharacterList from "../characters-list";

export default function CharacterCard(props) {
  const { id } = useParams();

  const { loading, error, data } = useQuery(GET_CHARACTER, {
    variables: { id }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const character = data.character || {};

  return (
    <div className="character-card">
      <CharacterInfo character={character} />
      <CharacterList species={character.species} />
    </div>
  );
}