import { ChangeEvent, useMemo, useState, useTransition } from 'react';
import dummyData from '../../data/dummy-data.json';

export default function Transition() {
  const [value, setValue] = useState('');
  const [filteredValue, setFilteredValue] = useState('');
  const [items] = useState(dummyData);
  const [isPending, startTransition] = useTransition();

  const filteredItems = useMemo(
    () =>
      filteredValue
        ? items.filter((item) =>
            item.name.toLowerCase().includes(filteredValue.toLowerCase())
          )
        : [],
    [filteredValue, items]
  );

  function handleChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
    startTransition(() => {
      setFilteredValue(event.target.value);
    });
  }

  return (
    <div className="flex flex-col">
      <h1>Transition</h1>
      <input
        type="text"
        className="border"
        value={value}
        onChange={handleChangeValue}
      />

      <ul>
        {filteredItems.map((item) => (
          <li key={item._id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
