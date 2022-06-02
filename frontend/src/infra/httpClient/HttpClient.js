export async function HttpClient(url, options) {
  return fetch(url, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      ...options.headers,
    },
    body: options.body ? JSON.stringify(options.body) : null,
  }).then(async (resp) => ({
    ok: resp.ok,
    status: resp.status,
    statusText: resp.statusText,
    body: await resp.json(),
  }));
}
