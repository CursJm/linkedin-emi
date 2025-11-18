"use client";

import Logo from "../atoms/Logo";
import SearchBar from "../molecules/SearchBar";
import NotificationButton from "../atoms/NotificationButton";
import Avatar from "../atoms/Avatar";
import styles from "./TopBar.module.css";

interface TopBarProps {
  onToggleSidebar?: () => void; // ahora opcional
}

export default function TopBar({ onToggleSidebar }: TopBarProps) {
  return (
    <header className={styles.topbar}>
      {/* Botón menú - visible solo en pantallas pequeñas */}
      <button
        className={styles.menuButton}
        onClick={() => onToggleSidebar && onToggleSidebar()}
      >
        ☰
      </button>

      <div className={styles.left}>
        <Logo />
        <SearchBar />
      </div>

      <div className={styles.right}>
        <NotificationButton />
        <a href="/perfil/editar">
          <Avatar />
        </a>
      </div>
    </header>
  );
}
