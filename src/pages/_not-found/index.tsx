import styles from "./index.module.css";

export default function NotFound() {
  return (
    <>
      <title>404</title>
      <hgroup className={styles.hgroup}>
        <h1>404</h1>
        <p>Resource not found.</p>
      </hgroup>
    </>
  );
}
