import { useState } from 'react';
import { useQuery } from 'react-query';
import Character from './Character';
import './style.css';

export default function Characters() {
  const [page, setPage] = useState(41);
  const { data, status } = useQuery(['characters', page], fetchCharacters);


  async function fetchCharacters({ queryKey }: any) {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character?page=${queryKey[1]}`
    );
    return response.json();
  }

  if (status === 'loading') {
    return <div>Loading...</div>;
  }

  if (status === 'error') {
    return <div>Error</div>;
  }

  return (
    <div>
      <div className="container">
        {data?.results?.map((character: any) => (
          <Character character={character} />
        ))}
      </div>
      <div>
        <button
          disabled={page === 1}
          onClick={() => setPage((page) => page - 1)}
        >
          Prev
        </button>
        <button
          disabled={!data.info.next}
          onClick={() => setPage((page) => page + 1)}
        >
          Next
        </button>
      </div>
    </div>
  );
}
