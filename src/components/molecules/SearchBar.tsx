"use client";

import { useState } from "react";
import styles from "./SearchBar.module.css";

interface SearchBarProps {
  placeholder?: string;
}

export default function SearchBar({ placeholder = "Buscar..." }: SearchBarProps) {
  const [query, setQuery] = useState("");

  return (
    <div className={styles.searchBar}>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder={placeholder}
        className={styles.inputSearch}
      />
     <span className={styles.iconSearch}>⌕</span>
    </div>
  );
}
