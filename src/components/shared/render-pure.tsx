"use client";
import { sanitize, isSupported } from "isomorphic-dompurify";

export function RenderPure({
  html,
  className,
}: {
  html: string;
  className?: string;
}) {
  const sanitizedHTML = sanitize(html);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      className={className}
    />
  );
}