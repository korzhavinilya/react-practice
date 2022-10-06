import User from './User';
import styles from './Key.module.css';
import { useState } from 'react';

// https://www.youtube.com/watch?v=OtAlPwW8DNU&t=58s&ab_channel=%D0%90%D0%B9%D0%A2%D0%B8%D0%A1%D0%B8%D0%BD%D1%8F%D0%BA

export default function Key() {
  const [idUsers, setIdUsers] = useState([
    { id: 1, name: 'Alexander' },
    { id: 2, name: 'Dmitriy' },
    { id: 3, name: 'Anton' },
  ]);

  const [indexUsers, setIndexUsers] = useState([
    { id: 1, name: 'Alexander' },
    { id: 2, name: 'Dmitriy' },
    { id: 3, name: 'Anton' },
    { id: 4, name: 'Artem' },
    { id: 5, name: 'Andrey' },
  ]);

  /**
   * WILL UNMOUNT Dmitriy
   * DID UPDATE Alexander -> Maxim
   * DID MOUNT Dmitriy
   */
  function changeNameAndId() {
    setIdUsers([
      { id: 1, name: 'Maxim' },
      { id: 4, name: 'Dmitriy' },
      { id: 3, name: 'Anton' },
    ]);
  }

  // WILL UNMOUNT Dmitriy
  function deleteDmitryWithId() {
    setIdUsers([
      { id: 1, name: 'Alexander' },
      { id: 3, name: 'Anton' },
    ]);
  }

  /**
   * WILL UNMOUNT Andrey
   * DID UPDATE Dmitriy -> Anton
   * DID UPDATE Anton -> Artem
   * DID UPDATE Artem -> Andrey
   */
  function deleteDmitryWithIndex() {
    setIndexUsers([
      { id: 1, name: 'Alexander' },
      { id: 3, name: 'Anton' },
      { id: 4, name: 'Artem' },
      { id: 5, name: 'Andrey' },
    ]);
  }

  return (
    <>
      <div className={styles.wrapper}>
        <h1 className="font-bold">id key</h1>
        {idUsers.map((user) => (
          <User key={user.id} name={user.name} />
        ))}
        <button
          onClick={changeNameAndId}
          className="border border-gray-600 mt-2 p-2 rounded-xl"
        >
          changeNameAndId
        </button>
        <button
          onClick={deleteDmitryWithId}
          className="border border-gray-600 mt-2 p-2 rounded-xl"
        >
          deleteDmitry
        </button>
      </div>

      {/* <div className={styles.wrapper}>
        <h1 className="font-bold">index key</h1>
        {indexUsers.map((user, index) => (
          <User key={index} name={user.name} />
        ))}
        <button
          onClick={deleteDmitryWithIndex}
          className="border border-gray-600 mt-2 p-2 rounded-xl"
        >
          deleteDmitry
        </button>
      </div> */}
    </>
  );
}
