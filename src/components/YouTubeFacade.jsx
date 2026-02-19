import { useState } from 'react';

/**
 * YouTubeFacade — shows a clickable thumbnail instead of loading the full
 * YouTube iframe immediately. The iframe is only injected into the DOM after
 * the user clicks, which avoids 3 × cold YouTube network connections on page load.
 */
export default function YouTubeFacade({ youtubeId, title }) {
  const [active, setActive] = useState(false);

  if (active) {
    return (
      <iframe
        className="w-full h-full block"
        style={{ border: 'none' }}
        src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0`}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      />
    );
  }

  return (
    <button
      type="button"
      onClick={() => setActive(true)}
      className="relative w-full h-full block group/facade bg-black cursor-pointer border-0 p-0 m-0"
      aria-label={`Play video: ${title}`}
    >
      {/* Thumbnail */}
      <img
        src={`https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`}
        alt={`${title} thumbnail`}
        className="w-full h-full object-cover transition-opacity duration-300 group-hover/facade:opacity-80"
        width="480"
        height="360"
        loading="lazy"
      />

      {/* Play button overlay */}
      <span className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <span className="w-14 h-14 flex items-center justify-center rounded-full bg-red-600 shadow-lg group-hover/facade:scale-110 transition-transform duration-200">
          {/* YouTube-style play triangle */}
          <svg
            viewBox="0 0 24 24"
            fill="white"
            className="w-6 h-6 translate-x-0.5"
            aria-hidden="true"
          >
            <path d="M8 5v14l11-7z" />
          </svg>
        </span>
      </span>
    </button>
  );
}
