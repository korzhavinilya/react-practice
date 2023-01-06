import { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Menu() {
  useEffect(() => {
    console.log('Menu: loaded');
  }, []);

  return (
    <div className="menu">
      <Link to="/">Menu</Link>
      <nav>
        <ul>
          <li>
            <Link to="/a">A</Link>
          </li>
          <li>
            <Link to="/b">B</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}
