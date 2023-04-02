import { useRouter } from 'next/router';
import Layout from '../../components/Layout';

function about() {
  const router = useRouter();
  const { id } = router.query;
  return (
    <Layout pageTitle="User Detail">
      <div>
        User Detail
        {' '}
        {id}
      </div>
    </Layout>
  );
}

export default about;
