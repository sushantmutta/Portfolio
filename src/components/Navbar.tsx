import Link from 'next/link';
import styles from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo}>
                    SM<span className={styles.dot}>.</span>
                </Link>
                <ul className={styles.navLinks}>
                    <li><Link href="#about">About</Link></li>
                    <li><Link href="#skills">Skills</Link></li>
                    <li><Link href="#experience">Experience</Link></li>
                    <li><Link href="#projects">Projects</Link></li>
                    <li><Link href="#contact" className={styles.contactBtn}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
