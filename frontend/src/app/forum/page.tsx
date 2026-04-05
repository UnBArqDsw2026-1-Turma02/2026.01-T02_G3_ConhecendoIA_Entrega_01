import { 
  Plus, 
  Users, 
  MessageCircle, 
  Sparkles, 
  BrainCircuit, 
  Network, 
  Database 
} from "lucide-react";
import styles from "../page.module.css";
import { DiscussionCard } from "@/components/home/DiscussionCard";
import extraStyles from "@/components/home/HomeExtras.module.css";

const recentDiscussions = [
  {
    id: 1,
    category: "APRENDIZADO PROFUNDO",
    time: "há 2 horas",
    author: "lorem_ipsum",
    title: "O que você acha do futuro dos Large Language Models?",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation.",
    comments: 24,
    views: "1.2k",
    icon: BrainCircuit,
    iconColor: "#7C3AED"
  },
  {
    id: 2,
    category: "CIÊNCIA DE DADOS",
    time: "há 5 horas",
    author: "dolor_sit",
    title: "Melhores datasets para começar em 2024?",
    excerpt: "Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur sodales ligula in libero.",
    comments: 12,
    views: "842",
    icon: Database,
    iconColor: "#0EA5E9"
  },
  {
    id: 3,
    category: "APRENDIZADO DE MÁQUINA",
    time: "Ontem",
    author: "consectetur",
    title: "Dicas para otimização de hiperparâmetros em modelos complexos",
    excerpt: "Mauris massa. Vestibulum lacinia arcu eget nulla. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.",
    comments: 58,
    views: "3.4k",
    icon: Network,
    iconColor: "#8B5CF6"
  }
];

export default function ForumHome() {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <h1 className={styles.heroTitle}>Fórum Conhecendo IA</h1>
          <p className={styles.heroDescription}>
            Bem-vindo ao espaço definitivo para estudantes de IA. Discuta ideias, 
            tire suas dúvidas e colabore com a maior comunidade acadêmica de 
            inteligência artificial.
          </p>
        </div>
        <button className={styles.newDiscussionBtn}>
          <Plus size={18} />
          <span>Nova Discussão</span>
        </button>
      </section>

      {/* Stats and Trending Grid */}
      <section className={styles.statsGrid}>
        <div className={styles.trendingCard}>
          <span className={styles.trendingBadge}>Tópico em Alta</span>
          <h2 className={styles.trendingTitle}>Arquiteturas de Redes Neurais em 2024</h2>
          <p className={styles.trendingDesc}>
            Uma discussão profunda sobre as novas tendências de modelos transformadores
            e arquiteturas de atenção para este ano.
          </p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: 'auto' }}>
             <div style={{ display: 'flex', marginLeft: '4px' }}>
                {[1,2].map(i => (
                  <img 
                    key={i}
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=Avatar${i+10}`} 
                    alt="avatar" 
                    style={{ width: '24px', height: '24px', borderRadius: '50%', border: '2px solid white', marginLeft: i > 0 ? '-8px' : '0' }}
                  />
                ))}
             </div>
             <span style={{ fontSize: '11px', color: 'var(--text-muted)', fontWeight: '500' }}>+128 participando</span>
          </div>
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsIcon}><Users size={24} /></div>
          <div className={styles.statsValue}>12.4k</div>
          <div className={styles.statsLabel}>Total de Membros</div>
        </div>

        <div className={styles.statsCard}>
          <div className={styles.statsIcon}><MessageCircle size={24} /></div>
          <div className={styles.statsValue}>852</div>
          <div className={styles.statsLabel}>Tópicos Ativos</div>
        </div>
      </section>

      {/* Recent Discussions */}
      <section>
        <div className={styles.recentHeader}>
          <h3 className={styles.recentTitle}>Discussões Recentes</h3>
          <div className={styles.filterTabs}>
            <div className={`${styles.tab} ${styles.active}`}>Recentes</div>
            <div className={styles.tab}>Populares</div>
          </div>
        </div>
        
        <div style={{ marginTop: '24px' }}>
          {recentDiscussions.map(discussion => (
            <DiscussionCard key={discussion.id} {...discussion} />
          ))}
        </div>
      </section>

      {/* AI Insights Banner */}
      <section className={extraStyles.aiBanner}>
        <div className={extraStyles.aiContent}>
          <div className={extraStyles.aiIcon}>
            <Sparkles size={32} color="white" />
          </div>
          <div className={extraStyles.aiText}>
            <h4>Curador de Insights IA</h4>
            <p>Nossa IA da comunidade resumiu 45 novas discussões hoje. Veja a aba "Tópicos" para ver agrupamentos automáticos de conhecimento.</p>
          </div>
        </div>
        <button className={extraStyles.aiBtn}>Ver Insights</button>
      </section>

      {/* Footer */}
      <footer className={extraStyles.footer}>
        <div className={extraStyles.footerLinks}>
          <a href="#" className={extraStyles.footerLink}>Política de Privacidade</a>
          <a href="#" className={extraStyles.footerLink}>Diretrizes da Comunidade</a>
          <a href="#" className={extraStyles.footerLink}>Suporte</a>
          <a href="#" className={extraStyles.footerLink}>Sobre Nós</a>
        </div>
        <div className={extraStyles.footerBrand}>ConhecendoIA</div>
        <p className={extraStyles.copyright}>© 2024 ConhecendoIA Lorem Ipsum</p>
      </footer>
    </div>
  );
}
