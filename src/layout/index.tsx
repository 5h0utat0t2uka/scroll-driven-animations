import { Link, Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import ErrorBoundary from "../components/error/boundary";
import styles from "./index.module.css";

export default function Layout() {
  const { pathname } = useLocation();

  return (
    <>
      <ScrollRestoration />
      <main className={styles.main}>
        <ErrorBoundary>
          {pathname !== "/" && (
            <Link to="/" prefetch="intent" className={styles.link}>
              Index
            </Link>
          )}
          <Outlet />
        </ErrorBoundary>
      </main>
    </>
  );
}
