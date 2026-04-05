"use client";

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { useMemo, useEffect, useState, useCallback } from "react";
import styles from "./landing.module.css";

const PARTICLE_COUNT = 80;
const TRAIL_MAX_PARTICLES = 15;

interface TrailParticle {
  id: number;
  x: number;
  y: number;
}

export default function LandingPage() {
  const [mounted, setMounted] = useState(false);
  const [trail, setTrail] = useState<TrailParticle[]>([]);
  
  // Valores para interatividade sutil com o mouse
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  const moveX = useTransform(springX, [-500, 500], [-40, 40]);
  const moveY = useTransform(springY, [-500, 500], [-40, 40]);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    const x = e.clientX;
    const y = e.clientY;
    
    mouseX.set(x - window.innerWidth / 2);
    mouseY.set(y - window.innerHeight / 2);

    // Gerar múltiplas partículas para um rastro mais denso
    const newParticles = Array.from({ length: 3 }).map((_, i) => ({
      id: Date.now() + i,
      x: x + (Math.random() - 0.5) * 10,
      y: y + (Math.random() - 0.5) * 10
    }));

    setTrail(prev => [
      ...newParticles,
      ...prev.slice(0, TRAIL_MAX_PARTICLES - 3)
    ]);
  }, [mouseX, mouseY]);

  useEffect(() => {
    setMounted(true);
    // Limpar partículas do rastro automaticamente
    const interval = setInterval(() => {
      setTrail(prev => prev.slice(0, -1));
    }, 100);
    return () => clearInterval(interval);
  }, []);

  // Gerar o sistema de vórtice
  const particles = useMemo(() => {
    return Array.from({ length: PARTICLE_COUNT }).map((_, i) => ({
      id: i,
      size: Math.random() * 150 + 50,
      radius: Math.random() * 500 + 100,
      duration: Math.random() * 10 + 5,
      delay: Math.random() * -20,
      opacity: Math.random() * 0.5 + 0.2,
      depth: Math.random() * 2,
    }));
  }, []);

  if (!mounted) return <div className={styles.landing} />;

  return (
    <div className={styles.landing} onMouseMove={handleMouseMove}>
      {/* Neural Mouse Trail */}
      <div className={styles.neuralTrail}>
        <AnimatePresence>
          {trail.map((p) => (
            <motion.div
              key={p.id}
              initial={{ opacity: 0.8, scale: 1 }}
              animate={{ opacity: 0, scale: 0, y: p.y + (Math.random() - 0.5) * 50 }}
              exit={{ opacity: 0 }}
              className={styles.trailParticle}
              style={{
                left: p.x,
                top: p.y,
              }}
            />
          ))}
        </AnimatePresence>
      </div>

      {/* Vortex Neural System */}
      <div className={styles.neuralContainer}>
        {[0, 1, 2].map((layer) => (
          <motion.div
            key={`layer-${layer}`}
            className={styles.vortexLayer}
            style={{
              x: moveX,
              y: moveY,
              scale: 1 + layer * 0.1,
              filter: layer === 0 ? "blur(4px)" : layer === 1 ? "blur(1px)" : "none",
            }}
          >
            {particles.slice(layer * 25, (layer + 1) * 25).map((p) => (
              <motion.div
                key={p.id}
                className={styles.streak}
                style={{
                  width: p.size,
                  opacity: p.opacity,
                  position: 'absolute',
                }}
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: p.duration,
                  repeat: Infinity,
                  ease: "linear",
                  delay: p.delay,
                }}
              >
                <motion.div 
                  style={{ 
                    width: '4px', 
                    height: '4px', 
                    borderRadius: '50%', 
                    backgroundColor: '#22D3EE',
                    boxShadow: '0 0 15px #22D3EE',
                    position: 'absolute',
                    left: `${p.radius}px`,
                    top: '50%',
                    transform: 'translateY(-50%)'
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: p.delay
                  }}
                />
              </motion.div>
            ))}
          </motion.div>
        ))}
      </div>

      <div className={styles.overlay} />

      {/* Hero Section */}
      <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2 }}
          style={{ position: 'relative', zIndex: 10 }}
        >
          <motion.div
            animate={{
              boxShadow: ["0 0 10px #22D3EE00", "0 0 30px #22D3EE66", "0 0 10px #22D3EE00"],
              borderColor: ["#22D3EE33", "#22D3EE", "#22D3EE33"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
            style={{
              padding: '6px 20px',
              borderRadius: '100px',
              border: '1px solid rgba(34, 211, 238, 0.4)',
              background: 'rgba(34, 211, 238, 0.05)',
              color: '#22D3EE',
              fontSize: '13px',
              fontWeight: 800,
              width: 'fit-content',
              margin: '0 auto 28px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px',
              textTransform: 'uppercase',
              letterSpacing: '2px'
            }}
          >
            <Sparkles size={14} />
            <span>Rede Sensorial Ativa</span>
          </motion.div>

          <h1 className={`${styles.title} ${styles.glowText}`}>
            Conhecendo <br />
            <span style={{ color: '#22D3EE' }}>IA Conectada</span>
          </h1>

          <p className={styles.subtitle}>
            Explore o ápice da inteligência acadêmica. Um ecossistema responsivo 
            que evolui com cada interação. Sinta a tecnologia, participe do futuro.
          </p>

          <Link href="/forum">
            <motion.button
              whileHover={{ 
                scale: 1.1,
                boxShadow: "0 0 60px rgba(34, 211, 238, 0.9)"
              }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -8, 0] }}
              transition={{ y: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
              className={styles.cta}
            >
              Acessar Fórum
              <ArrowRight size={22} />
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
