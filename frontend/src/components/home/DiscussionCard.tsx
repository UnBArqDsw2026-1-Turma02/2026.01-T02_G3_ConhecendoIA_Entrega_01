import { MessageSquare, Eye, LucideIcon } from "lucide-react";
import styles from "./DiscussionCard.module.css";

interface DiscussionCardProps {
  title: string;
  excerpt: string;
  category: string;
  author: string;
  time: string;
  comments: number;
  views: string;
  icon: LucideIcon;
  iconColor: string;
}

export function DiscussionCard({
  title,
  excerpt,
  category,
  author,
  time,
  comments,
  views,
  icon: Icon,
  iconColor,
}: DiscussionCardProps) {
  return (
    <div className={styles.card}>
      <div 
        className={styles.iconWrapper} 
        style={{ backgroundColor: `${iconColor}20`, color: iconColor }}
      >
        <Icon size={24} />
      </div>
      
      <div className={styles.content}>
        <div className={styles.meta}>
          <span className={styles.category}>{category}</span>
          <span className={styles.dot}></span>
          <span className={styles.author}>{time} por @{author}</span>
        </div>
        <h4 className={styles.title}>{title}</h4>
        <p className={styles.excerpt}>{excerpt}</p>
      </div>

      <div className={styles.stats}>
        <div className={styles.statItem}>
          <MessageSquare size={16} />
          <span>{comments}</span>
        </div>
        <div className={styles.statItem}>
          <Eye size={16} />
          <span>{views}</span>
        </div>
      </div>
    </div>
  );
}
