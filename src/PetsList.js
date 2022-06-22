import Pet from './PetsItem';

export default function PetsList({ pets }){
  return (
    <div>
      {
        pets.map((pet, i) => (
          <Pet key={pet.name + i} pet={pet} />
        ))
      }
    </div>
  );
}
