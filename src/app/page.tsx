import styles from './index.module.css';

export default async function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.container}>
        <h1 className={styles.title}>Alpha Grid</h1>
      </div>
    </main>
  );
}
