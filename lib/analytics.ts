export function trackEvent(event: string, properties?: Record<string, any>): void {
  // Stub: no external service yet
  console.log(`[Analytics] Event: ${event}`, properties);
}

export function trackPage(page: string): void {
  // Stub: no external service yet
  console.log(`[Analytics] Page: ${page}`);
}
