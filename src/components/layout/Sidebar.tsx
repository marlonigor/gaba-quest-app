import Link from 'next/link';
import styles from './Sidebar.module.css';

export function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.brand}>
        <div className={styles.brandLogo} />
        <span className={styles.brandText}>GeminisQuest</span>
      </div>

      <nav className={styles.nav}>
        <Link href="/" className={`${styles.navItem} ${styles.navItemActive}`}>
          <span className="icon">📊</span>
          Dashboard
        </Link>
        <Link href="/subjects" className={styles.navItem}>
          <span className="icon">📚</span>
          Disciplinas
        </Link>
        <Link href="/quests" className={styles.navItem}>
          <span className="icon">⚔️</span>
          Missões (Questões)
        </Link>
        <Link href="/leaderboard" className={styles.navItem}>
          <span className="icon">🏆</span>
          Ranking
        </Link>
      </nav>

      <div className={styles.userCard}>
        <div className={styles.userAvatar}>P1</div>
        <div className={styles.userInfo}>
          <span className={styles.userName}>Player One</span>
          <span className={styles.userLevel}>Lvl 5 • 1200 XP</span>
        </div>
      </div>
    </aside>
  );
}
