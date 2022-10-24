import { ChangeEvent, useMemo, useState } from 'react';
import dummyData from '../../data/dummy-data.json';

export default function Lagging() {
  const [value, setValue] = useState('');
  const [items] = useState(dummyData);

  const filteredItems = useMemo(
    () =>
      value
        ? items.filter((item) =>
            item.name.toLowerCase().includes(value.toLowerCase())
          )
        : [],
    [value, items]
  );

  function handleChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="flex flex-col">
      <h1>Lagging</h1>
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
