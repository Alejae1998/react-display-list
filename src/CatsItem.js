export default function Cats({ cat }) {
  return (
    <div className="cat">
      <h2>Cat Breed: {cat.breed}</h2>
      <p>Cuteness level: {cat.cuteness}</p>
      <p>Clinginess: {cat.clingy}</p>

    </div>
  );
}
