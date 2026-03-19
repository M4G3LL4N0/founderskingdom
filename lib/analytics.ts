export function trackPage(path: string) {
  if (typeof window !== "undefined") {
    console.log("[analytics] page", path);
  }
}

export function trackEvent(
  name: string,
  properties?: Record<string, unknown>
) {
  if (typeof window !== "undefined") {
    console.log("[analytics] event", name, properties ?? {});
  }
}
