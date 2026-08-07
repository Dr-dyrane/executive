"use client";

import type { CSSProperties } from "react";
import { useEffect, useState } from "react";

type SourceImageProps = {
  src: string;
  fallbackSrcs?: readonly string[];
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackLabel?: string;
  eager?: boolean;
  style?: CSSProperties;
};

export function SourceImage({
  src,
  fallbackSrcs = [],
  alt,
  className,
  fallbackClassName,
  fallbackLabel = "DYRANE EXECUTIVE",
  eager = false,
  style,
}: SourceImageProps) {
  const candidates = [src, ...fallbackSrcs].filter((value, index, values) => value && values.indexOf(value) === index);
  const sourceKey = candidates.join("|");
  const [candidateIndex, setCandidateIndex] = useState(0);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    setCandidateIndex(0);
    setFailed(false);
  }, [sourceKey]);

  if (failed || candidates.length === 0) {
    return (
      <div className={fallbackClassName} role="img" aria-label={alt} data-lumen-media-fallback>
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={candidates[candidateIndex]}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      referrerPolicy="no-referrer"
      style={style}
      data-lumen-media
      onError={() => {
        if (candidateIndex + 1 < candidates.length) {
          setCandidateIndex(candidateIndex + 1);
        } else {
          setFailed(true);
        }
      }}
    />
  );
}
