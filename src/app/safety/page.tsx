import styles from './safety.module.css';

export default function SafetyToolkitPage() {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1 className={styles.title}>Travel & Safety Toolkit</h1>
        <p style={{ color: 'rgba(255,255,255,0.7)' }}>Your comprehensive resource for secure travel.</p>
      </div>

      <div className={`${styles.section} glass-panel`}>
        <h2>Emergency Features</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>GPS-based Safety Tracking & Live Location Sharing</li>
          <li className={styles.listItem}>Instant Emergency Notifications to Local Authorities</li>
          <li className={styles.listItem}>Direct 24/7 Priority Line to your Mentor</li>
        </ul>
      </div>

      <div className={`${styles.section} glass-panel`} style={{ borderColor: '#00FFC8' }}>
        <h2>Travel Utilities</h2>
        <ul className={styles.list}>
          <li className={styles.listItem}>Downloadable Offline Maps & Navigation</li>
          <li className={styles.listItem}>Real-time Voice Translator</li>
          <li className={styles.listItem}>Live Local Advisories & District Safety Ratings</li>
        </ul>
      </div>
    </div>
  );
}
