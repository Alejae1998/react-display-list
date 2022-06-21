import Cats from './CatsItem';

export default function CatsList({ cats }) {
  return (
    <div className="cats-list">
      {cats.map((cat) => (
        <Cats key={cat.name} cat= { cat } />
      ))}
    </div>
  );
}
