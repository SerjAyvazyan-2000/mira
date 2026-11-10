/* ==========================================================================
   НАСТРОЙКИ САЙТА — «MirA», Уфа (демо, сделка LID-46)
   Источники: DIKIDI (услуги, цены, длительность, мастера, отзывы, фото салона),
   2ГИС (адрес, этаж, часы, рейтинг, оплата, фото работ).
   Фото подключены ссылками на 2ГИС / DIKIDI. Чтобы положить их в проект:
   node scripts/download-photos.mjs  (скачает в assets/images/salon и заменит ссылки)
   ========================================================================== */

const G  = (s) => `https://${s.split("|")[0]}.photo.2gis.com/images/branch/0/${s.split("|")[1]}.jpg`;   // фото владельца в 2ГИС
const GG = (s) => `https://${s.split("|")[0]}.photo.2gis.com/photo-gallery/${s.split("|")[1]}_1280x.jpg`; // фото посетителей в 2ГИС
const PH = {
  // DIKIDI — фото салона
  interiorPink: "https://f1.dikidi.net/c12/v11616/39v1lm1p6i.jpg",   // зал, розовые стены, овальные зеркала
  interiorNails:"https://f1.dikidi.net/c12/v11616/2okb3cmk9c.jpg",   // зона маникюра
  interiorLobby:"https://f1.dikidi.net/c12/v11616/rak4jsk3f4.jpg",   // ресепшен, золотой декор
  nailsNude:    "https://f2.dikidi.net/c51/v50081/4pa85qffnc.jpg",   // маникюр нюд с дизайном
  nailsBlue:    "https://f2.dikidi.net/c51/v50081/5a02rfftcq.jpg",   // маникюр синий с блёстками
  nailsGlitter: "https://f2.dikidi.net/c51/v50081/1mfcau9h0g.jpg",   // маникюр с переливом
  lashes:       "https://f2.dikidi.net/c51/v50019/5voen8fhe7.jpg",   // наращивание ресниц
  lashes2:      "https://f2.dikidi.net/c51/v50019/2908b3lam1.jpg",   // наращивание ресниц
  browsBA:      "https://f1.dikidi.net/c12/v11618/6qblaate8c.jpg",   // брови до/после — парный кадр (сверху до, снизу после)
  // 2ГИС
  curls:        GG("i4|1e39ab1e-bd23-44e9-902a-349b9903585b"),        // локоны
  copper:       GG("i1|8ebff142-2bef-44b3-beab-13d09dd887d8"),        // медное окрашивание
  ombre:        GG("i8|6934966d-68b7-4cbc-99b2-1a00f6fc24bd"),        // растяжка цвета
  blond:        GG("i6|3813e87b-79df-4a64-be4a-896b272e8c70"),        // блонд
  dark:         GG("i1|b71a8ecd-02f9-44a3-9183-73c83099269d"),        // тёмные гладкие волосы
  blondLong:    GG("i9|6a9b8ec3-1fb6-463a-ab4c-87714f5a8da4"),        // длинный блонд
  nailsGreen:   GG("i7|670bccbe-3109-456e-a9b5-bd7dd8271a93"),        // маникюр с дизайном
  nailsPink:    G("i1|30258560176349489_0452"),                       // маникюр розовый (фото владельца)
  nailsGold:    G("i7|30258560176349491_922c"),                       // маникюр (фото владельца)
  lashesOwner:  G("i0|30258560176349481_e900"),                       // ресницы (фото владельца)
  // DIKIDI — портфолио мастеров
  // Рената (парикмахер)
  hairWaves1:   "https://f2.dikidi.net/c17/v16597/6e5ppmc532.jpg",
  hairWaves2:   "https://f2.dikidi.net/c17/v16597/4kq64jhbpj.jpg",
  hairBob:      "https://f2.dikidi.net/c17/v16597/4757feu2os.jpg",
  hairBalayage: "https://f2.dikidi.net/c19/v18079/7civ0tl9lo.jpg",
  hairAsh:      "https://f2.dikidi.net/c19/v18079/7cc5qqceo6.jpg",
  hairStraight: "https://f2.dikidi.net/c21/v20427/m3jite8695.jpg",
  hairSilk:     "https://f2.dikidi.net/c21/v20427/5nekqigh9u.jpg",
  hairCurls:    "https://f2.dikidi.net/c21/v20427/4a1e7bi9u1.jpg",
  menCut1:      "https://f2.dikidi.net/c21/v20427/1r75fpve59.jpg",
  menCut2:      "https://f2.dikidi.net/c21/v20428/fagobndgd8.jpg",
  // Анна (маникюр, перманент)
  nPinkGold:    "https://f1.dikidi.net/c13/v12487/1mstqk6qp8.jpg",
  nGreen:       "https://f1.dikidi.net/c13/v12487/5mc9425bg9.jpg",
  nRed:         "https://f1.dikidi.net/c13/v12487/1uvgkqqsmv.jpg",
  nAqua:        "https://f1.dikidi.net/c13/v12487/6nk0ug8eqj.jpg",
  nBlue:        "https://f1.dikidi.net/c13/v12488/1hu2c0ifud.jpg",
  nFrench:      "https://f1.dikidi.net/c13/v12910/67ed4ne67k.jpg",
  nPinkBlack:   "https://f1.dikidi.net/c13/v12910/3hns83quof.jpg",
  lashLine:     "https://f1.dikidi.net/c13/v12910/6blu4vfi45.jpg",
  nBW:          "https://f2.dikidi.net/c17/v16645/4kjkat7jra.jpg",
  nFrench2:     "https://f2.dikidi.net/c17/v16645/s937qa1nh3.jpg",
  // Алёна (бровист)
  browsPair1:   "https://f2.dikidi.net/c18/v17610/53fnqjpqrc.jpg",   // брови до/после, 1024 px (сверху до, снизу после)
  browsPair2:   "https://f2.dikidi.net/c18/v17610/4r6dmv3m2h.jpg",
  lamiPair1:    "https://f2.dikidi.net/c18/v17610/79hu8amtlk.jpg",
  lamiPair2:    "https://f2.dikidi.net/c18/v17610/3f3gbmvu2p.jpg",
  lash1:        "https://f2.dikidi.net/c21/v20427/hls6lnb2i9.jpg",
  lash2:        "https://f2.dikidi.net/c21/v20427/21lj6qogej.jpg",
  lash3:        "https://f2.dikidi.net/c21/v20427/2jhlufacdv.jpg",
  lash4:        "https://f1.dikidi.net/c12/v11618/5s507p9bbd.jpg",
  brow1:        "https://f1.dikidi.net/c12/v11618/4r1nqjbtv9.jpg",
  browsPair3:   "https://f1.dikidi.net/c12/v11618/2589abi30k.jpg",
  lash5:        "https://f1.dikidi.net/c14/v13622/2i6ahloasj.jpg",
  lash6:        "https://f2.dikidi.net/c27/v26380/4mkn1nuvkg.jpg",
  // DIKIDI — фото салона (кабинеты)
  cabinetCouch: "https://f2.dikidi.net/c16/v15144/2g5pn9a0bf.jpg",
  cabinetMirror:"https://f2.dikidi.net/c16/v15144/5rp22275av.jpg",
  // мастера — фото из профилей DIKIDI
  anna:    "https://f1.dikidi.net/c13/v12487/31o53np3as.jpg",
  ariana:  "https://f2.dikidi.net/c16/v15125/7fki6p4t7o.jpg",
  arina:   "https://f2.dikidi.net/c51/v50091/7n07pjevnk.jpg",
  alena:   "https://f2.dikidi.net/c18/v17610/7fl4ahlmpi.jpg",
  polina:  "https://f2.dikidi.net/c24/v23520/630meau9ic.jpg",
  tatiana: "https://f2.dikidi.net/c51/v50091/2e7rvljfmk.jpg",
};

