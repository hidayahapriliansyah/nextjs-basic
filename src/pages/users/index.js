import Layout from '../../components/Layout';

function user({ dataUsers }) {
  return (
    <Layout pageTitle="User Index">
      <div>User Index</div>
      <ul>
        {dataUsers.map((userData) => (
          <li>
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
