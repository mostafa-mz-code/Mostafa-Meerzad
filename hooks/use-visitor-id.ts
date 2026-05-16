"use client";
import { useEffect, useState } from "react";

function generateVisitorId(): string {
  return (
    "visitor_" +
    Math.random().toString(36).substring(2) +
    Date.now().toString(36)
  );
}

export function useVisitorId(): string | null {
  const [visitorId, setVisitorId] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("mozi_visitor_id");
    if (stored) {
      setVisitorId(stored);
    } else {
      const newId = generateVisitorId();
      localStorage.setItem("mozi_visitor_id", newId);
      setVisitorId(newId);
    }
  }, []);

  return visitorId;
}
