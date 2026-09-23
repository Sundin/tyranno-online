const DEFAULT_ENDPOINT = 'https://2orq0ufifa.execute-api.eu-west-1.amazonaws.com/Prod/analytics';

export function installAnalytics(router, endpoint = import.meta.env.VITE_ANALYTICS_URL || DEFAULT_ENDPOINT) {
  if (typeof window === 'undefined' || ['localhost', '127.0.0.1'].includes(window.location.hostname)) {
    return () => {};
  }

  const events = [];
  let sent = false;

  const removeRouteHook = router.afterEach((to) => {
    events.push({ pathname: to.fullPath, timestamp: Date.now() });
  });

  const flush = () => {
    if (sent || events.length === 0) return;
    sent = true;

    const navigation = performance.getEntriesByType('navigation')[0];
    const body = JSON.stringify({
      events,
      pageLoad: navigation ? Math.round(navigation.loadEventEnd - navigation.responseEnd) : null,
    });

    if (navigator.sendBeacon?.(endpoint, new Blob([body], { type: 'application/json' }))) return;

    fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
      keepalive: true,
    }).catch(() => {});
  };

  window.addEventListener('pagehide', flush);
  return () => {
    removeRouteHook();
    window.removeEventListener('pagehide', flush);
  };
}
