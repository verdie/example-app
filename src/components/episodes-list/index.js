import React, { useState } from 'react';
import { useQuery } from "@apollo/react-hooks";
import { Link } from 'react-router-dom';
import { GET_EPISODES } from "./query";

import "./style.css"

function sortedEpisodes(episodes, sortBy) {
  return episodes.slice(0).sort((a, b) => {
      if(a[sortBy] < b[sortBy]) { return -1; }
      if(a[sortBy] > b[sortBy]) { return 1; }
      return 0;
  });
}

export default function EpisodesList() {
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState();
  const { loading, error, data } = useQuery(GET_EPISODES, {
    variables: { page }
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const episodes = data.episodes.results || [];
  const maxPages = data.episodes.info.pages || 1;

  const pagination = [];

  for (let i = 1; i <= maxPages; i++) {
    pagination.push(
      <a href="/" onClick={(e) => {
        e.preventDefault();
        setPage(i)}
      } key={i}>{i}</a>
    );
  }

  return (
    <div className="wrap-episode-list">
      <h3 className="episodes-title">Here you can see all the episodes!</h3>
      <div className="episode-sort-wrap">
     
      <span>Sort by:</span>
      
      <select className="select-css" value={sortBy} onChange={(event) => {
        setSortBy(event.target.value);
      }}>
        <option value="episode">Episode</option>
        <option value="name">Name</option>
      </select>
      </div>

      <ul className="episode-list">
        {sortedEpisodes(episodes, sortBy).map(episode => (
          <li className="episode-list-item" key={episode.id}>
            <Link className="episode-link" to={`/categories/${episode.id}`}>
              {episode.name}
            </Link>
            <p className="episode-code">{episode.episode}</p>
            <p className="episode-date">{episode.air_date}</p>
          </li>
        ))}
      </ul>
      <div className="pagination">
        {pagination}
      </div>
    </div>
  );
}