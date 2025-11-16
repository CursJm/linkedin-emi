"use client";

import styles from "./Select.module.css";

interface Props {
  label?: string;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export default function Select({ label, value, onChange, options }: Props) {
  return (
    <div className={styles.container}>
      {label && <label className={styles.label}>{label}</label>}

      <select
        className={styles.select}
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        {options.map((op) => (
          <option key={op} value={op}>{op}</option>
        ))}
      </select>
    </div>
  );
}
