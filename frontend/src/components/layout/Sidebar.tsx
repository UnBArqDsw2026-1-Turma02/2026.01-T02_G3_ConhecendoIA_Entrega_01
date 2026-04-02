"use client";

import { 
  Network, 
  Cpu, 
  BrainCircuit, 
  Database, 
  BookOpen 
} from "lucide-react";
import styles from "./Sidebar.module.css";

const categories = [
  { id: 'nn', name: "Redes Neurais", icon: Network },
  { id: 'ml', name: "Machine Learning", icon: Cpu },
  { id: 'dl', name: "Deep Learning", icon: BrainCircuit },
  { id: 'ds', name: "Ciência de Dados", icon: Database },
  { id: 'rules', name: "Regras", icon: BookOpen },
];

export function Sidebar() {
  const activeId = 'ml'; // Mocking active state for Machine Learning

  return (
    <aside className={styles.sidebar}>
      <h3 className={styles.title}>Categorias</h3>
      <p className={styles.subtitle}>Explorar Tópicos</p>
      
      <div className={styles.navList}>
        {categories.map((cat) => {
          const Icon = cat.icon;
          return (
            <div 
              key={cat.id} 
              className={`${styles.navItem} ${activeId === cat.id ? styles.active : ""}`}
            >
              <div className={styles.icon}>
                <Icon size={18} strokeWidth={activeId === cat.id ? 2.5 : 2} />
              </div>
              <span>{cat.name}</span>
            </div>
          );
        })}
      </div>
    </aside>
  );
}
