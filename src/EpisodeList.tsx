import React from "react";
import { IEpisode } from "./interfaces";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

export default function EpisodeList(props: any): Array<JSX.Element> {
  const { episodes, toggleFavAction, favourites, store } = props;
  const { state, dispatch } = store;

  return episodes.map((episode: IEpisode) => {
    return (
      <section
        key={episode.id}
        className="episode-box"
        onClick={() => toggleFavAction(state, dispatch, episode)}
      >
        <img
          src={!!episode.image ? episode.image.medium : ""}
          alt={`Rick and Morty ${episode.name}`}
        />
        <div>{episode.name}</div>
        <section className="episode-info">
          <div>
            Seasion:{episode.season} Number: {episode.number}
          </div>

          <FontAwesomeIcon
            className={
              favourites.find((fav: IEpisode) => fav.id === episode.id)
                ? "fav"
                : "unfar"
            }
            icon={faHeart}
          />
        </section>
      </section>
    );
  });
}
