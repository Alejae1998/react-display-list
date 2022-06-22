import Restaurant from './RestaurantsItem';

export default function RestaurantList({ restaurants }) {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant, i) => (
        <Restaurant key={restaurant.name + i} restaurant={restaurant} />
      ))}
    </div>
  );
}
