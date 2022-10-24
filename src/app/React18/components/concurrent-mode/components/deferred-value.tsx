import { ChangeEvent, useDeferredValue, useMemo, useState } from 'react';
import dummyData from '../../data/dummy-data.json';

export default function DeferredValue() {
  const [value, setValue] = useState('');
  const [items] = useState(dummyData);
  const deferredValue = useDeferredValue(value);

  const filteredItems = useMemo(
    () =>
      deferredValue
        ? items.filter((item) =>
            item.name.toLowerCase().includes(deferredValue.toLowerCase())
          )
        : [],
    [deferredValue, items]
  );

  function handleChangeValue(event: ChangeEvent<HTMLInputElement>) {
    setValue(event.target.value);
  }

  return (
    <div className="flex flex-col">
      <h1>Deferred Value</h1>
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
