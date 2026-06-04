import React from 'react';
import styles from './AuroraBackground.module.css';

export default function AuroraBackground() {
  return (
    <div className={styles.auroraContainer}>
      <div className={`${styles.orb} ${styles.orb1}`}></div>
      <div className={`${styles.orb} ${styles.orb2}`}></div>
      <div className={`${styles.orb} ${styles.orb3}`}></div>
    </div>
  );
}
