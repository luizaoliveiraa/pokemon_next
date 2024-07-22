import Link from "next/link";
import styles from "../styles/Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div >
        <span>All rights reserved - Luiza Oliveira</span> &copy; 2024
      </div>
      <div className={styles.socials}>
        <Link href="https://github.com/luizaoliveiraa" target="_blank">
          Github
        </Link>
        <Link
          href="https://www.linkedin.com/in/luizaoliveira0915/"
          target="_blank"
        >
          LinkedIn
        </Link>
      </div>
    </footer>
  );
}
