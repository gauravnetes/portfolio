'use client';

import { useState, useEffect } from 'react';
import styles from './Hero.module.css';

const ROLES = [
  'Backend Developer',
  'Full Stack Engineer',
  'System Architect',
  'API Designer',
  'Problem Solver',
];

export function Typewriter() {
  const [text, setText] = useState('');
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = ROLES[roleIndex];
    let speed = isDeleting ? 40 : 70;
    if (!isDeleting && charIndex === current.length) speed = 2000;
    else if (isDeleting && charIndex === 0) speed = 400;

    const timer = setTimeout(() => {
      if (!isDeleting && charIndex < current.length) {
        setText(current.substring(0, charIndex + 1));
        setCharIndex((c) => c + 1);
      } else if (!isDeleting && charIndex === current.length) {
        setIsDeleting(true);
      } else if (isDeleting && charIndex > 0) {
        setText(current.substring(0, charIndex - 1));
        setCharIndex((c) => c - 1);
      } else {
        setIsDeleting(false);
        setRoleIndex((r) => (r + 1) % ROLES.length);
      }
    }, speed);

    return () => clearTimeout(timer);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <span className={styles.typewriterWrapper} aria-live="polite" aria-label={`Role: ${text}`}>
      <span className={styles.typewriterText}>{text}</span>
      <span className={styles.cursor} aria-hidden="true">|</span>
    </span>
  );
}
