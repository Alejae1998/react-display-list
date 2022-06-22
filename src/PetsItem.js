export default function Pet({ pet }) {
  return (
    <div className="pets">
      <h2>Breed: {pet.breed}</h2>
      <p>Location: {pet.cuteness}</p>
      <p>Rating: {pet.size}</p>
    </div>
  );
}
