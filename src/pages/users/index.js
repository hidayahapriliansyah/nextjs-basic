import { useRouter } from 'next/router';
import Layout from '../../components/Layout';
import styles from '../../styles/Users.module.css';

function user({ dataUsers }) {
  const router = useRouter();

  return (
    <Layout pageTitle="User Index">
      <div>User Index</div>
      <ul>
        {dataUsers.map((userData) => (
          <li key={userData.id} onClick={() => router.push(`users/${userData.id}`)} className={styles.card}>
            {userData.name}
            ||
            {userData.email}
          </li>
        ))}
      </ul>
    </Layout>
  );
}

export default user;

export async function getStaticProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  return {
    props: {
      dataUsers,
    },
  };
}
