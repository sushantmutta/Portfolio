import Section from './Section';
import styles from './Education.module.css';

const Education = () => {
    return (
        <Section id="education" title="Education">
            <div className={`card ${styles.eduCard}`}>
                <div className={styles.header}>
                    <h3 className={styles.degree}>BE, CSE AI & ML</h3>
                    <span className={styles.year}>Nov 2022 - 2026</span>
                </div>
                <h4 className={styles.school}>Siddaganga Institute of Technology</h4>
                <p className={styles.location}>Tumkuru, Karnataka</p>
                <div className={styles.score}>
                    <span className={styles.cgpaLabel}>CGPA</span>
                    <span className={styles.cgpaValue}>8.6</span>
                </div>
            </div>
        </Section>
    );
};

export default Education;
