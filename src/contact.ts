export const email = 'mirtld@mail.ru';
export const phones = [
  { label: '+7 (901) 543-84-96', href: 'tel:+79015438496' },
  { label: '+7 (903) 200-14-70', href: 'tel:+79032001470' },
];
export function requestLink(topic: string) {
  return '/?' + new URLSearchParams({ topic }).toString() + '#contacts';
}
