export const tabs = [
  'Full Menu',
  'Inasal Specials',
  'Combo Meals',
  'Sisig',
  'Silog',
  'Filipino Classics',
  'Small Bites',
  'Desserts'
];

export const menu = [
  // Inasal Specials
  {
    id: 1,
    name: 'Inasal Pecho',
    price: 37,
    image: '/menuImages/inasal-pecho.webp',
    alt: 'Grilled chicken breast inasal served with unlimited rice',
    tabs: ['Full Menu', 'Inasal Specials'],
    label: 'Served with unlimited rice 🔥',
    description: ''
  },
  {
    id: 2,
    name: 'Inasal Paa',
    price: 36,
    image: '/menuImages/inasal-paa.webp',
    alt: 'Grilled chicken leg inasal served with unlimited rice',
    tabs: ['Full Menu', 'Inasal Specials'],
    label: 'Served with unlimited rice 🔥',
    description: ''
  },
  {
    id: 3,
    name: 'Grilled Bangus',
    price: 32,
    image: '/menuImages/inasal-grilled-bangus2.webp',
    alt: 'Grilled bangus milkfish Filipino style',
    tabs: ['Full Menu', 'Inasal Specials'],
    label: 'Smoky & tender whole grilled milkfish 🔥'
  },

  // Combo Meals
  {
    id: 4,
    name: 'Inasal Duo Combo',
    price: 61,
    image: '/menuImages/inasal-duo.webp',
    alt: 'Inasal duo combo meal with 2 inasal, side dish and drink',
    tabs: ['Full Menu', 'Combo Meals'],
    label: 'Unlimited rice 🔥, 2 inasal, 1 side, 1 drink'
  },
  {
    id: 5,
    name: 'Inasal Halo Combo',
    price: 53,
    image: '/menuImages/inasal-halo.webp',
    alt: 'Inasal halo combo meal with inasal, side, dessert and drink',
    tabs: ['Full Menu', 'Combo Meals'],
    label: 'Unlimited rice 🔥, 1 inasal, 1 side, 1 drink, 1 dessert'
  },
  {
    id: 6,
    name: 'Silog Supreme Combo',
    price: 38,
    image: '/menuImages/silog-supreme.webp',
    alt: 'Silog supreme combo with sisig or silog, side and drink',
    tabs: ['Full Menu', 'Combo Meals'],
    label: 'Unlimited rice 🔥, 1 sisig or silog, 1 side, 1 drink'
  },
  {
    id: 7,
    name: 'Silog Halo Combo',
    price: 46,
    image: '/menuImages/silog-halo.webp',
    alt: 'Silog halo combo with sisig or silog, dessert and drink',
    tabs: ['Full Menu', 'Combo Meals'],
    label: 'Unlimited rice 🔥, 1 sisig or silog, 1 dessert, 1 drink'
  },

  // Sisig
  {
    id: 8,
    name: 'Beef Sisig',
    price: 22,
    image: '/menuImages/sisig-beef.webp',
    alt: 'Sizzling beef sisig on a hot plate',
    tabs: ['Full Menu', 'Sisig'],
    label: 'Served on a sizzling plate 🔥'
  },
  {
    id: 9,
    name: 'Chicken Sisig',
    price: 22,
    image: '/menuImages/sisig-chicken.webp',
    alt: 'Sizzling chicken sisig on a hot plate',
    tabs: ['Full Menu', 'Sisig'],
    label: 'Served on a sizzling plate 🔥'
  },
  {
    id: 10,
    name: 'Bangus Sisig',
    price: 22,
    image: '/menuImages/sisig-bangus.webp',
    alt: 'Sizzling bangus milkfish sisig on a hot plate',
    tabs: ['Full Menu', 'Sisig'],
    label: 'Served on a sizzling plate 🔥'
  },
  {
    id: 11,
    name: 'Tofu Sisig',
    price: 22,
    image: '/menuImages/sisig-tofu.webp',
    alt: 'Sizzling tofu sisig on a hot plate',
    tabs: ['Full Menu', 'Sisig'],
    label: 'Served on a sizzling plate 🔥',
    isObjectFit: true
  },

  // Silog
  {
    id: 12,
    name: 'Tapsilog',
    price: 31,
    image: '/menuImages/silog-tapa.webp',
    alt: 'Tapsilog with tapa beef, sinangag fried rice and egg',
    tabs: ['Full Menu', 'Silog'],
    label: 'Sweet & savory cured beef'
  },
  {
    id: 13,
    name: 'Bangsilog',
    price: 31,
    image: '/menuImages/silog-bang.webp',
    alt: 'Bangsilog with grilled bangus, sinangag fried rice and egg',
    tabs: ['Full Menu', 'Silog'],
    label: 'Freshly grilled milkfish'
  },
  {
    id: 14,
    name: 'Longsilog',
    price: 22,
    image: '/menuImages/silog-long.webp',
    alt: 'Longsilog with longganisa sausage, sinangag fried rice and egg',
    tabs: ['Full Menu', 'Silog'],
    label: 'Sweet Filipino sausage'
  },

  // Filipino Classics
  {
    id: 15,
    name: 'Bulalo',
    price: 28,
    image: '/menuImages/fc-bulalo.webp',
    alt: 'Filipino bulalo beef bone marrow soup served with rice',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Served with rice 🔥'
  },
  {
    id: 16,
    name: 'Beef Pares',
    price: 31,
    image: '/menuImages/fc-beef-pares1.webp',
    alt: 'Filipino beef pares braised beef served with rice',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Served with rice 🔥'
  },
  {
    id: 17,
    name: 'Laing',
    price: 20,
    image: '/menuImages/fc-laing1.webp',
    alt: 'Filipino laing taro leaves in coconut milk served with rice',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Served with rice 🔥'
  },
  {
    id: 18,
    name: 'Chicken Katsu',
    price: 28,
    image: '/menuImages/fc-chicken-katsu.webp',
    alt: 'Crispy chicken katsu with choice of gravy teriyaki or curry sauce',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Gravy, teriyaki, or curry · Free lemonade or iced tea'
  },
  {
    id: 19,
    name: 'Palabok',
    price: 31,
    image: '/menuImages/fc-palabok1.webp',
    alt: 'Filipino palabok noodles with shrimp sauce and toppings',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Smothered in savory shrimp sauce 🍤'
  },
  {
    id: 20,
    name: 'Bihon',
    price: 20,
    image: '/menuImages/fc-bihon1.webp',
    alt: 'Filipino bihon stir fried rice noodles',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Light & savory stir-fried noodles'
  },
  {
    id: 21,
    name: 'Spaghetti',
    price: 20,
    image: '/menuImages/fc-spaghetti1.webp',
    alt: 'Filipino style sweet spaghetti with hotdog and cheese',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Sweet & cheesy Filipino style 🧀'
  },

  // Small Bites
  {
    id: 22,
    name: 'Lumpiang Togue',
    price: 12,
    image: '/menuImages/lumpiang-toge.webp',
    alt: 'Lumpiang togue crispy bean sprout spring rolls 3 pieces',
    tabs: ['Full Menu', 'Small Bites'],
    label: 'Crispy bean sprout spring rolls · 3 pcs'
  },
  {
    id: 23,
    name: 'Sisig Lumpia',
    price: 12,
    image: '/menuImages/sisig-lumpia.webp',
    alt: 'Crispy sisig lumpia spring rolls 3 pieces choice of beef chicken or bangus',
    tabs: ['Full Menu', 'Small Bites'],
    label: 'Beef, chicken, or bangus · 3 pcs'
  },
  {
    id: 24,
    name: 'Isaw',
    price: 12,
    image: '/menuImages/isaw.webp',
    alt: 'Filipino isaw grilled chicken intestine skewers',
    tabs: ['Full Menu', 'Small Bites'],
    label: 'Grilled chicken intestine skewers 🔥'
  },

  // Desserts
  {
    id: 25,
    name: 'Turon with Langka',
    price: null,
    image: '/menuImages/ds-turon-with-langka.webp',
    alt: 'Filipino turon banana spring rolls with langka jackfruit 3 pieces',
    tabs: ['Full Menu', 'Desserts'],
    label: 'Crispy banana & jackfruit rolls · 3 pcs — TBC'
  },
  {
    id: 26,
    name: 'Banana con Yelo',
    price: 15,
    image: '/menuImages/ds-babana-con-yelo1.webp',
    alt: 'Filipino banana con yelo shaved ice dessert with banana',
    tabs: ['Full Menu', 'Desserts'],
    label: 'Sweet banana with shaved ice & milk'
  },
  {
    id: 27,
    name: 'Halo Halo',
    price: 20,
    image: '/menuImages/ds-halo-halo.png',
    alt: 'Filipino halo halo mixed shaved ice dessert',
    tabs: ['Full Menu', 'Desserts'],
    label: 'Mixed fruits, jellies & shaved ice 🍧'
  },
  {
    id: 28,
    name: 'Bibingka',
    price: 12,
    image: '/menuImages/ds-bibingka.webp',
    alt: 'Filipino bibingka rice cake 2 pieces',
    tabs: ['Full Menu', 'Desserts'],
    label: 'Soft & fluffy rice cake · 2 pcs'
  },
  {
    id: 29,
    name: 'Coffee Jelly',
    price: 12,
    image: '/menuImages/ds-coffee-jelly1.webp',
    alt: 'Filipino coffee jelly dessert with cream',
    tabs: ['Full Menu', 'Desserts'],
    label: 'Coffee jelly in sweet cream'
  },
  {
    id: 30,
    name: 'Leche Flan',
    price: 15,
    image: '/menuImages/ds-leche-flan.webp',
    alt: 'Filipino leche flan caramel custard dessert',
    tabs: ['Full Menu', 'Desserts'],
    label: 'Silky smooth caramel custard'
  }
];
