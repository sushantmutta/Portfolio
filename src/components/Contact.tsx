import Section from './Section';
import styles from './Contact.module.css';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <Section id="contact" title="Get In Touch">
            <div className={styles.contactContainer}>
                <p className={styles.text}>
                    I'm currently looking for new opportunities. Whether you have a question or just want to say hi,
                    feel free to reach out!
                </p>

                <div className={styles.links}>
                    <a href="mailto:sushant.1si22ci054@gmail.com" className={styles.linkItem}>
                        <span className={styles.iconWrapper}><FaEnvelope /></span>
                        <span className={styles.label}>sushant.1si22ci054@gmail.com</span>
                    </a>

                    <a href="https://linkedin.com/in/sushant-mutta" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                        <span className={styles.iconWrapper}><FaLinkedin /></span>
                        <span className={styles.label}>linkedin.com/in/sushant-mutta</span>
                    </a>

                    <a href="https://github.com/sushantmutta" target="_blank" rel="noopener noreferrer" className={styles.linkItem}>
                        <span className={styles.iconWrapper}><FaGithub /></span>
                        <span className={styles.label}>github.com/sushantmutta</span>
                    </a>
                </div>
            </div>
        </Section>
    );
};

export default Contact;
