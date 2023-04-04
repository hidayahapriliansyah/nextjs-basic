import Layout from '../../components/Layout';

function UserDetail(props) {
  // eslint-disable-next-line react/prop-types
  const { user } = props;
  return (
    <Layout pageTitle="User Detail">
      <div>
        <p>{user.name}</p>
        <p>{user.email}</p>
        <p>{user.phone}</p>
        <p>{user.website}</p>
      </div>
    </Layout>
  );
}

export default UserDetail;

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const dataUsers = await res.json();

  const paths = dataUsers.map((user) => ({
    params: {
      id: `${user.id}`,
    },
  }));

  return {
    paths,
    fallbacK: true,
  };
}

export async function getStaticProps(context) {
  const { id } = context.params;

  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const user = await res.json();

  return {
    props: {
      user,
    },
  };
}
