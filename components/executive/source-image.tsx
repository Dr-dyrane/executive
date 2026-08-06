"use client";

import { useState } from "react";

type SourceImageProps = {
  src: string;
  alt: string;
  className?: string;
  fallbackClassName?: string;
  fallbackLabel?: string;
  eager?: boolean;
};

export function SourceImage({
  src,
  alt,
  className,
  fallbackClassName,
  fallbackLabel = "DYRANE EXECUTIVE",
  eager = false,
}: SourceImageProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div className={fallbackClassName} role="img" aria-label={alt}>
        <span>{fallbackLabel}</span>
      </div>
    );
  }

  return (
    <img
      className={className}
      src={src}
      alt={alt}
      loading={eager ? "eager" : "lazy"}
      decoding="async"
      fetchPriority={eager ? "high" : "auto"}
      referrerPolicy="no-referrer"
      onError={() => setFailed(true)}
    />
  );
}
