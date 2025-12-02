"use client";

import { useState } from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    return (
        <nav className={styles.navbar}>
            <div className={`container ${styles.navContainer}`}>
                <Link href="/" className={styles.logo} onClick={closeMenu}>
                    SM<span className={styles.dot}>.</span>
                </Link>

                <div className={styles.mobileToggle} onClick={toggleMenu}>
                    {isOpen ? <FaTimes /> : <FaBars />}
                </div>

                <ul className={`${styles.navLinks} ${isOpen ? styles.active : ''}`}>
                    <li><Link href="#about" onClick={closeMenu}>About</Link></li>
                    <li><Link href="#skills" onClick={closeMenu}>Skills</Link></li>
                    <li><Link href="#experience" onClick={closeMenu}>Experience</Link></li>
                    <li><Link href="#projects" onClick={closeMenu}>Projects</Link></li>
                    <li><Link href="#contact" className={styles.contactBtn} onClick={closeMenu}>Contact</Link></li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
