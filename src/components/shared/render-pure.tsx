"use client";
import DOMPurify from "dompurify";

export function RenderPure({
  __html,
  className,
}: {
  __html: string;
  className?: string;
}) {
  const sanitizedHTML = DOMPurify.sanitize(__html);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
      className={className}
    />
  );
}
