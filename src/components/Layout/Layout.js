import styles from './Layout.module.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

export default function Layout({ children }) {

    return (
        <>
            <Header />
            <div className={styles.wrapper}>
                {children}
            </div>
            <Footer />
        </>
    );
}