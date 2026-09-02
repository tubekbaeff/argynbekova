'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import {
  ArrowRight,
  BarChart3,
  Box,
  Building2,
  Check,
  ChevronRight,
  Clock3,
  ExternalLink,
  FileSpreadsheet,
  Globe2,
  MapPinned,
  MenuSquare,
  Moon,
  PackageCheck,
  QrCode,
  ScanLine,
  ShieldCheck,
  ShoppingBag,
  Smartphone,
  Store,
  Sun,
  Truck,
  Users,
  Utensils,
  Warehouse,
} from 'lucide-react';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from '@/components/ui/tabs';

const links = {
  system: 'https://doner2.vercel.app',
  login: 'https://doner2.vercel.app/login',
  superadmin: 'https://doner2.vercel.app/superadmin',
  warehouse: 'https://doner2.vercel.app/warehouse',
  branch: 'https://doner2.vercel.app/branch',
  staff: 'https://doner2.vercel.app/staff/qr',
  restaurant:
    'https://doner2.vercel.app/restaurant/8f0ffe07-a7c1-4b74-8d12-95e6f762a6c6',
};

const modules = [
  {
    id: 'superadmin',
    number: '01',
    eyebrow: 'Управление сетью',
    title: 'Панель супер-админа',
    description:
      'Единый центр контроля для владельца: филиалы, продажи, персонал и складская логистика собраны в одной панели.',
    href: links.superadmin,
    cta: 'Открыть панель',
    icon: BarChart3,
    features: [
      {
        icon: MapPinned,
        title: 'Карта 14 филиалов',
        text: 'Выручка, дневные продажи и сотрудники на смене по пяти городам.',
      },
      {
        icon: FileSpreadsheet,
        title: 'Табель и Excel',
        text: 'История смен, расчет часов и готовая выгрузка в формате .xlsx.',
      },
      {
        icon: Warehouse,
        title: 'Контроль склада',
        text: 'Остатки, накладные и статусы поставок от центрального склада.',
      },
      {
        icon: Building2,
        title: 'Управление точками',
        text: 'Создание филиалов, координаты на карте и назначение управляющих.',
      },
    ],
  },
  {
    id: 'warehouse',
    number: '02',
    eyebrow: 'Логистика',
    title: 'Центральный склад',
    description:
      'Рабочее пространство для учета сырья, приемки поставок и отправки накладных в филиалы.',
    href: links.warehouse,
    cta: 'Открыть склад',
    icon: Warehouse,
    features: [
      {
        icon: ScanLine,
        title: 'Быстрый поиск',
        text: 'Фильтрация мяса, соусов, напитков и упаковки по категориям.',
      },
      {
        icon: Truck,
        title: 'Отправка накладных',
        text: 'Формирование поставки и мгновенная передача ее в нужный филиал.',
      },
      {
        icon: PackageCheck,
        title: 'Приемка поставщиков',
        text: 'Оприходование новых партий сырья на баланс центрального склада.',
      },
      {
        icon: ShieldCheck,
        title: 'Инвентаризация',
        text: 'Корректировка, аудит и прозрачная сверка фактических остатков.',
      },
    ],
  },
  {
    id: 'branch',
    number: '03',
    eyebrow: 'Операции точки',
    title: 'Панель филиала',
    description:
      'Ежедневные операции управляющего: поставки, персонал, смены и готовые QR-материалы для точки.',
    href: links.branch,
    cta: 'Открыть филиал',
    icon: Store,
    features: [
      {
        icon: PackageCheck,
        title: 'Приемка в один клик',
        text: 'Зачисление товаров на баланс филиала с обновлением статуса накладной.',
      },
      {
        icon: Users,
        title: 'Персонал и графики',
        text: 'Регистрация сотрудников, циклы работы и длительность смен.',
      },
      {
        icon: Clock3,
        title: 'Live Time Logs',
        text: 'Сотрудники на смене прямо сейчас и ручное закрытие при необходимости.',
      },
      {
        icon: QrCode,
        title: 'QR-генератор',
        text: 'Скачивание PNG и готовые плакаты А4 для станции смен и меню.',
      },
    ],
  },
  {
    id: 'staff',
    number: '04',
    eyebrow: 'Учет времени',
    title: 'QR-сканер сотрудника',
    description:
      'Мобильный сценарий открытия и закрытия смены без терминала, карточек и повторного ввода данных.',
    href: links.staff,
    cta: 'Открыть QR-сканер',
    icon: Smartphone,
    features: [
      {
        icon: QrCode,
        title: 'Старт со сканирования',
        text: 'Сотрудник открывает станцию смен через QR-код своего филиала.',
      },
      {
        icon: Users,
        title: 'Личный ID',
        text: 'Телефон один раз связывается с уникальной записью сотрудника.',
      },
      {
        icon: MapPinned,
        title: 'GPS-геофенс',
        text: 'Проверка присутствия в радиусе 100 метров от рабочей точки.',
      },
      {
        icon: Check,
        title: 'Фиксация за секунду',
        text: 'Система автоматически определяет: начать или завершить смену.',
      },
    ],
  },
  {
    id: 'menu',
    number: '05',
    eyebrow: 'Клиентский сервис',
    title: 'Онлайн QR-меню',
    description:
      'Быстрое электронное меню с корзиной и передачей готового заказа напрямую в WhatsApp филиала.',
    href: links.restaurant,
    cta: 'Посмотреть меню',
    icon: Utensils,
    features: [
      {
        icon: Globe2,
        title: 'Без регистрации',
        text: 'Доступ со стола, стойки или социальной сети без логина и пароля.',
      },
      {
        icon: MenuSquare,
        title: 'Каталог блюд',
        text: 'Донеры, напитки, комбо и соусы в простой адаптивной сетке.',
      },
      {
        icon: ShoppingBag,
        title: 'Плавающая корзина',
        text: 'Количество позиций и итоговая сумма всегда остаются под рукой.',
      },
      {
        icon: Smartphone,
        title: 'Заказ в WhatsApp',
        text: 'Структурированный чек отправляется на номер конкретного филиала.',
      },
    ],
  },
];

