export const tabs = [
  'Full Menu',
  'Inasal Specials',
  'Sisig',
  'Silog',
  'Combo Meals',
  'Filipino Classics',
  'Small Bites',
  'Desserts'
];

export const menu = [
  // Inasal Specials
  {
    name: 'Inasal Pecho',
    price: 28,
    image: '/menuImages/inasal-pecho.webp',
    alt: 'Grilled chicken breast inasal served with unlimited rice',
    tabs: ['Full Menu', 'Inasal Specials'],
    label: 'Served with unlimited rice 🔥',
    description: ''
  },
  {
    name: 'Inasal Paa',
    price: 27,
    image: '/menuImages/inasal-paa.webp',
    alt: 'Grilled chicken leg inasal served with unlimited rice',
    tabs: ['Full Menu', 'Inasal Specials'],
    label: 'Served with unlimited rice 🔥',
    description: ''
  },
  {
    name: 'Grilled Bangus',
    price: 32,
    image: '/menuImages/inasal-grilled-bangus2.webp',
    alt: 'Grilled bangus milkfish Filipino style',
    tabs: ['Full Menu', 'Inasal Specials'],
    label: '',
    description: ''
  },

  // Combo Meals
  {
    name: 'Inasal Duo Combo',
    price: 45,
    image: '/menuImages/inasal-duo.webp',
    alt: 'Inasal duo combo meal with 2 inasal, side dish and drink',
    tabs: ['Full Menu', 'Combo Meals'],
    label: 'Served with unlimited rice 🔥',
    description:
      '2 inasal (paa or pecho), 1 side (palabok, bihon, or lumpiang togue), 1 drink (lemonade, iced tea, water or +3 AED for soft drinks)'
  },
  {
    name: 'Inasal Halo Combo',
    price: 39,
    image: '/menuImages/inasal-halo.webp',
    alt: 'Inasal halo combo meal with inasal, side, dessert and drink',
    tabs: ['Full Menu', 'Combo Meals'],
    label: 'Served with unlimited rice 🔥',
    description:
      '1 inasal (paa or pecho), 1 side (palabok, bihon, or lumpiang togue), 1 dessert (halo halo, coffee jelly, or banana con yelo), 1 drink (lemonade, iced tea, water or +3 AED for soft drinks)'
  },
  {
    name: 'Silog Supreme Combo',
    price: 28,
    image: '/menuImages/silog-supreme.webp',
    alt: 'Silog supreme combo with sisig or silog, side and drink',
    tabs: ['Full Menu', 'Combo Meals'],
    label: '',
    description:
      '1 sisig or silog (beef, chicken, bangus, or tofu), 1 side (palabok, bihon, or lumpiang togue), 1 drink (lemonade, iced tea, water or +3 AED for soft drinks)'
  },
  {
    name: 'Silog Halo Combo',
    price: 34,
    image: '/menuImages/silog-halo.webp',
    alt: 'Silog halo combo with sisig or silog, dessert and drink',
    tabs: ['Full Menu', 'Combo Meals'],
    label: '1 sisig or silog, 1 dessert, 1 drink',
    description:
      '1 sisig or silog (beef, chicken, bangus, or tofu), 1 dessert (halo halo, coffee jelly, or banana con yelo), 1 drink (lemonade, iced tea, water or +3 AED for soft drinks)'
  },

  // Sisig
  {
    name: 'Beef Sisig',
    price: 22,
    image: '/menuImages/sisig-beef.webp',
    alt: 'Sizzling beef sisig on a hot plate',
    tabs: ['Full Menu', 'Sisig'],
    label: '',
    description: 'Choice of beef, chicken, bangus, or tofu'
  },
  {
    name: 'Chicken Sisig',
    price: 22,
    image: '/menuImages/sisig-chicken.webp',
    alt: 'Sizzling chicken sisig on a hot plate',
    tabs: ['Full Menu', 'Sisig'],
    label: '',
    description: 'Choice of beef, chicken, bangus, or tofu'
  },
  {
    name: 'Bangus Sisig',
    price: 22,
    image: '/menuImages/sisig-bangus.webp',
    alt: 'Sizzling bangus milkfish sisig on a hot plate',
    tabs: ['Full Menu', 'Sisig'],
    label: '',
    description: 'Choice of beef, chicken, bangus, or tofu'
  },
  {
    name: 'Tofu Sisig',
    price: 22,
    image: '/menuImages/sisig-tofu.webp',
    alt: 'Sizzling tofu sisig on a hot plate',
    tabs: ['Full Menu', 'Sisig'],
    label: '',
    description: 'Choice of beef, chicken, bangus, or tofu',
    isObjectFit: true
  },

  // Silog
  {
    name: 'Tapsilog',
    price: 22,
    image: '/menuImages/silog-tapa.webp',
    alt: 'Tapsilog with tapa beef, sinangag fried rice and egg',
    tabs: ['Full Menu', 'Silog'],
    label: '',
    description: ''
  },
  {
    name: 'Bangsilog',
    price: 22,
    image: '/menuImages/silog-bang.webp',
    alt: 'Bangsilog with grilled bangus, sinangag fried rice and egg',
    tabs: ['Full Menu', 'Silog'],
    label: '',
    description: ''
  },
  {
    name: 'Longsilog',
    price: 22,
    image: '/menuImages/silog-long.webp',
    alt: 'Longsilog with longganisa sausage, sinangag fried rice and egg',
    tabs: ['Full Menu', 'Silog'],
    label: '',
    description: ''
  },

  // Filipino Classics
  {
    name: 'Bulalo',
    price: 28,
    image: '/menuImages/fc-bulalo.webp',
    alt: 'Filipino bulalo beef bone marrow soup served with rice',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Served with rice',
    description: ''
  },
  {
    name: 'Kansi',
    price: 28,
    image: 'none yet',
    alt: 'Filipino kansi sour beef bone marrow soup served with rice',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Served with rice',
    description: ''
  },
  {
    name: 'Beef Pares',
    price: 20,
    image: '/menuImages/fc-beef-pares.webp',
    alt: 'Filipino beef pares braised beef served with rice',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Served with rice',
    description: ''
  },
  {
    name: 'Laing',
    price: 20,
    image: '/menuImages/fc-laing1.webp',
    alt: 'Filipino laing taro leaves in coconut milk served with rice',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Served with rice',
    description: ''
  },
  {
    name: 'Chicken Katsu',
    price: 28,
    image: '/menuImages/fc-chicken-katsu.webp',
    alt: 'Crispy chicken katsu with choice of gravy teriyaki or curry sauce',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'Free lemonade or iced tea',
    description: 'Choice of gravy, teriyaki, or curry sauce'
  },
  {
    name: 'Palabok',
    price: 20,
    image: '/menuImages/fc-palabok1.webp',
    alt: 'Filipino palabok noodles with shrimp sauce and toppings',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: '',
    description: ''
  },
  {
    name: 'Bihon',
    price: 20,
    image: '/menuImages/fc-bihon1.webp',
    alt: 'Filipino bihon stir fried rice noodles',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: '',
    description: ''
  },
  {
    name: 'Spaghetti',
    price: 20,
    image: '/menuImages/fc-spaghetti1.webp',
    alt: 'Filipino style sweet spaghetti with hotdog and cheese',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: '',
    description: ''
  },
  {
    name: 'Seafood Cajun',
    price: null,
    image: 'none yet',
    alt: 'Seafood cajun dish coming soon',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'TBC',
    description: ''
  },
  {
    name: 'Siomai',
    price: null,
    image: 'none yet',
    alt: 'Filipino siomai dumplings coming soon',
    tabs: ['Full Menu', 'Filipino Classics'],
    label: 'TBC',
    description: ''
  },

  // Small Bites
  {
    name: 'Lumpiang Togue',
    price: 12,
    image: '/menuImages/lumpiang-toge.webp',
    alt: 'Lumpiang togue crispy bean sprout spring rolls 3 pieces',
    tabs: ['Full Menu', 'Small Bites'],
    label: '3 pcs',
    description: ''
  },
  {
    name: 'Sisig Lumpia',
    price: 12,
    image: '/menuImages/sisig-lumpia.webp',
    alt: 'Crispy sisig lumpia spring rolls 3 pieces choice of beef chicken or bangus',
    tabs: ['Full Menu', 'Small Bites'],
    label: '3 pcs',
    description: 'Choice of beef, chicken, or bangus'
  },

  // Desserts
  {
    name: 'Turon with Langka',
    price: null,
    image: '/menuImages/ds-turon-with-langka.webp',
    alt: 'Filipino turon banana spring rolls with langka jackfruit 3 pieces',
    tabs: ['Full Menu', 'Desserts'],
    label: '3 pcs — TBC',
    description: ''
  },
  {
    name: 'Banana con Yelo',
    price: 15,
    image: '/menuImages/ds-babana-con-yelo1.webp',
    alt: 'Filipino banana con yelo shaved ice dessert with banana',
    tabs: ['Full Menu', 'Desserts'],
    label: '',
    description: ''
  },
  {
    name: 'Halo Halo',
    price: 15,
    image: 'none yet',
    alt: 'Filipino halo halo mixed shaved ice dessert',
    tabs: ['Full Menu', 'Desserts'],
    label: '',
    description: ''
  },
  {
    name: 'Bibingka',
    price: 12,
    image: '/menuImages/ds-bibingka.webp',
    alt: 'Filipino bibingka rice cake 2 pieces',
    tabs: ['Full Menu', 'Desserts'],
    label: '2 pcs',
    description: ''
  },
  {
    name: 'Coffee Jelly',
    price: 12,
    image: '/menuImages/ds-coffee-jelly1.webp',
    alt: 'Filipino coffee jelly dessert with cream',
    tabs: ['Full Menu', 'Desserts'],
    label: '',
    description: ''
  },
  {
    name: 'Leche Flan',
    price: 12,
    image: 'none yet',
    alt: 'Filipino leche flan caramel custard dessert',
    tabs: ['Full Menu', 'Desserts'],
    label: '',
    description: ''
  }
];
