"use client";

import { useState } from "react";

export default function CopyButton({ text, icon = false }: { text: string; icon?: boolean }) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }

  if (icon) {
    return (
      <button
        className={`copy-btn copy-btn--icon${copied ? " copied" : ""}`}
        onClick={handleClick}
        aria-label="Copy"
      >
        {copied ? (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M2 7l3.5 3.5L12 3.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        ) : (
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="5" y="1" width="8" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.3"/>
            <path d="M1 5h2.5M1 5v7a1 1 0 001 1h6.5V10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
          </svg>
        )}
      </button>
    );
  }

  return (
    <button
      className={`copy-btn${copied ? " copied" : ""}`}
      onClick={handleClick}
    >
      {copied ? "Copied" : "Copy"}
    </button>
  );
}
