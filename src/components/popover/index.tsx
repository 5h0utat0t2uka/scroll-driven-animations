import { useId } from "react";
import styles from "./index.module.css";

type Props = {
  children: React.ReactNode;
};

export function Popover({ children }: Props) {
  const id = useId();
  return (
    <>
      <button className={styles.button} popoverTarget={id}>
        Info
      </button>
      <div id={id} className={styles.popover} popover="auto" popoverTargetAction="toggle">
        {children}
      </div>
    </>
  );
}
