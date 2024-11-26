import styles from "./page.module.css";
import Link from "next/link";

export default function Home() {
  return (
    <div className={styles.page}>
      <header>
        <Link href="/main">go main</Link>
      </header>
      <main className={styles.main}></main>
      <footer className={styles.footer}></footer>
    </div>
  );
}
