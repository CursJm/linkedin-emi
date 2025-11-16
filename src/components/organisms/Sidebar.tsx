"use client";

import styles from "./Sidebar.module.css";

import {
  PuzzlePieceIcon,
  MegaphoneIcon,
  PencilSquareIcon,
  ChartBarIcon,
  Cog6ToothIcon,
} from "@heroicons/react/24/outline";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      {open && <div className={styles.overlay} onClick={onClose} />}

      <aside className={`${styles.sidebar} ${open ? styles.open : ""}`}>
        <nav className={styles.menu}>
          <a className={styles.item} href="#">
            <PuzzlePieceIcon className={styles.icon} />
            <span>Mi Portafolio</span>
          </a>

          <a className={styles.item} href="#">
            <MegaphoneIcon className={styles.icon} />
            <span>Convocatorias Disponibles</span>
          </a>

          <a className={styles.item} href="#">
            <PencilSquareIcon className={styles.icon} />
            <span>Mis Postulaciones</span>
          </a>

          <a className={styles.item} href="#">
            <ChartBarIcon className={styles.icon} />
            <span>Reportes y Seguimiento</span>
          </a>

          <a className={styles.item} href="#">
            <Cog6ToothIcon className={styles.icon} />
            <span>Configuración</span>
          </a>
        </nav>
      </aside>
    </>
  );
}
