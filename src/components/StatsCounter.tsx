"use client";

import { useEffect, useRef, useState } from "react";

export type Metric = {
  value: number;
  suffix: string;
  label: string;
  note?: string;
};

export function StatsCounter({ metrics }: { metrics: Metric[] }) {
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState<number[]>(() => metrics.map(() => 0));
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!started) return;
    const duration = 1600;
    const startTime = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(metrics.map((metric) => Math.round(metric.value * eased)));
      if (progress < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [started, metrics]);

  return (
    <div className="metrics-grid" ref={ref}>
      {metrics.map((metric, index) => (
        <div className="metric" key={metric.label}>
          <strong>{counts[index]}{metric.suffix}</strong>
          <span>{metric.label}</span>
          {metric.note && <small>{metric.note}</small>}
        </div>
      ))}
    </div>
  );
}
