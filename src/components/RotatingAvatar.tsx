"use client";

import { Avatar } from "@once-ui-system/core";
import { type CSSProperties, useEffect, useState } from "react";

interface RotatingAvatarProps {
  images: string[];
  size?: "xs" | "s" | "m" | "l" | "xl";
  /** Milliseconds each photo stays before fading to the next. */
  interval?: number;
  label?: string;
  style?: CSSProperties;
}

/**
 * Cross-fades through several avatar photos. Stays on the first photo when
 * there is only one, or when the visitor prefers reduced motion.
 */
export function RotatingAvatar({
  images,
  size = "m",
  interval = 4000,
  label,
  style,
}: RotatingAvatarProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (images.length < 2) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(
      () => setIndex((current) => (current + 1) % images.length),
      interval,
    );
    return () => window.clearInterval(timer);
  }, [images.length, interval]);

  return (
    <span
      role={label ? "img" : undefined}
      aria-label={label}
      aria-hidden={label ? undefined : true}
      style={{ position: "relative", display: "inline-flex", ...style }}
    >
      {images.map((src, i) => (
        <Avatar
          key={src}
          src={src}
          size={size}
          aria-hidden
          style={{
            position: i === 0 ? "relative" : "absolute",
            inset: 0,
            opacity: i === index ? 1 : 0,
            transition: "opacity 0.8s ease",
          }}
        />
      ))}
    </span>
  );
}
