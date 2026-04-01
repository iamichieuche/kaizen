"use client";

import { useState } from "react";

export default function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  function handleClick() {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
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
