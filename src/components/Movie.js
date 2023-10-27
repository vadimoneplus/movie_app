import React from "react";
import PropsType from "prop-types";
import "./Movie.css";

export const Movie = ({year, title, summary, poster, genres }) => {
  return (
    <div className="movie">
      <img src={poster} alt={title} title={title} />
      <div className="movie_column">
        <h3 className="movie_title">{title}</h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="movie_genres">
          {genres.map((genre, index) => {
            return (
              <li key={index} className="genres_genre">
                {genre}
              </li>
            );
          })}
        </ul>
        <p className="movie_summary">{summary.slice(0,140)}...</p>
      </div>
    </div>
  );
};

Movie.PropsType = {
  id: PropsType.number.isRequired,
  year: PropsType.number.isRequired,
  title: PropsType.string.isRequired,
  summary: PropsType.string.isRequired,
  poster: PropsType.string.isRequired,
  genres: PropsType.arrayOf(PropsType.string).isRequired,
};
