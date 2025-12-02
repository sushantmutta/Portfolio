import Section from './Section';
import styles from './Skills.module.css';
import { CodeIcon, WebIcon, DatabaseIcon, CloudIcon, MonitorIcon, BrainIcon } from './Icons';
import { FaJava, FaPython, FaReact, FaHtml5, FaCss3Alt, FaAws, FaDocker, FaJenkins } from 'react-icons/fa';
import { SiSpringboot, SiExpress, SiMysql, SiMongodb, SiKubernetes, SiPrometheus, SiGrafana } from 'react-icons/si';
import { VscSymbolStructure } from 'react-icons/vsc'; // For generic concepts

const skillsData = [
    {
        category: 'Languages',
        icon: <CodeIcon />,
        items: [
            { name: 'Java', icon: <FaJava /> },
            { name: 'Python', icon: <FaPython /> }
        ]
    },
    {
        category: 'Web',
        icon: <WebIcon />,
        items: [
            { name: 'Spring Boot', icon: <SiSpringboot /> },
            { name: 'React.js', icon: <FaReact /> },
            { name: 'Express.js', icon: <SiExpress /> },
            { name: 'HTML', icon: <FaHtml5 /> },
            { name: 'CSS', icon: <FaCss3Alt /> }
        ]
    },
    {
        category: 'Databases',
        icon: <DatabaseIcon />,
        items: [
            { name: 'MySQL', icon: <SiMysql /> },
            { name: 'MongoDB', icon: <SiMongodb /> }
        ]
    },
    {
        category: 'Cloud / DevOps',
        icon: <CloudIcon />,
        items: [
            { name: 'Docker', icon: <FaDocker /> },
            { name: 'Jenkins', icon: <FaJenkins /> },
            { name: 'AWS', icon: <FaAws /> },
            { name: 'Kubernetes', icon: <SiKubernetes /> }
        ]
    },
    {
        category: 'Monitoring',
        icon: <MonitorIcon />,
        items: [
            { name: 'Prometheus', icon: <SiPrometheus /> },
            { name: 'Grafana', icon: <SiGrafana /> }
        ]
    },
    {
        category: 'Concepts',
        icon: <BrainIcon />,
        items: [
            { name: 'OOP', icon: <VscSymbolStructure /> },
            { name: 'OS', icon: <VscSymbolStructure /> },
            { name: 'CN', icon: <VscSymbolStructure /> },
            { name: 'DBMS', icon: <VscSymbolStructure /> },
            { name: 'DSA', icon: <VscSymbolStructure /> }
        ]
    },
];

const Skills = () => {
    return (
        <Section id="skills" title="Technical Skills">
            <div className={styles.grid}>
                {skillsData.map((skillGroup, index) => (
                    <div key={index} className={`card ${styles.skillCard}`}>
                        <div className={styles.header}>
                            <div className={styles.iconWrapper}>
                                {skillGroup.icon}
                            </div>
                            <h3 className={styles.category}>{skillGroup.category}</h3>
                        </div>
                        <div className={styles.items}>
                            {skillGroup.items.map((item, i) => (
                                <div key={i} className={styles.skillItem}>
                                    <span className={styles.techIcon}>{item.icon}</span>
                                    <span className={styles.techName}>{item.name}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Skills;
