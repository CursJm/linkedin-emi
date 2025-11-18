"use client";

import styles from "./TextArea.module.css";

interface Props {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
}

export default function TextArea({ label, value, onChange, placeholder }: Props) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      <textarea
        className={styles.textarea}
        value={value}
        placeholder={placeholder}
        onChange={(e) => onChange(e.target.value)}
      />
    </div>
  );
}
