"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Bell, Search } from "lucide-react";
import styles from "./Navbar.module.css";

const navItems = [
  { name: "Home", href: "/" },
  { name: "Discussões", href: "/discussions" },
  { name: "Tópicos", href: "/topics" },
  { name: "Membros", href: "/members" },
];

export function Navbar() {
  const pathname = usePathname();

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <span style={{ color: "var(--primary)" }}>Conhecendo</span>
        <span>IA</span>
      </div>

      <div className={styles.navLinks}>
        {navItems.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className={`${styles.navItem} ${
              pathname === item.href ? styles.active : ""
            }`}
          >
            {item.name}
          </Link>
        ))}
      </div>

      <div className={styles.actions}>
        <div className={styles.iconBtn}>
          <Search size={20} />
        </div>
        <div className={styles.iconBtn}>
          <Bell size={20} />
        </div>
        <div className={styles.avatar}>
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"
            alt="User Avatar"
          />
        </div>
      </div>
    </nav>
  );
}
