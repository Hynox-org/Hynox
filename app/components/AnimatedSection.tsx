'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface Props {
  children: ReactNode;
  animation?: 'fadeUp' | 'fadeLeft' | 'fadeRight' | 'scaleIn' | 'fadeIn';
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

export default function AnimatedSection({
  children,
  animation = 'fadeUp',
  delay = 0,
  className = '',
  style = {},
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.style.animationPlayState = 'running';
          el.classList.add('cs-animated');
          observer.unobserve(el);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`cs-anim cs-anim--${animation} ${className}`}
      style={{ ...style, animationDelay: `${delay}ms`, animationPlayState: 'paused' }}
    >
      {children}
    </div>
  );
}
