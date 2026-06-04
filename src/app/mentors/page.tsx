import styles from './mentors.module.css';

const MENTORS = [
  { id: 1, name: 'Sarah Jenkins', location: 'Kyoto, Japan', languages: 'English, Japanese' },
  { id: 2, name: 'Carlos Mendoza', location: 'Barcelona, Spain', languages: 'Spanish, English' },
  { id: 3, name: 'Aisha Patel', location: 'Mumbai, India', languages: 'Hindi, English, Marathi' },
];

export default function MentorsPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Meet Our Mentors</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Verified locals and experts ready to guide your journey.</p>
      </div>
      
      <div className={styles.grid}>
        {MENTORS.map((mentor) => (
          <div key={mentor.id} className={`${styles.card} glass-panel`}>
            <div className={styles.avatar}></div>
            <h2 className={styles.name}>{mentor.name}</h2>
            <div className={styles.location}>Expert in {mentor.location}</div>
            <div className={styles.languages}>Speaks: {mentor.languages}</div>
            <button className="btn-secondary" style={{ width: '100%' }}>View Profile</button>
          </div>
        ))}
      </div>
    </div>
  );
}
