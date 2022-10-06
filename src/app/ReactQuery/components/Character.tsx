export default function Character({ character }: any) {
  return (
    <div className="card">
      <img src={character.image} alt="Character" />
      <div className="text-container">
        <h3>{character?.name}</h3>
        <p className="status">
          {character.status} - {character.species}
        </p>
      </div>
    </div>
  );
}
