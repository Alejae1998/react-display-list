export default function Pet({ pet }) {
  return (
    <div className="pets">
      <h2>Breed: {pet.breed}</h2>
      <p>Cuteness level: {pet.cuteness}</p>
      <p>Size: {pet.size}</p>
    </div>
  );
}
