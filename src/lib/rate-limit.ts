// Simple sliding window limiter stored per-IP in memory.
// For small/medium sites this is perfectly fine.

const RATE_LIMIT_WINDOW = 60 * 1000; // 1 minute
const MAX_REQUESTS = 5;

const ipHits: Record<string, number[]> = {};

export function isRateLimited(ip: string): boolean {
  const now = Date.now();

  if (!ipHits[ip]) ipHits[ip] = [];

  // Keep only timestamps within the window
  ipHits[ip] = ipHits[ip].filter((t) => now - t < RATE_LIMIT_WINDOW);

  if (ipHits[ip].length >= MAX_REQUESTS) return true;

  ipHits[ip].push(now);
  return false;
}
