export default function Restaurant({ restaurant }) {
  return (
    <div className="restaurant">
      <h2>Restaurant: {restaurant.name}</h2>
      <p>Location: {restaurant.location}</p>
      <p>Rating: {restaurant.stars}</p>
    </div>
  );
}
