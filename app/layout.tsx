import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin', 'cyrillic'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin', 'cyrillic'],
});

export const metadata: Metadata = {
  title: 'Argynbektegi doner — ERP-система сети',
  description:
    'Демонстрация модулей ERP-системы «Argynbektegi doner»: управление филиалами, склад, персонал, QR-смены и онлайн-меню.',
  openGraph: {
    title: 'Argynbektegi doner — единая ERP-система',
    description:
      'Пять продуктовых модулей для управления сетью — от центрального склада до заказа клиента.',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'Argynbektegi doner — единая ERP-система',
    description:
      'Пять продуктовых модулей для управления сетью — от центрального склада до заказа клиента.',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className={`${geistSans.variable} ${geistMono.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
