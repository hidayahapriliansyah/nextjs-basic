import { Inter } from 'next/font/google';
import Link from 'next/link';
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
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
      <h1>Welcome</h1>
    </>
  )
}
