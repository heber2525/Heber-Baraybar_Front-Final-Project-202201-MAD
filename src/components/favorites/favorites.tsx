import React from 'react';
import './favorites.scss';
import FavoriteCard from '../card.teacher.favorites/teacher.favorite.card';

function Favorites(): JSX.Element {
  return (
    <div className="favorite">
      <h2>Your favorites teachers</h2>
      <FavoriteCard />
      <button type="submit">
        PURCHASE OUR BONUS AND GET ONE CLASS FOR FREE
      </button>
    </div>
  );
}

export default Favorites;
