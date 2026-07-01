'use client';

import NumberFlow from '@number-flow/react';
import { useEffect, useRef, useState } from 'react';

const SPRING_EASING =
  'linear(0,0.0033 0.8%,0.0263 2.39%,0.0896 4.77%,0.2165 7.95%,0.4667 13.65%,0.5926 16.82%,0.7052 20%,0.7831 23.18%,0.8397 26.36%,0.8792 29.55%,0.9063 32.73%,0.9259 36.36%,0.9403 40.45%,0.9513 45%,0.9597 50%,0.9671 55.45%,0.9735 61.36%,0.9788 67.73%,0.9831 74.55%,0.9864 81.82%,0.9890 89.55%,1)';

interface Props {
  prefix?: string;
  target: number;
  suffix?: string;
}

export default function AnimatedStat({ prefix, target, suffix }: Props) {
  const [value, setValue] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          setTimeout(() => setValue(target), 800);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} style={{ display: 'inline-flex', alignItems: 'baseline' }}>
      {prefix}
      <NumberFlow
        value={value}
        suffix={suffix}
        willChange
        isolate
        opacityTiming={{ duration: 400, easing: 'ease-out' }}
        transformTiming={{ easing: SPRING_EASING, duration: 900 }}
      />
    </span>
  );
}
