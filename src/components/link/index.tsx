import { REPOSITORY_URL } from "../../constant";
import styles from "./index.module.css";

type Props = {
  path?: string;
};

export function RepositoryLink({ path }: Props) {
  return (
    <a
      href={path ? `${REPOSITORY_URL}${path}` : REPOSITORY_URL}
      target="_blank"
      className={styles.link}
    >
      Code
    </a>
  );
}
