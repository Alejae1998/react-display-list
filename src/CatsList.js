import Cats from './CatsItem';

export default function CatsList({ cats }) {
  return (
    <div className="cats-list">
      {cats.map((cat, i) => (
        <Cats key={cat + i} cat={cat} />
      ))}
    </div>
  );
}
