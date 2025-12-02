import Section from './Section';
import styles from './Projects.module.css';

const projects = [
    {
        title: 'Invoice Generator',
        tech: ['React.js', 'Spring Boot', 'MongoDB'],
        description: 'Full-stack application to create, manage, and download professional invoices. Features include PDF generation, client management, and secure RESTful APIs.',
        links: [
            { label: 'GitHub', url: 'https://github.com/sushantmutta/invoice_generator_backend' }
        ]
    },
    {
        title: 'F1 Insight Engine',
        tech: ['FastAPI', 'React.js', 'LangChain', 'ChromaDB'],
        description: 'AI-powered race insights platform using RAG. Automates F1 data ingestion, provides race strategy analysis, and visualizes telemetry data.',
        links: [
            { label: 'GitHub', url: 'https://github.com/sushantmutta/f1backend' }
        ]
    },
    {
        title: 'Spendyze',
        tech: ['React.js', 'Express.js', 'Gemini AI'],
        description: 'AI-powered personal finance manager with bill scanning, budget alerts, and interactive dashboards for income/expense tracking.',
        links: [
            { label: 'GitHub', url: 'https://github.com/sushantmutta/Spendyze' },
            { label: 'Live Site', url: 'https://spendyze-self.vercel.app/' }
        ]
    },
    {
        title: 'Ticket Booking Platform',
        tech: ['Microservices', 'Kafka', 'AWS'],
        description: 'Scalable microservices architecture for ticket booking with API Gateway and Eureka service discovery.',
        links: []
    },
    {
        title: 'Chat Application',
        tech: ['Spring Boot', 'React.js', 'WebSockets'],
        description: 'Real-time chat application using StompJS and WebSockets for instant messaging.',
        links: []
    }
];

const Projects = () => {
    return (
        <Section id="projects" title="Projects">
            <div className={styles.grid}>
                {projects.map((project, index) => (
                    <div key={index} className={`card ${styles.projectCard}`}>
                        <div className={styles.cardHeader}>
                            <h3 className={styles.title}>{project.title}</h3>
                            <div className={styles.links}>
                                {project.links.map((link, i) => (
                                    <a key={i} href={link.url} target="_blank" rel="noopener noreferrer" className={styles.linkIcon} title={link.label}>
                                        {link.label === 'GitHub' ? (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                        ) : (
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                                        )}
                                    </a>
                                ))}
                            </div>
                        </div>
                        <div className={styles.techStack}>
                            {project.tech.map((t, i) => (
                                <span key={i} className={styles.techTag}>{t}</span>
                            ))}
                        </div>
                        <p className={styles.description}>{project.description}</p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Projects;
