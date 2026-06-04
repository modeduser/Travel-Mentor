import styles from './dashboard.module.css';

export default function DashboardPage() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Welcome Back, Traveler</h1>
      
      <div className={styles.grid}>
        <aside className={`${styles.sidebar} glass-panel`}>
          <div className={styles.navItem}>My Trips</div>
          <div className={styles.navItem}>My Mentors</div>
          <div className={styles.navItem}>Messages</div>
          <div className={styles.navItem}>Settings</div>
        </aside>
        
        <section className={`${styles.mainPanel} glass-panel`}>
          <h2>Upcoming Trip</h2>
          <div className={styles.statCard}>
            <h3 className={styles.tripTitle}>Kyoto, Japan</h3>
            <p>Starts in 14 days</p>
            <p style={{ color: 'rgba(255,255,255,0.6)', marginTop: '0.5rem' }}>Mentor: Sarah Jenkins</p>
          </div>
          
          <h2>Recent Messages</h2>
          <div className={styles.statCard}>
            <p><strong>Sarah:</strong> "Don't forget to pack light layers for the evenings in Kyoto!"</p>
          </div>
        </section>
      </div>
    </div>
  );
}