window.SITE = {
  brand: {
    name: "MirA",
    accent: "",
    tagline: "beauty studio",
    title: "MirA — студия красоты, Уфа",
    city: "Уфа",
  },

  /* --- Цвета логотипа (золото на чёрном) и интерьера (пудрово-розовый) --- */
  theme: {
    ink: "#16110e",
    paper: "#faf5f1",
    accent: "#8d6a2c",
    blush: "#efd3cd",
  },

  booking: "https://dikidi.ru/ru/profile/studiya_krasoty_mira_1542866",

  contacts: {
    phone: "+7 (987) 609-24-29",
    phoneRaw: "+79876092429",
    whatsapp: "79876092429",
    telegram: "+79876092429",
    vk: "studio_mira47",
    address: "ул. Мира, 47",
    addressNote: "1 этаж · Черниковка, Орджоникидзевский район",
    hours: [
      ["Ежедневно", "10:00 — 20:00"],
      ["Запись", "онлайн и по телефону"],
    ],
    mapEmbed: "https://yandex.ru/map-widget/v1/?text=%D0%A3%D1%84%D0%B0%2C%20%D1%83%D0%BB%D0%B8%D1%86%D0%B0%20%D0%9C%D0%B8%D1%80%D0%B0%2C%2047&z=17",
    mapLink: "https://2gis.ru/ufa/firm/70000001087430430",
  },

  hero: {
    eyebrow: "Стрижки · Окрашивание · Ногти · Брови · Ресницы",
    title: ["Ваш мир", "красоты —", "на Мира, 47"],
    accentWord: 2,
    text: "Студия красоты в Черниковке: стрижки и сложное окрашивание, маникюр и педикюр, оформление бровей и наращивание ресниц. Ежедневно с 10:00 до 20:00.",
    cta: "Записаться онлайн",
    images: [PH.interiorPink, PH.curls, PH.nailsNude],
    badge: "онлайн-запись • DIKIDI • рейтинг 4.9 • ",
  },

  marquee: ["Стрижки", "Air Touch", "Окрашивание", "Маникюр", "Педикюр", "Брови", "Ресницы", "Укладки", "Уход для волос"],

  /* --- Цифры: 2ГИС и DIKIDI --- */
  stats: [
    { value: 4.9, suffix: "", label: "рейтинг в 2ГИС и DIKIDI", decimals: 1 },
    { value: 331, suffix: "", label: "оценка в DIKIDI" },
    { value: 130, suffix: "", label: "услуг в онлайн-записи" },
    { value: 13,  suffix: "", label: "мастеров в команде" },
  ],

  /* --- Услуги: цены и длительность из онлайн-записи DIKIDI. from — цена «от» --- */
  services: [
    { cat: "Стрижки", items: [
      { name: "Женская стрижка", desc: "Форма под ваш тип волос", price: 1000, from: true, min: 60, img: PH.hairBob, calc: true },
      { name: "Прямой срез с мытьём и сушкой", desc: "Сушка и вытягивание утюжком", price: 1100, min: 60, img: PH.hairStraight },
      { name: "Стрижка одним срезом", desc: "Без мытья и сушки", price: 700, min: 30, img: PH.hairSilk },
      { name: "Частичная стрижка", desc: "С мытьём и сушкой", price: 800, from: true, min: 60, img: PH.hairWaves2 },
      { name: "Чёлка", desc: "Быстрое обновление формы", price: 300, min: 15, img: PH.hairAsh, calc: true },
      { name: "Мужская стрижка", desc: "Классика в мужском зале", price: 900, min: 40, img: PH.menCut1, calc: true },
      { name: "Креативная мужская стрижка", desc: "Фейд, кроп, андеркат", price: 1000, min: 40, img: PH.menCut2 },
      { name: "Детская стрижка", desc: "До 7 лет", price: 700, from: true, min: 40, img: PH.interiorPink },
    ]},
    { cat: "Окрашивание", items: [
      { name: "Air Touch, средняя длина", desc: "Мягкий переход цвета", price: 8000, from: true, min: 300, img: PH.hairBalayage, calc: true },
      { name: "Air Touch, длинные волосы", desc: "Мягкий переход цвета", price: 15000, from: true, min: 420, img: PH.blondLong },
      { name: "Мелирование, балаяж, шатуш — короткие", desc: "Сложные техники окрашивания", price: 4000, from: true, min: 210, img: PH.hairAsh },
      { name: "Мелирование, балаяж, шатуш — средняя длина", desc: "Сложные техники окрашивания", price: 6000, from: true, min: 270, img: PH.ombre, calc: true },
      { name: "Мелирование, балаяж, шатуш — длинные", desc: "Сложные техники окрашивания", price: 10000, from: true, min: 300, img: PH.hairWaves1 },
      { name: "Однотонное окрашивание, тонирование — короткие", desc: "Один тон по всей длине", price: 4000, from: true, min: 120, img: PH.copper },
      { name: "Однотонное окрашивание, тонирование — средняя длина", desc: "Один тон по всей длине", price: 4500, from: true, min: 150, img: PH.hairStraight, calc: true },
      { name: "Однотонное окрашивание, тонирование — длинные", desc: "Один тон по всей длине", price: 6000, from: true, min: 180, img: PH.dark },
      { name: "Окрашивание корней в 1 тон", desc: "До 2 см", price: 3000, from: true, min: 120, img: PH.blond, calc: true },
    ]},
    { cat: "Ногтевой сервис", items: [
      { name: "Комбинированный маникюр", desc: "Без покрытия", price: 1000, from: true, min: 30, img: PH.nFrench },
      { name: "Маникюр с покрытием гель-лак", desc: "Комбинированный маникюр + однотон", price: 1900, from: true, min: 120, img: PH.nPinkGold, calc: true },
      { name: "Маникюр + гель-лак + дизайн", desc: "Дизайн на всех ногтях", price: 2300, from: true, min: 120, img: PH.nGreen, calc: true },
      { name: "Японский маникюр", desc: "Уход и блеск натуральных ногтей", price: 1500, from: true, min: 60, img: PH.nFrench2 },
      { name: "Наращивание ногтей", desc: "Длина и форма на выбор", price: 2600, from: true, min: 120, img: PH.nPinkBlack, calc: true },
      { name: "Бондирование ногтей", desc: "Укрепление натуральной пластины", price: 1900, from: true, min: 90, img: PH.nAqua },
      { name: "Мужской маникюр", desc: "Аккуратно и без покрытия", price: 1300, from: true, min: 40, img: PH.interiorNails },
      { name: "Педикюр полный + гель-лак", desc: "Обработка стоп и пальчиков с покрытием", price: 2200, from: true, min: 90, img: PH.nRed, calc: true },
      { name: "Педикюр полный без покрытия", desc: "Обработка стоп и пальчиков", price: 1800, from: true, min: 60, img: PH.nBW },
      { name: "Пальчики ног + гель-лак", desc: "Обработка пальчиков с покрытием", price: 2000, from: true, min: 60, img: PH.nBlue },
    ]},
    { cat: "Брови", items: [
      { name: "Оформление бровей", desc: "Коррекция формы", price: 600, from: true, min: 30, img: PH.brow1, calc: true },
      { name: "Оформление + окрашивание бровей", desc: "Форма и цвет", price: 1200, from: true, min: 45, img: PH.browsPair2, calc: true },
      { name: "Долговременная укладка бровей", desc: "С коррекцией и окрашиванием", price: 1800, from: true, min: 60, img: PH.browsPair1, calc: true },
      { name: "Окрашивание бровей", desc: "Без коррекции", price: 600, from: true, min: 20, img: PH.browsPair3 },
      { name: "Осветление бровей", desc: "Мягкий светлый тон", price: 500, min: 30, img: PH.browsBA },
      { name: "Перманентный макияж бровей", desc: "Стойкий результат", price: 6000, min: 150, img: PH.browsPair2 },
      { name: "Перманентный макияж губ", desc: "Стойкий результат", price: 6000, min: 150, img: PH.interiorLobby },
    ]},
    { cat: "Ресницы", items: [
      { name: "Ламинирование + окрашивание ресниц", desc: "Изгиб и цвет своих ресниц", price: 1600, from: true, min: 60, img: PH.lamiPair1, calc: true },
      { name: "Ламинирование + ботокс ресниц", desc: "Изгиб, цвет и уход", price: 2200, min: 60, img: PH.lamiPair2 },
      { name: "Наращивание ресниц, классика", desc: "Естественный объём", price: 2000, min: 150, img: PH.lash1, calc: true },
      { name: "Наращивание 1,5D", desc: "Лёгкий объём", price: 2100, min: 150, img: PH.lash2 },
      { name: "Наращивание 2D", desc: "Двойной объём", price: 2200, min: 150, img: PH.lash3, calc: true },
      { name: "Наращивание 2,5D", desc: "Выразительный объём", price: 2300, min: 150, img: PH.lash4 },
      { name: "Наращивание 3D", desc: "Выразительный объём", price: 2400, min: 150, img: PH.lash5 },
      { name: "Наращивание 4D", desc: "Максимальный объём", price: 2700, min: 150, img: PH.lash6 },
      { name: "Межресничный татуаж", desc: "Перманентный макияж век", price: 5000, from: true, min: 120, img: PH.lashLine },
      { name: "Окрашивание ресниц", desc: "Без ламинирования", price: 500, min: 15, img: PH.lashesOwner },
    ]},
    { cat: "Укладки и уход", items: [
      { name: "Укладка феном", desc: "Объём и гладкость", price: 800, from: true, min: 60, img: PH.hairStraight, calc: true },
      { name: "Укладка «Локоны»", desc: "Мягкие или чёткие локоны", price: 1500, from: true, min: 60, img: PH.curls, calc: true },
      { name: "Укладка электрическими инструментами", desc: "Утюжок, плойка", price: 1500, from: true, min: 60, img: PH.hairCurls },
      { name: "Причёска", desc: "Под событие и образ", price: 2000, min: 60, img: PH.hairWaves1 },
      { name: "Свадебная причёска", desc: "Для самого важного дня", price: 3000, min: 60, img: PH.hairWaves2 },
      { name: "Дневной или вечерний макияж", desc: "Визаж под образ", price: 2100, from: true, min: 60, img: PH.cabinetMirror },
      { name: "Холодный ботокс для волос", desc: "Глубокое восстановление", price: 1500, from: true, min: 120, img: PH.hairSilk },
      { name: "Уход Keizy, реконструкция", desc: "Восстановление волос", price: 2700, from: true, min: 120, img: PH.hairAsh },
    ]},
    { cat: "Лицо", items: [
      { name: "Чистка лица", desc: "Очищение кожи", price: 2500, min: 60, img: PH.cabinetCouch },
      { name: "Комплекс «чистка лица + пилинг»", desc: "Очищение и обновление кожи", price: 3500, min: 60, img: PH.interiorLobby },
      { name: "Миндальный пилинг", desc: "Мягкое обновление кожи", price: 2000, min: 60, img: PH.cabinetMirror },
      { name: "Массаж лица (фасциопластика)", desc: "Тонус и рельеф лица", price: 2500, min: 60, img: PH.interiorPink },
    ]},
  ],
  currency: "₽",

  /* --- Готовый комплект в конструкторе (по заданию) --- */
  calcPresets: [
    { label: "Комплект: маникюр + укладка + брови", items: ["Маникюр с покрытием гель-лак", "Укладка феном", "Оформление бровей"] },
  ],

  /* --- До / После: один парный кадр из DIKIDI, сверху — до, снизу — после --- */
  beforeAfter: {
    title: "Брови: до и после",
    text: "Реальная работа бровиста Алёны: одни и те же брови на одном снимке. Потяните ползунок, чтобы сравнить.",
    split: PH.browsPair1,
    splitDir: "v",
  },

  /* --- Мастера: имена, специализации, оценки и фото — из DIKIDI --- */
  masters: [
    { name: "Анна", role: "Ведущий мастер · маникюр, педикюр", badge: "★ 5.0 · 88 оценок", img: PH.anna },
    { name: "Ариана", role: "Топ-мастер маникюра", badge: "★ 5.0 · 19 оценок", img: PH.ariana },
    { name: "Алёна", role: "Бровист", badge: "★ 5.0 · 13 оценок", img: PH.alena },
    { name: "Полина", role: "Мастер по наращиванию ресниц", badge: "★ 5.0 · 14 оценок", img: PH.polina },
    { name: "Татьяна", role: "Мастер перманентного макияжа", badge: "★ 5.0 · 9 оценок", img: PH.tatiana },
    { name: "Арина", role: "Мастер маникюра и педикюра", badge: "★ 5.0 · 7 оценок", img: PH.arina },
  ],

  /* --- Портфолио --- */
  gallery: [PH.hairBalayage, PH.nGreen, PH.lash1, PH.hairWaves1, PH.nBlue, PH.copper, PH.lamiPair1, PH.hairCurls, PH.nPinkGold, PH.browsPair3, PH.menCut2, PH.curls],

  /* --- Отзывы: реальные, с DIKIDI --- */
  reviews: [
    { name: "Елена", service: "Женская стрижка · мастер Рената", text: "Сегодня первый раз посетила вашу студию красоты и осталась очень довольна. Прекрасный, доброжелательный персонал. Мастер Рената — профессионал своего дела. Ушла в прекрасном настроении." },
    { name: "Луиза", service: "Чёлка · мастер Рената", text: "Чёлку она мне сделала меньше чем за десять минут, я даже испугаться не успела. Получилось аккуратно и быстро, без нервов. Теперь хожу и думаю: зачем я вообще тянула с этим так долго? Спасибо, Рената!" },
    { name: "Линиза", service: "Наращивание ногтей · мастер Арина", text: "Спасибо мастеру Арине! Очень красиво, воплотит любые идеи." },
    { name: "Рената С.", service: "Наращивание ногтя · мастер Ариана", text: "Всё было отлично, как всегда, спасибо огромное!" },
  ],
  reviewsSource: "Отзывы с DIKIDI",

  faq: [
    ["Как записаться?", "Онлайн через DIKIDI — в любое время, или по телефону, в WhatsApp и Telegram: +7 (987) 609-24-29."],
    ["Где вы находитесь?", "Уфа, улица Мира, 47, 1 этаж — микрорайон Черниковка, Орджоникидзевский район. Есть пандус."],
    ["Как можно оплатить?", "Картой, наличными или по QR-коду."],
    ["Какой у вас график?", "Ежедневно с 10:00 до 20:00."],
    ["Есть ли Wi-Fi?", "Да, для гостей студии есть бесплатный Wi-Fi."],
  ],

  form: {
    endpoint: "",
    successText: "Заявка открылась в WhatsApp — отправьте сообщение, и администратор подтвердит время.",
  },

  footer: {
    legal: "Студия красоты «MirA» · Уфа, ул. Мира, 47",
    credit: { text: "", url: "" },
  },
};