const flow = [
  {
    step: '01',
    title: 'Центральный склад',
    text: 'Принимает сырье и формирует накладные.',
    icon: Box,
  },
  {
    step: '02',
    title: 'Филиал',
    text: 'Принимает поставку и управляет сменой.',
    icon: Store,
  },
  {
    step: '03',
    title: 'Сотрудник',
    text: 'Фиксирует рабочее время через QR и GPS.',
    icon: Users,
  },
  {
    step: '04',
    title: 'Клиент',
    text: 'Выбирает блюда и отправляет заказ в WhatsApp.',
    icon: ShoppingBag,
  },
  {
    step: '05',
    title: 'Владелец',
    text: 'Видит общую картину по всей сети.',
    icon: BarChart3,
  },
];

function ExternalButton({
  href,
  children,
  variant = 'default',
  className = '',
}: {
  href: string;
  children: React.ReactNode;
  variant?: 'default' | 'outline' | 'secondary' | 'ghost';
  className?: string;
}) {
  return (
    <Button
      size="lg"
      variant={variant}
      nativeButton={false}
      className={className}
      render={
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          aria-label="Открыть раздел на рабочем хостинге в новой вкладке"
        />
      }
    >
      {children}
    </Button>
  );
}

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('argynbektegi-theme');
    const shouldUseDark = savedTheme === 'dark';

    document.documentElement.classList.toggle('dark', shouldUseDark);
    queueMicrotask(() => setIsDark(shouldUseDark));
  }, []);

  function toggleTheme() {
    const nextThemeIsDark = !isDark;
    setIsDark(nextThemeIsDark);
    document.documentElement.classList.toggle('dark', nextThemeIsDark);
    window.localStorage.setItem(
      'argynbektegi-theme',
      nextThemeIsDark ? 'dark' : 'light',
    );
  }

  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <header className="sticky top-0 z-50 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-5 lg:px-8">
          <a href="#top" className="flex items-center gap-3" aria-label="К началу страницы">
            <span className="flex h-11 w-36 items-center rounded-lg bg-white px-2 shadow-sm ring-1 ring-black/8 sm:w-44">
              <Image
                src="/argynbektegi-doner-logo.png"
                alt="Argynbektegi doner"
                width={2034}
                height={773}
                priority
                className="h-full w-full object-contain"
              />
            </span>
          </a>

          <nav
            className="hidden items-center gap-7 text-sm text-muted-foreground md:flex"
            aria-label="Основная навигация"
          >
            <a className="transition-colors hover:text-foreground" href="#modules">Модули</a>
            <a className="transition-colors hover:text-foreground" href="#architecture">Архитектура</a>
            <a className="transition-colors hover:text-foreground" href="#access">Доступ</a>
          </nav>

          <div className="flex items-center gap-2">
            <Button
              type="button"
              size="icon-lg"
              variant="outline"
              onClick={toggleTheme}
              aria-label={isDark ? 'Включить светлую тему' : 'Включить тёмную тему'}
              title={isDark ? 'Светлая тема' : 'Тёмная тема'}
              className="bg-card"
            >
              {isDark ? <Sun /> : <Moon />}
            </Button>
            <ExternalButton href={links.login} className="h-9 px-4">
              Войти <ExternalLink data-icon="inline-end" />
            </ExternalButton>
          </div>
        </div>
      </header>

      <section
        id="top"
        className="relative z-10 mx-auto max-w-7xl px-5 pb-20 pt-20 lg:px-8 lg:pb-28 lg:pt-28"
      >
        <div className="grid items-end gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Badge
              variant="outline"
              className="mb-6 h-7 border-primary/35 bg-primary/10 px-3 text-primary"
            >
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-primary opacity-60" />
                <span className="relative inline-flex size-2 rounded-full bg-primary" />
              </span>
              Система работает 24/7
            </Badge>

            <p className="mb-5 text-sm font-semibold tracking-tight text-foreground">
              Argynbektegi doner <span className="text-muted-foreground">· ERP ecosystem</span>
            </p>

            <h1 className="max-w-4xl text-balance text-5xl font-semibold leading-[0.98] tracking-[-0.055em] sm:text-6xl lg:text-7xl">
              Вся сеть донерных.
              <span className="block text-primary">В ОДНОЙ СИСТЕМЕ</span>
            </h1>
            <p className="mt-7 max-w-2xl text-pretty text-lg leading-8 text-muted-foreground sm:text-xl">
              Единая ERP-платформа связывает управление филиалами, складскую логистику,
              учет смен и клиентские заказы — от центрального склада до WhatsApp-чека.
            </p>

            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <ExternalButton href={links.system} className="h-11 px-5">
                Открыть систему <ArrowRight data-icon="inline-end" />
              </ExternalButton>
              <a
                href="#modules"
                className="inline-flex h-11 items-center justify-center gap-2 rounded-lg border border-border bg-card px-5 text-sm font-medium transition-colors hover:bg-muted"
              >
                Смотреть возможности <ChevronRight className="size-4" />
              </a>
            </div>
          </div>

          <Card className="relative border-primary/20 bg-card/90 shadow-2xl shadow-black/30">
            <CardHeader className="border-b border-border/70 pb-4">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-mono text-[11px] uppercase tracking-[0.16em] text-muted-foreground">
                    Сводка проекта
                  </p>
                  <CardTitle className="mt-2 text-xl">Операционный контур</CardTitle>
                </div>
                <Badge variant="secondary" className="text-status">Синхронизировано</Badge>
              </div>
            </CardHeader>
            <CardContent className="grid grid-cols-2 gap-px bg-border/70 p-0 sm:grid-cols-4 lg:grid-cols-2">
              {[
                ['14', 'филиалов'],
                ['5', 'городов'],
                ['5', 'модулей'],
                ['100 м', 'GPS-геофенс'],
              ].map(([value, label]) => (
                <div key={label} className="bg-card px-5 py-6">
                  <p className="font-mono text-2xl font-semibold tracking-tight text-foreground">{value}</p>
                  <p className="mt-1 text-xs text-muted-foreground">{label}</p>
                </div>
              ))}
            </CardContent>
            <CardFooter className="border-t border-border/70 bg-card px-4 py-4">
              <div className="flex w-full items-center gap-3">
                <span className="flex size-9 items-center justify-center rounded-lg bg-primary/12 text-primary">
                  <ShieldCheck className="size-4" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm font-medium">Все модули соединены</p>
                  <p className="text-xs text-muted-foreground">Данные передаются между ролями в реальном времени</p>
                </div>
              </div>
            </CardFooter>
          </Card>
        </div>
      </section>

      <section
        id="modules"
        className="relative z-10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 lg:flex-row lg:items-end">
            <div>
              <p className="section-label">Продуктовые модули</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Пять рабочих пространств.
                <span className="block text-primary">ОДНАЯ РАБОЧАЯ СИСТЕМА</span>
              </h2>
            </div>
            <p className="max-w-md text-sm leading-6 text-muted-foreground">
              Каждый участник получает только нужный сценарий — от стратегического обзора владельца до заказа гостя.
            </p>
          </div>

          <Tabs defaultValue="superadmin" className="gap-8">
            <div className="overflow-x-auto pb-2">
              <TabsList variant="line" className="h-auto min-w-max gap-2">
                {modules.map((module) => {
                  const Icon = module.icon;
                  return (
                    <TabsTrigger key={module.id} value={module.id} className="h-10 px-3 sm:px-4">
                      <Icon data-icon="inline-start" />
                      <span className="hidden sm:inline">{module.eyebrow}</span>
                      <span className="sm:hidden">{module.number}</span>
                    </TabsTrigger>
                  );
                })}
              </TabsList>
            </div>

            {modules.map((module) => {
              const ModuleIcon = module.icon;
              return (
                <TabsContent key={module.id} value={module.id}>
                  <Card className="gap-0 border-border/80 bg-card/70 py-0">
                    <div className="grid lg:grid-cols-[0.82fr_1.18fr]">
                      <div className="flex flex-col border-b border-border p-6 sm:p-8 lg:border-b-0 lg:border-r lg:p-10">
                        <div className="mb-10 flex items-center justify-between">
                          <span className="flex size-12 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-[0_0_32px_var(--primary-glow)]">
                            <ModuleIcon className="size-5" />
                          </span>
                          <span className="font-mono text-sm text-muted-foreground">{module.number} / 05</span>
                        </div>
                        <p className="section-label">{module.eyebrow}</p>
                        <h3 className="mt-3 text-3xl font-semibold tracking-[-0.035em]">{module.title}</h3>
                        <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">{module.description}</p>
                        <div className="mt-8 lg:mt-auto lg:pt-12">
                          <ExternalButton href={module.href} className="w-full sm:w-auto">
                            {module.cta} <ExternalLink data-icon="inline-end" />
                          </ExternalButton>
                        </div>
                      </div>

                      <div className="grid divide-y divide-border sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                        {module.features.map((feature, index) => {
                          const FeatureIcon = feature.icon;
                          return (
                            <div
                              key={feature.title}
                              className={`p-6 transition-colors hover:bg-muted/35 sm:p-8 ${
                                index > 1 ? 'sm:border-t sm:border-border' : ''
                              }`}
                            >
                              <div className="mb-8 flex items-center justify-between">
                                <span className="flex size-10 items-center justify-center rounded-lg border border-border bg-background text-primary">
                                  <FeatureIcon className="size-4" />
                                </span>
                                <span className="font-mono text-[11px] text-muted-foreground">0{index + 1}</span>
                              </div>
                              <h4 className="text-base font-medium">{feature.title}</h4>
                              <p className="mt-2 text-sm leading-6 text-muted-foreground">{feature.text}</p>
                            </div>
                          );
                        })}
                      </div>
                    </div>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <section
        id="architecture"
        className="relative z-10 mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28"
      >
        <div className="grid gap-12 lg:grid-cols-[0.72fr_1.28fr]">
          <div>
            <p className="section-label">Сквозной процесс</p>
            <h2 className="mt-3 text-3xl font-semibold tracking-[-0.035em] sm:text-4xl">
              От поставки до управленческого решения
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-muted-foreground">
              ERP убирает разрывы между складом, филиалами, сотрудниками и продажами. Результат каждого шага сразу доступен следующей роли.
            </p>
          </div>

          <div className="relative">
            {flow.map((item, index) => {
              const FlowIcon = item.icon;
              return (
                <div key={item.step} className="group relative flex gap-5 pb-8 last:pb-0">
                  {index < flow.length - 1 && (
                    <span className="absolute left-5 top-10 h-[calc(100%-1rem)] w-px bg-border" />
                  )}
                  <span className="relative z-10 flex size-10 shrink-0 items-center justify-center rounded-lg border border-border bg-card text-muted-foreground transition-colors group-hover:border-primary/50 group-hover:text-primary">
                    <FlowIcon className="size-4" />
                  </span>
                  <div className="flex-1 border-b border-border pb-8 group-last:border-0 group-last:pb-0 sm:flex sm:items-start sm:justify-between sm:gap-8">
                    <div>
                      <p className="text-base font-medium">{item.title}</p>
                      <p className="mt-1 text-sm leading-6 text-muted-foreground">{item.text}</p>
                    </div>
                    <span className="mt-2 inline-block font-mono text-xs text-muted-foreground sm:mt-1">STEP {item.step}</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section
        id="access"
        className="relative z-10 py-20 lg:py-28"
      >
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_1.25fr] lg:items-end">
            <div>
              <p className="section-label">Демонстрация продукта</p>
              <h2 className="mt-3 max-w-2xl text-3xl font-semibold tracking-[-0.035em] sm:text-4xl lg:text-5xl">
                Перейдите в любой модуль на рабочем хостинге.
              </h2>
              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                Все кнопки ведут на действующие разделы системы. Учетные данные предоставляются отдельно ответственному представителю клиента.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {modules.map((module) => {
                const AccessIcon = module.icon;
                return (
                  <a
                    key={module.id}
                    href={module.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group flex items-center gap-4 rounded-xl border border-border bg-card p-4 transition-all hover:-translate-y-0.5 hover:border-primary/45 hover:bg-muted/30"
                  >
                    <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <AccessIcon className="size-4" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block truncate text-sm font-medium">{module.title}</span>
                      <span className="mt-1 block text-xs text-muted-foreground">{module.eyebrow}</span>
                    </span>
                    <ExternalLink className="size-4 text-muted-foreground transition-colors group-hover:text-primary" />
                  </a>
                );
              })}
              <a
                href={links.login}
                target="_blank"
                rel="noreferrer"
                className="group flex items-center gap-4 rounded-xl border border-primary/30 bg-primary p-4 text-primary-foreground transition-all hover:-translate-y-0.5 hover:bg-primary/85"
              >
                <span className="flex size-10 shrink-0 items-center justify-center rounded-lg bg-primary-foreground/10">
                  <ShieldCheck className="size-4" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-sm font-medium">Страница входа</span>
                  <span className="mt-1 block text-xs text-primary-foreground/70">Авторизация в ERP</span>
                </span>
                <ArrowRight className="size-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="relative z-10 bg-background">
        <div className="mx-auto max-w-7xl px-5 py-10 lg:px-8">
          <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-40 items-center rounded-lg bg-white px-2 shadow-sm ring-1 ring-black/8">
                <Image
                  src="/argynbektegi-doner-logo.png"
                  alt="Argynbektegi doner"
                  width={2034}
                  height={773}
                  className="h-full w-full object-contain"
                />
              </span>
              <div>
                <p className="text-sm font-medium">Argynbektegi doner · ERP</p>
                <p className="mt-1 text-xs text-muted-foreground">Единая операционная система сети</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-5 text-sm text-muted-foreground">
              <a href={links.system} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">Главная система</a>
              <a href={links.login} target="_blank" rel="noreferrer" className="transition-colors hover:text-foreground">Вход</a>
              <span className="inline-flex items-center gap-2"><span className="size-1.5 rounded-full bg-status" /> Online 24/7</span>
            </div>
          </div>
          <Separator className="my-8" />
          <p className="text-xs text-muted-foreground">
            Демонстрация завершенных модулей продукта. Доступ к закрытым разделам предоставляется отдельно.
          </p>
        </div>
      </footer>
    </main>
  );
}
