import Restaurant from './RestaurantsItem';

export default function RestaurantList({ restaurants }) {
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant) => (
        <Restaurant key={restaurant.name} restaurant={restaurant} />
      ))}
    </div>
  );
}
