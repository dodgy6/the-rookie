import { IAction, IEpisode, IState } from "./interfaces";

export const fetchDataAction = async (dispatch: any) => {
  const url =
    "https://api.tvmaze.com/singlesearch/shows?q=the+rookie&embed=episodes";
  const data = await fetch(url);
  const dataJSON = await data.json();

  return dispatch({
    type: "FETCH_DATA",
    payload: dataJSON._embedded.episodes,
  });
};

export const toggleFavAction = (
  state: IState,
  dispatch: any,
  episode: IEpisode | any
): IAction => {
  // Check if selected episode is already included
  const episodeInFav = state.favourites.includes(episode);
  let dispatchObj = { type: "ADD_FAV", payload: episode };

  if (episodeInFav) {
    // If episode is already includes in favourite section, remove them
    const favWithoutEpisode = state.favourites.filter(
      (fav: IEpisode) => fav.id !== episode.id
    );
    dispatchObj = { type: "REMOVE_FAV", payload: favWithoutEpisode };
  }

  return dispatch(dispatchObj);
};
