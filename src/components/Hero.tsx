import styles from './Hero.module.css';

const Hero = () => {
    return (
        <section className={styles.hero} id="about">
            <div className={`container ${styles.heroContainer}`}>
                <div className={styles.content}>
                    <p className={styles.greeting}>Hello, I'm</p>
                    <h1 className={styles.name}>
                        Sushant <span className={styles.highlight}>S Mutta</span>
                    </h1>
                    <h2 className={styles.role}>Full Stack Developer & AI Enthusiast</h2>
                    <p className={styles.description}>
                        Building scalable web applications and AI-powered solutions.
                        Passionate about F1, clean code, and high-performance systems.
                    </p>
                    <div className={styles.actions}>
                        <a href="/resume.pdf" className={styles.primaryBtn} download>Download Resume</a>
                        <a href="#contact" className={styles.secondaryBtn}>Get in Touch</a>
                    </div>
                    <div className={styles.stats}>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>8.11</span>
                            <span className={styles.statLabel}>CGPA</span>
                        </div>
                        <div className={styles.statItem}>
                            <span className={styles.statValue}>20+</span>
                            <span className={styles.statLabel}>Projects</span>
                        </div>
                    </div>
                </div>
                <div className={styles.visual}>
                    {/* Abstract F1-inspired shape or image could go here */}
                    <div className={styles.glowCircle}></div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
