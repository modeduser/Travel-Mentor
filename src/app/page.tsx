import styles from './page.module.css';
import Link from 'next/link';

export default function Home() {
  return (
    <div className={styles.hero}>
      <div className={`${styles.heroContent} glass-panel`} style={{ padding: '4rem' }}>
        <h1 className={styles.title}>Navigate the World with Confidence</h1>
        <p className={styles.subtitle}>
          Connect with experienced locals and expert travelers. Get personalized guidance, robust safety tools, and an unforgettable journey.
        </p>
        <div className={styles.actions}>
          <Link href="/mentors" className="btn-primary" style={{ fontSize: '1.2rem' }}>
            Find Your Mentor
          </Link>
          <Link href="/safety" className="btn-secondary" style={{ fontSize: '1.2rem' }}>
            Explore Safety Toolkit
          </Link>
        </div>
      </div>
    </div>
  );
}
