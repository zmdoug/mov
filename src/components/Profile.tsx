import styles from '../styles/components/Profile.module.css';

export function Profile() {
  return (
    <div className={styles.profileContainer}>
      <img src="http://github.com/zmdoug.png" alt="Aaaa" />
      <div>
        <strong>Douglas Z</strong>
        <p>
          <img src="icons/level.svg" alt="level" />
          level x
          </p>
      </div>
    </div>
  );
}