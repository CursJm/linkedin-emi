"use client";

import Logo from "../atoms/Logo";
import SearchBar from "../molecules/SearchBar";
import NotificationButton from "../atoms/NotificationButton";
import Avatar from "../atoms/Avatar";

import styles from "./TopBar.module.css";

interface TopBarProps {
  onToggleSidebar: () => void;
}

export default function TopBar({ onToggleSidebar }: TopBarProps) {
  return (
    <header className={styles.topbar}>
      <div className={styles.left}>
        <button className={styles.menuButton} onClick={onToggleSidebar}>
          ☰
        </button>

        <Logo />
      </div>

      <div className={styles.center}>
        <SearchBar />
      </div>

      <div className={styles.right}>
        <NotificationButton />
        <Avatar />
      </div>
    </header>
  );
}
