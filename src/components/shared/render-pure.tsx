"use client";
import DOMPurify from "dompurify";
import { useEffect, useState } from "react";

export function RenderPure({
  __html,
  className,
}: {
  __html: string;
  className?: string;
}) {
  const [sanitizedHTML, setSanitizedHTML] = useState<string>();

  useEffect(() => {
    if (typeof document === "undefined") return;
    if (typeof window !== "undefined") return;
    setSanitizedHTML(DOMPurify.sanitize(__html));
  }, [__html]);

  return (
    <div
      dangerouslySetInnerHTML={{ __html: sanitizedHTML ? sanitizedHTML : "" }}
      className={className}
    />
  );
}
