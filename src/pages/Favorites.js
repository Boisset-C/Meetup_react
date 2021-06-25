import { useContext } from "react";

import FavoritesContext from "../store/favorites-context";
import MeetupList from "../components/meetups/MeetupList";

function Favorites() {
  const FavoritesCtx = useContext(FavoritesContext);

  let content;

  if (FavoritesCtx.totalFavorites === 0) {
    content = <p>No Favorites, yet</p>;
  } else {
    content = <MeetupList meetups={FavoritesCtx.favorites} />;
  }
  return (
    <section>
      <h1>My Favorites</h1>
      {content}
    </section>
  );
}

export default Favorites;
