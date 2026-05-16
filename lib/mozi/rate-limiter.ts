interface RateLimitEntry {
  timestamps: number[];
}

const visitorStore = new Map<string, RateLimitEntry>();
const ipStore = new Map<string, RateLimitEntry>();

const WINDOW_MS = 60 * 60 * 1000; // 1 hour
const MAX_PER_VISITOR = 20; // 20 messages per visitor per hour
const MAX_PER_IP = 40; // 40 messages per IP per hour

function isAllowed(
  store: Map<string, RateLimitEntry>,
  key: string,
  max: number,
): boolean {
  const now = Date.now();
  const entry = store.get(key) ?? { timestamps: [] };

  // Remove timestamps outside the window
  entry.timestamps = entry.timestamps.filter((t) => now - t < WINDOW_MS);

  if (entry.timestamps.length >= max) {
    store.set(key, entry);
    return false;
  }

  entry.timestamps.push(now);
  store.set(key, entry);
  return true;
}

export function checkRateLimit(
  visitorId: string,
  ip: string,
): {
  allowed: boolean;
  reason?: string;
} {
  if (!isAllowed(ipStore, ip, MAX_PER_IP)) {
    return { allowed: false, reason: "ip_limit" };
  }
  if (!isAllowed(visitorStore, visitorId, MAX_PER_VISITOR)) {
    return { allowed: false, reason: "visitor_limit" };
  }
  return { allowed: true };
}
