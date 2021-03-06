import React, { Component } from "react";
import PropTypes from "prop-types";

import style from "./MoviesList.module.css";

import MoviesListItem from "./MoviesListItem/MoviesListItem";

class MoviesList extends Component {
  static defaultProps = {
    title: "",
  };

  static propTypes = {
    title: PropTypes.string,
    movies: PropTypes.arrayOf(PropTypes.object),
  };

  render() {
    const { title, movies } = this.props;

    const listItem = movies.map((movie) => {
      return <MoviesListItem key={movie.id} movie={movie} />;
    });

    return (
      <>
        {!!title && <h2 className={style.title}>{title}</h2>}
        <div className={style.movieList}>{listItem}</div>
      </>
    );
  }
}

export default MoviesList;
