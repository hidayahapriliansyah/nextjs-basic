import Link from 'next/link';
import style from './Header.module.css';

function Header() {
  return (
    <header className={style.container}>
      <ul className={style.list}>
        <li className={style.item}>
          <Link href="/users/detail">Users Detail</Link>
        </li>
        <li className={style.item}>
          <Link href="/users">Users</Link>
        </li>
        <li className={style.item}>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
