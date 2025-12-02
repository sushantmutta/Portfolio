import styles from './Section.module.css';

interface SectionProps {
    id: string;
    title: string;
    children: React.ReactNode;
    className?: string;
}

const Section = ({ id, title, children, className = '' }: SectionProps) => {
    return (
        <section id={id} className={`${styles.section} ${className}`}>
            <div className="container">
                <h2 className="section-title">{title}</h2>
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </section>
    );
};

export default Section;
