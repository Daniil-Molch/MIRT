import { useRef, useState, type FormEvent } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { email, phones } from '../contact';
import { sendRequest } from '../sendRequest';

const key = (import.meta.env.VITE_FORMTOMAIL_KEY || '').trim();
const field = 'block w-full mt-2 rounded-xl bg-dark border border-white/30 px-3 py-3 text-base text-white placeholder:text-gray-500 focus:outline-none focus:border-neon';
export default function ContactForm() {
  const [params] = useSearchParams();
  const topic = params.get('topic') || 'Расчёт стоимости';
  const [status, setStatus] = useState('');
  const [pending, setPending] = useState(false);
  const busy = useRef(false);

  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (busy.current) return;
    const form = event.currentTarget;
    const data = new FormData(form);
    const value = (name: string) => String(data.get(name) || '').trim();
    const fields = { Товар: topic, Имя: value('name') || '—', Телефон: value('phone'), Почта: value('email'), Описание: value('comment') };
    if (!fields.Описание) {
      const comment = form.elements.namedItem('comment') as HTMLTextAreaElement;
      comment.setCustomValidity('Опишите, какую упаковку вы ищете.');
      comment.reportValidity();
      return;
    }
    if (!key) {
      const body = Object.entries(fields).map(([label, text]) => label + ': ' + text).join('\n');
      window.location.href = 'mailto:' + email + '?subject=' + encodeURIComponent('Заявка МИРТ — ' + topic) + '&body=' + encodeURIComponent(body);
      setStatus('Завершите отправку в почтовой программе. Если она не открылась, напишите на ' + email + '.');
      return;
    }
    busy.current = true;
    setPending(true);
    setStatus('');
    try {
      await sendRequest(key, fields, value('company_website'));
      form.reset();
      setStatus('Спасибо! Заявка принята. Мы свяжемся с вами по указанным контактам.');
    } catch (error) {
      if (error instanceof Error && error.message === 'RATE_LIMIT') {
        setStatus('Слишком много заявок подряд. Подождите минуту и попробуйте снова. Введённые данные остались в форме.');
        return;
      }
      setStatus('Не удалось подтвердить отправку. Данные сохранены в форме. Попробуйте позже или напишите на ' + email + '.');
    } finally {
      busy.current = false;
      setPending(false);
    }
  }
  return <section id="contacts" className="py-24 bg-dark text-white">
    <div className="container mx-auto px-6 grid lg:grid-cols-2 gap-12">
      <div><p className="text-sm tracking-widest text-gray-400 mb-4">07 / ЗАЯВКА</p>
        <h2 className="text-5xl lg:text-7xl mb-6">Оставьте заявку</h2>
        <p className="text-gray-300 mb-6">Укажите размер, тираж и материал. Если ещё выбираете упаковку, поможем подобрать вариант.</p>
        <div className="flex flex-col items-start gap-3">
          {phones.map(phone => <a key={phone.href} href={phone.href} className="hover:text-neon">{phone.label}</a>)}
          <a href={'mailto:' + email} className="text-neon">{email}</a><span>Москва, Россия</span>
        </div>
      </div>
      <form onSubmit={submit} aria-busy={pending} className="bg-white/5 p-6 lg:p-8 rounded-3xl border border-white/10 space-y-5">
        <div className="border-b border-white/15 pb-4">
          <span className="block text-sm text-gray-300">Тема заявки</span>
          <p className="font-bold text-neon break-words">{topic}</p>
        </div>
        <fieldset disabled={pending} className="space-y-5 min-w-0" onChange={() => setStatus('')}>
          <legend className="sr-only">Данные для расчёта</legend>
          <label className="block">Как к вам обращаться? <span className="text-sm text-gray-400">(необязательно)</span>
            <input name="name" autoComplete="name" maxLength={100} className={field} />
          </label>
          <div className="grid sm:grid-cols-2 gap-5">
            <label className="block">Телефон *
              <input name="phone" type="tel" autoComplete="tel" required maxLength={30} placeholder="+7 900 123-45-67"
                pattern={'(?=(?:[^0-9]*[0-9]){7,15}[^0-9]*$)\\+?[0-9 \\(\\)\\-]+'}
                title="От 7 до 15 цифр. Можно использовать пробелы, скобки и дефисы." className={field} />
            </label>
            <label className="block">Электронная почта *
              <input type="email" name="email" autoComplete="email" required maxLength={254} placeholder="name@company.ru" className={field} />
            </label>
          </div>
          <label className="block">Что нужно изготовить? *
            <textarea name="comment" required rows={4} maxLength={1200}
              placeholder="Например, 5 000 прозрачных пакетов 20 × 30 см. Нужен расчёт с печатью и без неё."
              onInput={event => event.currentTarget.setCustomValidity('')} className={field} />
          </label>
          <p className="text-sm text-gray-300">* Обязательные поля. Если размеры или тираж ещё неизвестны, опишите задачу своими словами.</p>
        <input name="company_website" aria-hidden="true" tabIndex={-1} autoComplete="off" className="sr-only" />
        <label className="flex items-start gap-3 text-sm"><input type="checkbox" required className="mt-1 w-5 h-5 shrink-0 accent-lime-400" />
          <span>Согласен на обработку контактных данных для ответа на заявку. <Link to="/confidicial" target="_blank" rel="noopener" className="underline">Политика конфиденциальности</Link></span>
        </label>
        {!key && <p className="text-sm text-gray-300">Кнопка откроет письмо в вашей почтовой программе.</p>}
        <button disabled={pending} className="w-full bg-neon text-dark py-3 rounded-full font-bold disabled:opacity-60">{pending ? 'Отправляем…' : key ? 'Отправить заявку' : 'Подготовить письмо'}</button>
        </fieldset>
        <p role="status" className="text-sm">{status}</p>
      </form>
    </div>
  </section>;
}
