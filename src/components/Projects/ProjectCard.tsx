'use client';

import { useState } from 'react';
import { Project } from '@/data/projects';
import styles from './Projects.module.css';

function GithubIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
      <polyline points="15 3 21 3 21 9" /><line x1="10" y1="14" x2="21" y2="3" />
    </svg>
  );
}

function VideoIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M23 7l-7 5 7 5V7z" />
      <rect x="1" y="5" width="15" height="14" rx="2" ry="2" />
    </svg>
  );
}

function VideoOffIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M16 16v1a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h2m5.66 0H14a2 2 0 0 1 2 2v3.34l1 1L23 7v10l-2.58-1.84M1 1l22 22" />
    </svg>
  );
}

const isYouTubeUrl = (url: string) => {
  return url.includes('youtube.com') || url.includes('youtu.be');
};

const getYouTubeEmbedUrl = (url: string) => {
  let videoId = '';
  if (url.includes('youtube.com/embed/')) {
    videoId = url.split('youtube.com/embed/')[1]?.split('?')[0] || '';
  } else if (url.includes('youtube.com/watch')) {
    try {
      const urlParams = new URLSearchParams(new URL(url).search);
      videoId = urlParams.get('v') || '';
    } catch {
      videoId = '';
    }
  } else if (url.includes('youtu.be/')) {
    videoId = url.split('youtu.be/')[1]?.split('?')[0] || '';
  }
  
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&modestbranding=1&rel=0&playsinline=1`;
  }
  return url;
};

export function ProjectCard({ project }: { project: Project }) {
  const [showVideo, setShowVideo] = useState(true);

  return (
    <article className={styles.card} id={`project-${project.id}`}>
      <div className={styles.cardHeader}>
        <h3 className={styles.name}>{project.name}</h3>
        <div className={styles.links}>
          {project.videoUrl && (
            <button
              onClick={() => setShowVideo(!showVideo)}
              className={`${styles.link} ${styles.videoToggle} ${showVideo ? styles.videoActive : ''}`}
              aria-label={showVideo ? "Disable demo video" : "Enable demo video"}
            >
              {showVideo ? <VideoOffIcon /> : <VideoIcon />} Demo
            </button>
          )}
          <a href={project.sourceUrl} className={styles.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} source`}>
            <GithubIcon /> Source
          </a>
          {project.liveUrl && (
            <a href={project.liveUrl} className={styles.link} target="_blank" rel="noopener noreferrer" aria-label={`${project.name} live`}>
              <ExternalIcon /> Live
            </a>
          )}
        </div>
      </div>

      {project.videoUrl && showVideo && (
        <div className={styles.videoContainer}>
          {isYouTubeUrl(project.videoUrl) ? (
            <iframe
              src={getYouTubeEmbedUrl(project.videoUrl)}
              className={styles.iframe}
              allow="autoplay; encrypted-media"
              allowFullScreen
              title={`${project.name} demo video`}
            />
          ) : (
            <video
              src={project.videoUrl}
              className={styles.video}
              autoPlay
              muted
              loop
              playsInline
              preload="metadata"
            />
          )}
        </div>
      )}

      <p className={styles.desc}>{project.description}</p>
      <div className={styles.tags}>
        {project.tags.map((tag) => (
          <span key={tag} className={styles.tag}>{tag}</span>
        ))}
      </div>
    </article>
  );
}
