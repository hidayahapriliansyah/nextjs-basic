import Header from '../Header';
import Footer from '../Footer';
import styles from './Layout.module.css';

function index(props) {
  const { children } = props;

  return (
    <div className={styles.container}>
      <Header />
      { children }
      <Footer />
    </div>
  );
}

export default index;
