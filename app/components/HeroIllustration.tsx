'use client';
import { motion } from 'framer-motion';

export default function HeroIllustration() {
  return (
    <motion.div
      className="hero-illustration-container"
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        width: '100%',
        maxWidth: '600px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        filter: 'drop-shadow(0 30px 50px rgba(0,0,0,0.4))'
      }}
    >
      <div style={{ width: '100%', overflow: 'hidden', borderRadius: '16px' }}>
        <img 
          src="/hero-illustration.png" 
          alt="Hero Illustration" 
          style={{ 
            width: '100%', 
            height: 'auto', 
            objectFit: 'contain',
            borderRadius: '16px',
            transform: 'scale(1.4)',
            transformOrigin: 'center'
          }}
        />
      </div>
    </motion.div>
  );
}
