import React from 'react';
import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={`glass-nav ${styles.navbar}`}>
      <div className={styles.navContainer}>
        <Link href="/" className={styles.logo}>
          <span className={styles.glowText}>Travel</span> Mentor
        </Link>
        <div className={styles.navLinks}>
          <Link href="/mentors" className={styles.navLink}>Find a Mentor</Link>
          <Link href="/safety" className={styles.navLink}>Safety Toolkit</Link>
          <Link href="/dashboard" className={styles.navLink}>Dashboard</Link>
          <button className="btn-primary">Sign In</button>
        </div>
      </div>
    </nav>
  );
}
