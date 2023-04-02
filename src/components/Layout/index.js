import Head from 'next/head';
import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

function index({ children, pageTitle = 'Default' }) {
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content="Next JS Basic" />
      </Head>
      <div className={styles.container}>
        <Header />
        { children }
        <Footer />
      </div>
    </>
  );
}

export default index;
