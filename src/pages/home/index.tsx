import { Link } from "react-router-dom";
import { REPOSITORY_URL } from "../../constant";
import styles from "./index.module.css";

export default function Home() {
  return (
    <>
      <section className={styles.section}>
        <ul>
          <li>
            <Link prefetch="viewport" to="/stack">
              Scroll stack scale effect with animation timeline
            </Link>
          </li>
          <li>
            <Link prefetch="viewport" to="/parallax-carousel">
              Parallax carousel slider with animation timeline
            </Link>
          </li>
          <li>
            <Link prefetch="viewport" to="/parallax-elements">
              Parallax elements with animation timeline
            </Link>
          </li>
          {/*<li><Link prefetch="viewport" to="/hero">Hero</Link></li>*/}
          <li>
            <Link prefetch="viewport" to="/horizontal">
              Horizontal scroll with view timeline
            </Link>
          </li>
          <li>
            <Link prefetch="viewport" to="/grid">
              Multi columns grid with animation timeline
            </Link>
          </li>
        </ul>
        <ul>
          <li>
            <a href={REPOSITORY_URL} target="_blank">
              Repo
            </a>
          </li>
        </ul>
      </section>
    </>
  );
}
