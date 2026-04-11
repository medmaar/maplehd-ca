"use client";
import { useEffect, useRef, useState, ReactNode } from "react";
import { motion, useInView, useMotionValue, useSpring, animate } from "framer-motion";

/* ─── Fade + slide up on scroll ─── */
export function FadeUp({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Staggered children ─── */
export function StaggerList({
  children,
  className,
  style,
  stagger = 0.07,
  delayStart = 0,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  stagger?: number;
  delayStart?: number;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-60px" }}
      variants={{
        hidden: {},
        visible: { transition: { staggerChildren: stagger, delayChildren: delayStart } },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } },
      }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Hover lift card ─── */
export function HoverCard({
  children,
  className,
  style,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      whileHover={{ y: -6, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      transition={{ type: "spring", stiffness: 340, damping: 24 }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Animated number counter ─── */
export function CountUp({
  to,
  suffix = "",
  duration = 1.8,
  style,
}: {
  to: number;
  suffix?: string;
  duration?: number;
  style?: React.CSSProperties;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [displayed, setDisplayed] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, to, {
      duration,
      ease: "easeOut",
      onUpdate: (v) => setDisplayed(Math.round(v)),
    });
    return controls.stop;
  }, [inView, to, duration]);

  return (
    <span ref={ref} style={style}>
      {displayed.toLocaleString()}{suffix}
    </span>
  );
}

/* ─── Slide in from left/right ─── */
export function SlideIn({
  children,
  from = "left",
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  from?: "left" | "right";
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, x: from === "left" ? -40 : 40 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}

/* ─── Pulse glow on CTA buttons ─── */
export function PulseButton({
  children,
  className,
  style,
  href,
}: {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  href?: string;
}) {
  const el = (
    <motion.span
      style={{ display: "inline-block", ...style }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      animate={{ boxShadow: ["0 0 0px rgba(174,36,72,0)", "0 0 22px rgba(174,36,72,0.55)", "0 0 0px rgba(174,36,72,0)"] }}
      transition={{ boxShadow: { duration: 2.4, repeat: Infinity, ease: "easeInOut" }, scale: { type: "spring", stiffness: 340 } }}
      className={className}
    >
      {children}
    </motion.span>
  );
  return href ? <a href={href} style={{ textDecoration: "none" }}>{el}</a> : el;
}

/* ─── Scale in (for badges, icons) ─── */
export function ScaleIn({
  children,
  delay = 0,
  className,
  style,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}) {
  return (
    <motion.div
      className={className}
      style={style}
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.4, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
