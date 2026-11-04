export async function sendRequest(key: string, fields: Record<string, string>, honeypot: string) {
  // The provider renders field values as HTML in notification emails.
  const body = Object.fromEntries(Object.entries(fields).map(([label, value]) => [
    label, value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('\n', '<br>'),
  ]));
  const data = new FormData();
  data.set('title', 'Новая заявка с сайта МИРТ');
  data.set('body', JSON.stringify(body));
  data.set('honeypot', honeypot);
  const response = await fetch('https://api.formtomail.ru/send', {
    method: 'POST', headers: { Authorization: 'Bearer ' + key }, body: data,
    signal: AbortSignal.timeout(20000),
  });
  if (response.status === 429) throw new Error('RATE_LIMIT');
  if (!response.ok || (await response.json()).statusCode !== 200) {
    throw new Error('Submission not confirmed');
  }
}
