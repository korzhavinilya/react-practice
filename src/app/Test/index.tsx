import { useEffect, useState } from 'react';

export default function Test() {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then(setUsers);
  }, []);

  console.log('users', users);

  return <div>Test</div>;
}
