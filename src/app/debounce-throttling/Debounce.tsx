import { useCallback, useState } from 'react';
import useDebounce from './hooks/useDebounce';

export default function Debounce() {
  const [value, setValue] = useState('');
  const [searchTerms, setSearchTerms] = useState('');

  const searchUsers = useDebounce((value: string) => {
    setSearchTerms(value);
  }, 500);

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValue(e.target.value);
      searchUsers(e.target.value);
    },
    [searchUsers]
  );

  return (
    <>
      <input
        type="text"
        value={value}
        placeholder="Search..."
        onChange={handleChange}
      />
      <span>{searchTerms}</span>
    </>
  );
}
