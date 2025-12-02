import Section from './Section';
import styles from './Experience.module.css';

const experiences = [
    {
        role: 'Intern',
        company: 'Cyphertek Solutions',
        description: 'Contributed to web application development using Spring Boot, Express.js, and React.js. Assisted in backend API integration and frontend feature implementation for scalable solutions.',
    },
    {
        role: 'Moderator',
        company: 'India’s Largest NBA Discord Community',
        description: 'Managed 5,000+ members, automated moderation bots, and improved engagement through structured events and analytics.',
    },
    {
        role: 'Event Organizer',
        company: 'Football Turf Leagues, Bangalore',
        description: 'Coordinated multiple 5v5 and 7v7 football tournaments, handling logistics, sponsorships, and player management.',
    }
];

const Experience = () => {
    return (
        <Section id="experience" title="Experience">
            <div className={styles.timeline}>
                {experiences.map((exp, index) => (
                    <div key={index} className={styles.timelineItem}>
                        <div className={styles.marker}></div>
                        <div className={`card ${styles.card}`}>
                            <h3 className={styles.role}>{exp.role}</h3>
                            <h4 className={styles.company}>{exp.company}</h4>
                            <p className={styles.description}>{exp.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Experience;
