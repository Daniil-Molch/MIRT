import type { ReactNode } from 'react';
import { Link } from 'react-router-dom';
import policy from './privacy.txt?raw';

function Article({ title, children }: { title: string; children: ReactNode }) {
  return <article className="mx-auto max-w-4xl px-6 pt-32 pb-20">
    <Link to="/" className="text-gray-300 underline">Главная</Link>
    <h1 className="text-3xl sm:text-5xl mt-7 mb-9">{title}</h1>
    <div className="space-y-4 text-gray-200 leading-relaxed">{children}</div>
  </article>;
}

export function PrivacyPage() {
  return <Article title="Политика конфиденциальности">
    {policy.trim().split('\n').map((line, i) => line.length < 58 && !line.startsWith('-') && !line.endsWith(':')
      ? <h2 key={i} className="pt-5 text-xl text-white">{line}</h2> : <p key={i}>{line}</p>)}
  </Article>;
}

export function PaymentPage() {
  return <Article title="Доставка и оплата">
    <h2 className="text-xl text-neon">Условия оплаты</h2>
    <p>Оплата в рублях по безналичному расчёту на расчётный счёт компании. Работаем с НДС.</p>
    <p>Для постоянных партнёров предусмотрена отсрочка платежей.</p>
    <h2 className="text-xl pt-4 text-neon">Погрузка и самовывоз</h2>
    <p>Компания оплачивает и выполняет погрузку. Разгрузку на своём складе организует заказчик.</p>
    <p>Склад расположен в Москве, на улице Угрешской, д. 2, в районе Южного порта у внешней стороны Третьего транспортного кольца.</p>
    <p>Позвоните менеджеру минимум за час до самовывоза, чтобы мы успели подготовить товар и документы.</p>
    <p>Склад открыт с понедельника по пятницу с 9:00 до 17:00. В государственные праздники склад закрыт.</p>
    <Link to="/#contacts" className="inline-block underline text-neon">Связаться с МИРТ</Link>
  </Article>;
}
