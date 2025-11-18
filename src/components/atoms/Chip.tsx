"use client";

import styles from "./Chip.module.css";

interface Props {
  text: string;
  onRemove?: () => void;
}

export default function Chip({ text, onRemove }: Props) {
  return (
    <div className={styles.chip}>
      {text}
      {onRemove && <span className={styles.remove} onClick={onRemove}>×</span>}
    </div>
  );
}
