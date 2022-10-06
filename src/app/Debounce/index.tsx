import { useEffect, useMemo, useState } from 'react';
import { debounce } from 'lodash';
import { getPokemonByName } from '../RxJs';

const Debounce = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const debouncedResults = useMemo(() => {
    return debounce(handleChange, 750);
  }, []);

  useEffect(() => {
    return () => {
      debouncedResults.cancel();  
    };
  }, [debouncedResults]);

  async function handleChange(name: string) {
    setResults(await getPokemonByName(name));
  }

  function renderResult() {
    return results.map((pokemon) => (
      <div key={pokemon.name}>{pokemon.name}</div>
    ));
  }

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <input
        type="text"
        value={search}
        placeholder="Search..."
        onInput={(e) => {
          const name = e.currentTarget.value;
          debouncedResults(name);
          setSearch(name);
        }}
      />
      {renderResult()}
    </div>
  );
};

export default Debounce;
