import React from "react";
import { Store } from "./Store";
import { IEpisodeProps } from "./interfaces";
import { fetchDataAction, toggleFavAction } from "./Actions";

const EpisodeList = React.lazy<any>(() => import("./EpisodeList"));

export default function HomePage() {
  const { state, dispatch } = React.useContext(Store);

  const props: IEpisodeProps = {
    episodes: state.episodes,
    store: { state, dispatch },
    toggleFavAction,
    favourites: state.favourites,
  };

  React.useEffect(() => {
    state.episodes.length === 0 && fetchDataAction(dispatch);
  });

  return (
    <React.Suspense fallback={<div>Loading...</div>}>
      <section className="episode-layout">
        <EpisodeList {...props} />
      </section>
    </React.Suspense>
  );
}
