import { ChangeEvent, useEffect, useState } from 'react';
import { BehaviorSubject, from, Observable } from 'rxjs';
import {
  filter,
  debounceTime,
  distinctUntilChanged,
  mergeMap,
} from 'rxjs/operators';

function useObservable(
  observable: Observable<any>,
  setter: (value: any[]) => void
) {
  useEffect(() => {
    const subscription = observable.subscribe(setter);

    return () => {
      subscription.unsubscribe();
    };
  }, [observable, setter]);
}


export async function getPokemonByName(name: string) {
  const { results: pokemons } = await fetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=10000'
  ).then((response) => response.json());

  return pokemons.filter((pokemon: any) => pokemon.name.includes(name));
}

const searchSubject = new BehaviorSubject('');

const searchResultObservable = searchSubject.pipe(
  filter((value) => value.length > 1),
  debounceTime(750),
  distinctUntilChanged(),
  mergeMap((value) => from(getPokemonByName(value)))
);

const RxJs = () => {
  const [search, setSearch] = useState('');
  const [results, setResults] = useState<any[]>([]);

  useObservable(searchResultObservable, setResults);

  useEffect(() => {
    return () => {};
  }, []);

  function handleSearchChange(event: ChangeEvent<HTMLInputElement>) {
    const newValue = event.target.value;
    setSearch(newValue);
    searchSubject.next(newValue);
  }

  function renderResult() {
    return results.map((pokemon) => (
      <div key={pokemon.name}>{pokemon.name}</div>
    ));
  }

  console.log(typeof results);

  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      <input
        type="text"
        placeholder="Search..."
        value={search}
        onInput={handleSearchChange}
      />

      {renderResult()}
    </div>
  );
};

export default RxJs;
