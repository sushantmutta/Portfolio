import Section from './Section';
import styles from './Certifications.module.css';

const certifications = [
    'DSA Live Training Program by GeeksforGeeks',
    'CISCO CCNA'
];

const Certifications = () => {
    return (
        <Section id="certifications" title="Certifications">
            <div className={styles.list}>
                {certifications.map((cert, index) => (
                    <div key={index} className={`card ${styles.certItem}`}>
                        <span className={styles.icon}>🏆</span>
                        <span className={styles.text}>{cert}</span>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Certifications;
