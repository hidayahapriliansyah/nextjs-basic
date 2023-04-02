import Link from 'next/link';

function Header() {
  return (
    <header>
      <ul>
        <li>
          <Link href="/users/detail">Users Detail</Link>
        </li>
        <li>
          <Link href="/users">Users</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
      </ul>
    </header>
  );
}

export default Header;
