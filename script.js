const STORAGE_THEME_KEY = "verdant_tashkent_theme_v2";
const STORAGE_CART_KEY = "verdant_tashkent_cart_v2";
const STORAGE_FAV_KEY = "verdant_tashkent_favs_v2";
const STORAGE_RES_KEY = "verdant_tashkent_res_v2";
const STORAGE_NEWSLETTER_KEY = "verdant_tashkent_news_v2";
const SERVICE_FEE_RATE = 0.1;

const menuDishes = [
  {
    id: 1,
    name: "Avokado va pashot tuxumli briosh",
    category: "nonushta",
    categoryLabel: "Nonushta",
    price: 78000,
    prepTime: "12 daq",
    calories: "390 kkal",
    weight: "260 g",
    rating: 4.9,
    isSpecial: false,
    dietType: "veg",
    dietLabel: "Vegetarian",
    tastingNote: "Qarsildoq sariyog'li briosh va mayin golland sousi uyg'unligi",
    description: "Uyda pishirilgan issiq briosh noni, yetilgan avokado, organik pashot tuxumi, mikrozelen va limonli golland sousi.",
    ingredients: ["Briosh noni", "Yetilgan avokado", "Organik tuxum", "Golland sousi", "Mikrozelen", "Kunjut"],
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 2,
    name: "Qaymoqli rikotta va rezavorli sirniklar",
    category: "nonushta",
    categoryLabel: "Nonushta",
    price: 69000,
    prepTime: "15 daq",
    calories: "350 kkal",
    weight: "240 g",
    rating: 4.8,
    isSpecial: false,
    dietType: "veg",
    dietLabel: "Vegetarian",
    tastingNote: "Yengil vanilli rikotta va barra o'rmon mevalari ta'mi",
    description: "Italiya rikotta pishlog'idan tayyorlangan yumshoq sirniklar, yangi malina, golubika, pista bo'laklari va tog' asali bilan.",
    ingredients: ["Rikotta pishlog'i", "Yangi malina", "Golubika", "Tog' asali", "Yashil pista", "Vanil"],
    image: "https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 3,
    name: "Toshkentcha shohona nonushta seti",
    category: "nonushta",
    categoryLabel: "Nonushta",
    price: 115000,
    prepTime: "16 daq",
    calories: "540 kkal",
    weight: "420 g",
    rating: 4.9,
    isSpecial: false,
    dietType: "chef",
    dietLabel: "Oshpaz tavsiyasi",
    tastingNote: "Sharqona nonushta an'analari va zamonaviy taqdimot",
    description: "Issiq tandir patir, fermerskiy qaymoq, sariyog', asal, zaytun, dudlangan mol go'shti, pishloqlar assortisi va omlet.",
    ingredients: ["Tandir patir", "Fermerskiy qaymoq", "Dudlangan mol go'shti", "Pishloqlar assortisi", "Zaytun", "Omlet"],
    image: "https://images.unsplash.com/photo-1533089860892-a7c6f0a88666?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 4,
    name: "Za'faronli O'rta Yer dengizi levregi",
    category: "asosiy",
    categoryLabel: "Asosiy taomlar",
    price: 188000,
    prepTime: "22 daq",
    calories: "420 kkal",
    weight: "320 g",
    rating: 4.9,
    isSpecial: true,
    dietType: "chef",
    dietLabel: "Oshpaz tavsiyasi",
    tastingNote: "Qarsildoq dengiz balig'i, za'faron ifori va sitrus yangiligi",
    description: "Oltinrang qovurilgan dengiz levregi filesi, limonli za'faron qaylasi, yosh ismaloq barglari va kapari bilan.",
    ingredients: ["Dengiz levregi filesi", "Eron za'faroni", "Limon", "Yosh ismaloq", "Kapari", "Sariyog'"],
    image: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 5,
    name: "Qora tryufelli qo'ziqorinli rizotto",
    category: "asosiy",
    categoryLabel: "Asosiy taomlar",
    price: 149000,
    prepTime: "20 daq",
    calories: "480 kkal",
    weight: "310 g",
    rating: 4.8,
    isSpecial: false,
    dietType: "veg",
    dietLabel: "Vegetarian",
    tastingNote: "Ipakdek mayin arborio guruchi va boy o'rmon tryufeli hidi",
    description: "Italiya Arborio guruchi, o'rmon qo'ziqorinlari, 24 oylik Parmezan pishlog'i va xushbo'y qora tryufel yog'i.",
    ingredients: ["Arborio guruchi", "O'rmon qo'ziqorinlari", "Parmezan", "Qora tryufel yog'i", "Sabzavot bulyoni", "Timyan"],
    image: "https://images.unsplash.com/photo-1476124369491-e7addf5db371?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 6,
    name: "Anor glazurli o'rdak ko'kragi",
    category: "asosiy",
    categoryLabel: "Asosiy taomlar",
    price: 194000,
    prepTime: "24 daq",
    calories: "510 kkal",
    weight: "300 g",
    rating: 4.9,
    isSpecial: false,
    dietType: "chef",
    dietLabel: "Oshpaz tavsiyasi",
    tastingNote: "Yumshoq pushti go'sht va nordon-shirin anor balansi",
    description: "Past haroratda pishirilgan o'rdak ko'kragi, batat kremi, qovurilgan anjir va qora smorodinali anor sousi.",
    ingredients: ["O'rdak ko'kragi", "Batat pyuresi", "Anor konsentrati", "Qora smorodina", "Rozmarin"],
    image: "https://images.unsplash.com/photo-1432139555190-58524dae6a55?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 7,
    name: "Qora tryufelli Filet Mignon",
    category: "gril",
    categoryLabel: "Gril va Steyklar",
    price: 265000,
    prepTime: "25 daq",
    calories: "560 kkal",
    weight: "300 g",
    rating: 5.0,
    isSpecial: true,
    dietType: "chef",
    dietLabel: "Oshpaz tavsiyasi",
    tastingNote: "Og'izda eruvchi marmar go'sht va boy demi-glas sousi",
    description: "28 kun quruq yetiltirilgan oliy navli halol mol go'shti, qovurilgan sarsabil, tryufelli kartoshka kremi va demi-glas sousi.",
    ingredients: ["Marmar Filet Mignon", "Yashil sarsabil", "Qora tryufel", "Demi-glas sousi", "Dengiz tuzi"],
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 8,
    name: "Eman cho'g'ida Ribeye steyki",
    category: "gril",
    categoryLabel: "Gril va Steyklar",
    price: 245000,
    prepTime: "22 daq",
    calories: "640 kkal",
    weight: "360 g",
    rating: 4.9,
    isSpecial: false,
    dietType: "spicy",
    dietLabel: "Achchiq",
    tastingNote: "Tutunli eman cho'g'i ifori va yanchilgan qora murch tafti",
    description: "Ochiq eman cho'g'ida pishirilgan sersuv Ribeye steyki, yashil murch sousi, rozmarinli sariyog' va gril sarimsoq.",
    ingredients: ["Marmar Ribeye", "Yashil va qora murch", "Rozmarinli sariyog'", "Qovurilgan sarimsoq", "Gril sabzavotlar"],
    image: "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 9,
    name: "Tog' ziravorli qo'zi qovurg'asi",
    category: "gril",
    categoryLabel: "Gril va Steyklar",
    price: 210000,
    prepTime: "26 daq",
    calories: "590 kkal",
    weight: "350 g",
    rating: 5.0,
    isSpecial: true,
    dietType: "chef",
    dietLabel: "Oshpaz tavsiyasi",
    tastingNote: "Tog' o'tlari, zira va yumshoq o'tin tutuni uyg'unligi",
    description: "Barra qo'zi qovurg'alari, dudlangan baqlajon pyuresi, anor donalari va yangi rayhonli zaytun sousi bilan.",
    ingredients: ["Barra qo'zi qovurg'asi", "Tog' zirasi", "Dudlangan baqlajon", "Yangi rayhon", "Zaytun moyi"],
    image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 10,
    name: "Pistali Belgiya shokoladli fondan",
    category: "desertlar",
    categoryLabel: "Desertlar",
    price: 72000,
    prepTime: "15 daq",
    calories: "410 kkal",
    weight: "180 g",
    rating: 4.9,
    isSpecial: false,
    dietType: "veg",
    dietLabel: "Vegetarian",
    tastingNote: "Issiq suyuq shokolad markazi va salqin vanilli muzqaymoq",
    description: "70% Belgiya qora shokoladidan pishirilgan issiq fondan, qovurilgan yashil pista va uy vanilli muzqaymog'i.",
    ingredients: ["70% Belgiya shokoladi", "Yashil pista", "Vanilli muzqaymoq", "Sariyog'", "Yalpiz"],
    image: "https://images.unsplash.com/photo-1624353365286-3f8d62daad51?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 11,
    name: "Asalli bodomli Mille-Feuille",
    category: "desertlar",
    categoryLabel: "Desertlar",
    price: 65000,
    prepTime: "10 daq",
    calories: "360 kkal",
    weight: "170 g",
    rating: 4.8,
    isSpecial: false,
    dietType: "chef",
    dietLabel: "Oshpaz tavsiyasi",
    tastingNote: "Qarsildoq karamellashgan qatlamlar va Madagaskar vanili",
    description: "Yupqa xamir qatlamlari orasida maskarpone kremi, tog' asali, yangi rezavorlar va qovurilgan bodom bo'laklari.",
    ingredients: ["Qatlama xamir", "Maskarpone", "Tog' asali", "Bodom", "Madagaskar vanili"],
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 12,
    name: "San-Sebastyan pishloqli chizkeyk",
    category: "desertlar",
    categoryLabel: "Desertlar",
    price: 68000,
    prepTime: "8 daq",
    calories: "380 kkal",
    weight: "190 g",
    rating: 4.9,
    isSpecial: false,
    dietType: "veg",
    dietLabel: "Vegetarian",
    tastingNote: "Karamellashgan ustki qatlam va issiq shokolad qaylasi",
    description: "Ispancha retsept asosida pishirilgan mayin chizkeyk, ustidan quyiladigan issiq Belgiya sutli shokolad sousi bilan.",
    ingredients: ["Krem-pishloq", "Qaymoq", "Belgiya shokoladi", "Vanil", "Shakar"],
    image: "https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 13,
    name: "Rayhon, laym va yashil olma limonadi",
    category: "ichimliklar",
    categoryLabel: "Ichimliklar",
    price: 44000,
    prepTime: "6 daq",
    calories: "95 kkal",
    weight: "400 ml",
    rating: 4.9,
    isSpecial: false,
    dietType: "veg",
    dietLabel: "Vegetarian",
    tastingNote: "Tetiklantiruvchi sitrus va yangi rayhon salqinligi",
    description: "Yangi siqilgan yashil olma va laym sharbati, xushbo'y rayhon barglari, yalpiz va gazlangan buloq suvi.",
    ingredients: ["Yashil olma sharbati", "Laym", "Yangi rayhon", "Yalpiz", "Buloq suvi"],
    image: "https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&w=900&q=85"
  },
  {
    id: 14,
    name: "Za'faron va tog' asalli mualliflik choyi",
    category: "ichimliklar",
    categoryLabel: "Ichimliklar",
    price: 49000,
    prepTime: "8 daq",
    calories: "80 kkal",
    weight: "600 ml",
    rating: 4.8,
    isSpecial: false,
    dietType: "veg",
    dietLabel: "Vegetarian",
    tastingNote: "Iliq za'faron notalari, yangi zanjabil va tabiiy asal",
    description: "Oliy navli ko'k choy, oltinrang za'faron tolalari, yangi zanjabil, apelsin bo'laklari va tog' asali.",
    ingredients: ["Oliy navli ko'k choy", "Za'faron", "Zanjabil", "Apelsin", "Tog' asali"],
    image: "https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=900&q=85"
  }
];

const galleryItems = [
  {
    id: 1,
    title: "Asosiy panoramali zal",
    caption: "Tabiiy marmar, iliq yoritish va sokin zumrad ranglar uyg'unligi.",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1100&q=85"
  },
  {
    id: 2,
    title: "Ochiq eman grili san'ati",
    caption: "Har bir steyk tabiiy eman daraxti cho'g'ida aniq darajada pishiriladi.",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1100&q=85"
  },
  {
    id: 3,
    title: "Filet Mignon taqdimoti",
    caption: "Qora tryufel va yosh sarsabil bilan mualliflik bezagi.",
    image: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1100&q=85"
  },
  {
    id: 4,
    title: "VIP degustatsiya stoli",
    caption: "Ishbilarmonlik muzokaralari va oilaviy oqshomlar uchun xususiy zal.",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1100&q=85"
  },
  {
    id: 5,
    title: "Qandolatxona durdonalari",
    caption: "Belgiya shokoladi va barra rezavorlardan har kuni yangi tayyorlanadigan desertlar.",
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?auto=format&fit=crop&w=1100&q=85"
  },
  {
    id: 6,
    title: "Mualliflik ichimliklar bari",
    caption: "Mavsumiy mevalar, o'simlik ekstraktlari va maxsus choy kolleksiyasi.",
    image: "https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?auto=format&fit=crop&w=1100&q=85"
  }
];

const clientReviews = [
  {
    id: 1,
    name: "Azizbek Karimov",
    role: "Tadbirkor",
    avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    rating: 5,
    dish: "Qora tryufelli Filet Mignon",
    date: "14 Noyabr, 2026",
    comment: "Toshkentdagi eng sevimli fine-dining maskanim. Filet Mignon aynan men so'ragan medium-rare darajada, nihoyatda yumshoq va sersuv bo'lib chiqdi. Xizmat ko'rsatish madaniyati besh yulduzli."
  },
  {
    id: 2,
    name: "Malika Rustamova",
    role: "Interyer dizayneri",
    avatar: "https://randomuser.me/api/portraits/women/44.jpg",
    rating: 5,
    dish: "Za'faronli dengiz levregi",
    date: "11 Noyabr, 2026",
    comment: "Restoranning zumrad va oltin uyg'unligidagi interyeri ko'zni quvontiradi. Dengiz levregi va za'faronli sousining ta'mi juda nafis, kechki yoritish esa romantik suhbat uchun ajoyib muhit beradi."
  },
  {
    id: 3,
    name: "Jamshid Tursunov",
    role: "Arxitektor",
    avatar: "https://randomuser.me/api/portraits/men/46.jpg",
    rating: 5,
    dish: "Eman cho'g'ida Ribeye steyki",
    date: "08 Noyabr, 2026",
    comment: "Hamkorlar bilan VIP xonada kechki ovqat qildik. Akustikasi sokin, ofitsiantlar esa har bir detalga e'tiborli. Ribeye steyki va yashil murch sousi haqiqatan ham yuqori darajada tayyorlangan."
  },
  {
    id: 4,
    name: "Dilnoza Abdullayeva",
    role: "Oziq-ovqat blogeri",
    avatar: "https://randomuser.me/api/portraits/women/65.jpg",
    rating: 5,
    dish: "Pistali shokoladli fondan",
    date: "04 Noyabr, 2026",
    comment: "Ko'plab restoranlarni sinab ko'rganman, ammo VERDANT qandolatxonasi alohida maqtovga loyiq. Shokoladli fondanning ichi ideal suyuqlikda, pistali muzqaymoq bilan ta'mi mukammal muvozanatda."
  },
  {
    id: 5,
    name: "Sardorbek Alimov",
    role: "IT loyiha rahbari",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    dish: "Tog' ziravorli qo'zi qovurg'asi",
    date: "01 Noyabr, 2026",
    comment: "Oilaviy bayramimizni shu yerda nishonladik. Qo'zi qovurg'asi dudlangan baqlajon pyuresi bilan juda mazali chiqdi. Tug'ilgan kun munosabati bilan oshpazdan desert sovg'a qilishgani hammani xursand qildi."
  },
  {
    id: 6,
    name: "Madina Nazarova",
    role: "Marketing direktori",
    avatar: "https://randomuser.me/api/portraits/women/28.jpg",
    rating: 5,
    dish: "Avokado va pashot tuxumli briosh",
    date: "27 Oktabr, 2026",
    comment: "Ertalabki biznes nonushtalar uchun eng yaxshi joy. Briosh noni issiqqina, golland sousi yengil va za'faronli choyning ifori kun davomida a'lo kayfiyat bag'ishlaydi."
  },
  {
    id: 7,
    name: "Boburjon Xolmatov",
    role: "Moliyaviy tahlilchi",
    avatar: "https://randomuser.me/api/portraits/men/54.jpg",
    rating: 5,
    dish: "Qora tryufelli rizotto",
    date: "23 Oktabr, 2026",
    comment: "Italiyada yegan haqiqiy rizottoni Toshkentda topdim desam mubolag'a bo'lmaydi. Arborio guruchi aynan kerakli al-dente holatda, tryufel hidi esa juda tabiiy va yoqimli."
  },
  {
    id: 8,
    name: "Sevara Islomova",
    role: "Shifokor",
    avatar: "https://randomuser.me/api/portraits/women/17.jpg",
    rating: 5,
    dish: "Rayhon va laymli limonad",
    date: "19 Oktabr, 2026",
    comment: "Tozalik, halol mahsulotlar sifati va sabzavotlarning barraligi meni juda mamnun qildi. Rayhon va yashil olmali limonadlari tabiiy shakar darajasida, nihoyatda tetiklantiruvchi."
  },
  {
    id: 9,
    name: "Timur Rahmonov",
    role: "Restorator va maslahatchi",
    avatar: "https://randomuser.me/api/portraits/men/75.jpg",
    rating: 5,
    dish: "Anor glazurli o'rdak ko'kragi",
    date: "15 Oktabr, 2026",
    comment: "O'rdak ko'kragini to'g'ri pishirish oson emas, lekin bu yerda terisi qarsildoq, ichi esa pushti va yumshoq chiqqan. Anor glazuri va batat pyuresi bilan uyg'unligi ustalik belgisi."
  },
  {
    id: 10,
    name: "Nilufar Qodirova",
    role: "Moda stilisti",
    avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    rating: 5,
    dish: "San-Sebastyan chizkeyk",
    date: "12 Oktabr, 2026",
    comment: "Dugonalarim bilan kechki choy ustida suhbatlashdik. San-Sebastyan chizkeykining ustidan quyiladigan issiq Belgiya shokoladi ta'mi og'izda eriydi. Xizmat tez va tabassum bilan."
  },
  {
    id: 11,
    name: "Farruxbek Saidov",
    role: "Advokat",
    avatar: "https://randomuser.me/api/portraits/men/61.jpg",
    rating: 5,
    dish: "Toshkentcha nonushta seti",
    date: "09 Oktabr, 2026",
    comment: "Xorijlik mijozlarimni Toshkentcha nonushtaga taklif qildim. Tandir patir, fermerskiy qaymoq va sifatli pishloqlar ularda juda katta taassurot qoldirdi. Avtoturargohi ham qulay."
  },
  {
    id: 12,
    name: "Elena Volkova",
    role: "Sayohat fotografi",
    avatar: "https://randomuser.me/api/portraits/women/52.jpg",
    rating: 5,
    dish: "Asalli bodomli Mille-Feuille",
    date: "05 Oktabr, 2026",
    comment: "Har bir taomning bezagi suratga olishga arziydi. Mille-Feuille deserti nihoyatda yengil va qarsildoq, xodimlar esa o'zbek, rus va ingliz tillarida bemalol muloqot qilishadi."
  },
  {
    id: 13,
    name: "Javohir Mamatov",
    role: "Startap asoschisi",
    avatar: "https://randomuser.me/api/portraits/men/15.jpg",
    rating: 5,
    dish: "Qora tryufelli Filet Mignon",
    date: "02 Oktabr, 2026",
    comment: "Onlayn stol bron qilish tizimi juda qulay ishladi, kelganimizda deraza yonidagi stolimiz tayyor turgan ekan. VERDANT15 promo-kodi bilan buyurtma qildik, hamma narsa mukammal."
  },
  {
    id: 14,
    name: "Kamola Ergasheva",
    role: "O'qituvchi",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    dish: "Qaymoqli rikotta sirniklar",
    date: "28 Sentabr, 2026",
    comment: "Yakshanba tongini oilamiz bilan VERDANTda boshladik. Bolalarimizga rikotta sirniklari va tabiiy mevali choy juda yoqdi. Sokin musiqa va shinam muhit dam olishga yordam beradi."
  },
  {
    id: 15,
    name: "Davronbek Yusupov",
    role: "Eksport menejeri",
    avatar: "https://randomuser.me/api/portraits/men/83.jpg",
    rating: 5,
    dish: "Za'faron va tog' asalli choy",
    date: "24 Sentabr, 2026",
    comment: "Muntazam mijoziman va sifat biror marta ham pasaymaganini alohida ta'kidlamoqchiman. Kechki taomdan so'ng za'faronli mualliflik choyini ichish mening yoqimli odatimga aylangan."
  }
];

const faqData = [
  {
    question: "VERDANT restoranidagi barcha taomlar 100% Halol standartlariga javob beradimi?",
    answer: "Ha, restoran oshxonasida ishlatiladigan barcha go'sht, parranda va boshqa masalliqlar rasmiy Halol sertifikatiga ega ishonchli yetkazib beruvchilardan olinadi. Menyuda spirtli ichimliklar va halol bo'lmagan qo'shimchalar mutlaqo ishlatilmaydi."
  },
  {
    question: "Stolni oldindan qanday bron qilish mumkin va bron qancha vaqt saqlanadi?",
    answer: "Stolni saytimizdagi Stol bron qilish bo'limi orqali bir daqiqada yoki +998 71 200 45 00 raqamiga qo'ng'iroq qilib band qilishingiz mumkin. Band qilingan stol belgilangan vaqtdan boshlab 20 daqiqa davomida siz uchun saqlab turiladi."
  },
  {
    question: "Toshkent shahri bo'ylab yetkazib berish xizmati mavjudmi?",
    answer: "Ha, Toshkent shahri bo'ylab maxsus termoqadoqlarda tezkor yetkazib berish xizmatimiz har kuni 09:00 dan 22:30 gacha ishlaydi. 350 000 so'mdan yuqori buyurtmalar markaziy tumanlarga mutlaqo bepul yetkaziladi."
  },
  {
    question: "Banket, tug'ilgan kun va korporativ tadbirlarni o'tkazish mumkinmi?",
    answer: "Albatta. Bizda 6 dan 24 kishigacha mo'ljallangan yopiq VIP xonalar hamda 60 kishigacha sig'imli asosiy zal mavjud. Maxsus tadbirlar uchun bosh oshpazimiz alohida banket menyusi va bayramona bezak tayyorlab beradi."
  },
  {
    question: "Bolalar uchun alohida menyu va qulayliklar bormi?",
    answer: "Ha, kichik mehmonlarimiz uchun foydali va mazali bolalar menyusi, xavfsiz bolalar stulchalari hamda rasm chizish to'plamlari mavjud. Oshpazlarimiz allergiya talablariga ko'ra taom tarkibini moslashtirib berishadi."
  },
  {
    question: "Restoranda avtoturargoh va yuqori tezlikdagi Wi-Fi mavjudmi?",
    answer: "Mehmonlarimiz uchun restoran binosi oldida bepul qo'riqlanadigan avtoturargoh va valet-parking xizmati faoliyat yuritadi. Shuningdek, butun zal va terrasa bo'ylab bepul yuqori tezlikdagi Wi-Fi tarmog'i ishlaydi."
  },
  {
    question: "VERDANT15 promo-kodi va boshqa chegirmalar qanday ishlaydi?",
    answer: "Saytimiz savatida VERDANT15 promo-kodini kiritish orqali barcha taomlar summasidan 15% chegirma olishingiz mumkin. Shuningdek, tug'ilgan kun egalari uchun pasport taqdim etilganda maxsus 15% chegirma va oshpazdan bepul desert taqdim etiladi."
  }
];

let activeCategory = "all";
let searchQuery = "";
let activeSort = "default";
let onlyFavorites = false;
let appliedPromoCode = "";
let appliedDiscountRate = 0;
let activeModalDishId = null;
let activeLightboxIndex = 0;
let currentReviewIndex = 0;
let isReviewsPaused = false;
let activeFaqIndex = 0;

let cartItems = [];
let favoriteIds = [];
let reservations = [];

function formatPrice(amount) {
  const digits = String(Math.round(amount));
  let output = "";
  let count = 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (count > 0 && count % 3 === 0) {
      output = " " + output;
    }
    output = digits.charAt(i) + output;
    count++;
  }
  return output + " so'm";
}

function formatTwoDigits(num) {
  return num < 10 ? "0" + String(num) : String(num);
}

function extractDigits(rawText) {
  return rawText.replace(/\D/g, "");
}

function loadArrayStorage(key) {
  const raw = localStorage.getItem(key);
  if (!raw) return [];
  try {
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (e) {
    return [];
  }
}

function saveCart() {
  localStorage.setItem(STORAGE_CART_KEY, JSON.stringify(cartItems));
}

function saveFavorites() {
  localStorage.setItem(STORAGE_FAV_KEY, JSON.stringify(favoriteIds));
}

function saveReservations() {
  localStorage.setItem(STORAGE_RES_KEY, JSON.stringify(reservations));
}

function copyTextToClipboard(text) {
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text);
    return;
  }
  const area = document.createElement("textarea");
  area.value = text;
  area.style.position = "fixed";
  area.style.left = "-9999px";
  document.body.appendChild(area);
  area.select();
  document.execCommand("copy");
  document.body.removeChild(area);
}

function getDietIconClass(dietType) {
  if (dietType === "veg") return "fa-solid fa-leaf";
  if (dietType === "spicy") return "fa-solid fa-pepper-hot";
  return "fa-solid fa-crown";
}

function showToast(title, message) {
  document.getElementById("toastTitle").textContent = title;
  document.getElementById("toastMessage").textContent = message;
  document.getElementById("toastBanner").classList.remove("hidden");
}

function hideToast() {
  document.getElementById("toastBanner").classList.add("hidden");
}

function updateCategoryHeader(category) {
  const titleEl = document.getElementById("menuSectionTitle");
  const subEl = document.getElementById("menuSectionSubtitle");

  switch (category) {
    case "nonushta":
      titleEl.textContent = "Ertalabki shohona nonushtalar";
      subEl.textContent = "Issiq briosh, rikotta sirniklari va milliy nonushta to'plamlari bilan kunni go'zal boshlang.";
      break;
    case "asosiy":
      titleEl.textContent = "Asosiy mualliflik taomlari";
      subEl.textContent = "O'rta Yer dengizi balig'i, qora tryufelli rizotto va nozik texnologiyadagi asosiy taomlar.";
      break;
    case "gril":
      titleEl.textContent = "Ochiq eman grili va Steyklar";
      subEl.textContent = "Yetiltirilgan oliy navli halol marmar steyklar va tog' ziravorli qo'zi qovurg'alari.";
      break;
    case "desertlar":
      titleEl.textContent = "Qandolatxona desertlari";
      subEl.textContent = "Belgiya shokoladi, maskarpone va tabiiy rezavorlardan har kuni yangi tayyorlanadigan shirinliklar.";
      break;
    case "ichimliklar":
      titleEl.textContent = "Mualliflik ichimliklari va choylar";
      subEl.textContent = "Tabiiy mevali limonadlar va xushbo'y za'faronli choy kolleksiyasi.";
      break;
    default:
      titleEl.textContent = "Mualliflik menyusi va narxlar";
      subEl.textContent = "Nonushtadan tortib eman cho'g'ida pishirilgan steyklar va qandolatxona desertlarigacha barcha taomlarimizni kashf eting.";
  }
}

function getFilteredDishes() {
  const q = searchQuery.trim().toLowerCase();

  const filtered = menuDishes.filter(function (dish) {
    if (activeCategory !== "all" && dish.category !== activeCategory) return false;
    if (onlyFavorites && !favoriteIds.includes(dish.id)) return false;
    if (q !== "") {
      const inName = dish.name.toLowerCase().includes(q);
      const inDesc = dish.description.toLowerCase().includes(q);
      const inIng = dish.ingredients.join(" ").toLowerCase().includes(q);
      if (!inName && !inDesc && !inIng) return false;
    }
    return true;
  });

  const sorted = filtered.slice();
  if (activeSort === "price-asc") sorted.sort(function (a, b) { return a.price - b.price; });
  else if (activeSort === "price-desc") sorted.sort(function (a, b) { return b.price - a.price; });
  else if (activeSort === "rating-desc") sorted.sort(function (a, b) { return b.rating - a.rating; });
  else sorted.sort(function (a, b) { return a.id - b.id; });

  return sorted;
}

function renderMenu() {
  const grid = document.getElementById("menuGrid");
  const emptyBox = document.getElementById("emptyStateBox");
  const counter = document.getElementById("resultsCounter");
  const favLabel = document.getElementById("favCountLabel");

  favLabel.textContent = String(favoriteIds.length);
  const list = getFilteredDishes();
  counter.innerHTML = "<i class='fa-solid fa-plate-wheat v-gold-text'></i><span>" + list.length + " ta taom</span>";
  grid.innerHTML = "";

  if (list.length === 0) {
    emptyBox.classList.remove("hidden");
    return;
  }
  emptyBox.classList.add("hidden");

  list.forEach(function (dish) {
    const isFav = favoriteIds.includes(dish.id);
    const fallbackUrl = "https://placehold.co/800x600/0F3D2E/D8AE52?text=VERDANT";
    const favClass = isFav ? "is-fav" : "";
    const favIcon = isFav ? "fa-solid fa-heart" : "fa-regular fa-heart";

    const card = document.createElement("article");
    card.className = "dish-card v-card";
    card.innerHTML =
      "<div class='dish-img-wrap photo-bg dish-img-trigger' data-id='" + dish.id + "'>" +
        "<img src='" + dish.image + "' alt='" + dish.name + "' onerror=\"this.src='" + fallbackUrl + "'\">" +
        "<span class='badge-dark'><i class='" + getDietIconClass(dish.dietType) + "'></i><span>" + dish.dietLabel + "</span></span>" +
        "<button type='button' data-fav-id='" + dish.id + "' aria-label='Sevimlilarga saqlash' class='fav-btn dish-fav-btn " + favClass + "'><i class='" + favIcon + "'></i></button>" +
        "<div class='dish-meta-overlay'>" +
          "<span class='dish-meta-pill'><i class='fa-regular fa-clock gold-bright'></i><span class='tabular-nums'>" + dish.prepTime + "</span></span>" +
          "<span class='dish-meta-pill gold-bright tabular-nums'><i class='fa-solid fa-star'></i><span>" + dish.rating.toFixed(1) + "</span></span>" +
        "</div>" +
      "</div>" +
      "<div class='dish-body'>" +
        "<div>" +
          "<div class='dish-cat-row'><span>" + dish.categoryLabel + "</span><span class='v-text-muted'>" + dish.weight + "</span></div>" +
          "<h3 class='dish-name font-serif'>" + dish.name + "</h3>" +
          "<p class='dish-desc'>" + dish.description + "</p>" +
        "</div>" +
        "<div class='dish-footer'>" +
          "<div><span class='price-label'>Narxi</span><div class='dish-price tabular-nums'>" + formatPrice(dish.price) + "</div></div>" +
          "<div class='dish-actions'>" +
            "<button type='button' data-detail-id='" + dish.id + "' class='detail-btn btn-outline-luxury btn-sm'>Batafsil</button>" +
            "<button type='button' data-add-id='" + dish.id + "' class='add-cart-btn btn-luxury btn-sm'><i class='fa-solid fa-plus'></i><span>Savatga</span></button>" +
          "</div>" +
        "</div>" +
      "</div>";

    grid.appendChild(card);
  });

  attachMenuListeners();
}

function attachMenuListeners() {
  document.querySelectorAll(".fav-btn").forEach(function (btn) {
    btn.addEventListener("click", function (event) {
      event.stopPropagation();
      toggleFavorite(Number(btn.getAttribute("data-fav-id")));
    });
  });

  document.querySelectorAll(".detail-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      openDishModal(Number(btn.getAttribute("data-detail-id")));
    });
  });

  document.querySelectorAll(".dish-img-trigger").forEach(function (el) {
    el.addEventListener("click", function () {
      openDishModal(Number(el.getAttribute("data-id")));
    });
  });

  document.querySelectorAll(".add-cart-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      addToCart(Number(btn.getAttribute("data-add-id")));
    });
  });
}

function toggleFavorite(dishId) {
  const idx = favoriteIds.indexOf(dishId);
  const dish = menuDishes.find(function (item) { return item.id === dishId; });

  if (idx === -1) {
    favoriteIds.push(dishId);
    if (dish) showToast("Sevimlilar", dish.name + " sevimlilarga qo'shildi.");
  } else {
    favoriteIds.splice(idx, 1);
    if (dish) showToast("Sevimlilar", dish.name + " sevimlilardan olindi.");
  }

  saveFavorites();
  renderMenu();
}

function renderChefSpecials() {
  const grid = document.getElementById("chefSpecialsGrid");
  grid.innerHTML = "";

  const specials = menuDishes.filter(function (dish) { return dish.isSpecial === true; });

  specials.forEach(function (dish) {
    const fallbackUrl = "https://placehold.co/800x600/0A2A20/D8AE52?text=VERDANT";
    const card = document.createElement("article");
    card.className = "chef-card";
    card.innerHTML =
      "<div class='dish-img-wrap photo-bg'>" +
        "<img src='" + dish.image + "' alt='" + dish.name + "' onerror=\"this.src='" + fallbackUrl + "'\">" +
        "<span class='badge-dark'><i class='fa-solid fa-crown'></i><span>Imzo taomi</span></span>" +
      "</div>" +
      "<div class='dish-body'>" +
        "<div>" +
          "<div class='dish-cat-row'><span class='gold-bright'>" + dish.categoryLabel + "</span><span class='gold-bright tabular-nums'>" + dish.weight + "</span></div>" +
          "<h3 class='dish-name font-serif text-white'>" + dish.name + "</h3>" +
          "<div class='chef-divider'></div>" +
          "<p class='small uppercase gold-bright bold'>Degustatsiya eslatmasi</p>" +
          "<p class='text-white-muted small' style='margin-top:6px'>" + dish.tastingNote + "</p>" +
        "</div>" +
        "<div class='dish-footer' style='border-color:rgba(255,255,255,0.12)'>" +
          "<span class='dish-price gold-bright tabular-nums'>" + formatPrice(dish.price) + "</span>" +
          "<button type='button' data-special-add='" + dish.id + "' class='special-add-btn btn-gold btn-sm'><i class='fa-solid fa-plus'></i><span>Savatga</span></button>" +
        "</div>" +
      "</div>";

    grid.appendChild(card);
  });

  grid.querySelectorAll(".special-add-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      addToCart(Number(btn.getAttribute("data-special-add")));
    });
  });
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";

  galleryItems.forEach(function (item, index) {
    const fallbackUrl = "https://placehold.co/900x700/0F3D2E/D8AE52?text=VERDANT";
    const tile = document.createElement("button");
    tile.type = "button";
    tile.className = "gallery-tile photo-bg";
    tile.innerHTML =
      "<img src='" + item.image + "' alt='" + item.title + "' onerror=\"this.src='" + fallbackUrl + "'\">" +
      "<div class='gallery-overlay'></div>" +
      "<div class='gallery-caption'>" +
        "<h3 class='font-serif'>" + item.title + "</h3>" +
        "<p>" + item.caption + "</p>" +
      "</div>";

    tile.addEventListener("click", function () {
      openLightbox(index);
    });

    grid.appendChild(tile);
  });
}

function openLightbox(index) {
  activeLightboxIndex = index;
  updateLightboxContent();
  document.getElementById("lightboxModal").classList.remove("hidden");
}

function updateLightboxContent() {
  const item = galleryItems[activeLightboxIndex];
  const imgEl = document.getElementById("lightboxImg");
  imgEl.setAttribute("src", item.image);
  imgEl.setAttribute("alt", item.title);
  document.getElementById("lightboxTitle").textContent = item.title;
  document.getElementById("lightboxCaption").textContent = item.caption;
  document.getElementById("lightboxCounter").textContent =
    formatTwoDigits(activeLightboxIndex + 1) + " / " + formatTwoDigits(galleryItems.length);
}

function stepLightbox(delta) {
  activeLightboxIndex = (activeLightboxIndex + delta + galleryItems.length) % galleryItems.length;
  updateLightboxContent();
}

function closeLightbox() {
  document.getElementById("lightboxModal").classList.add("hidden");
}

function renderStarsHtml(count) {
  let html = "";
  for (let i = 1; i <= 5; i++) {
    html += i <= count
      ? "<i class='fa-solid fa-star v-gold-text small'></i>"
      : "<i class='fa-regular fa-star v-text-muted small'></i>";
  }
  return html;
}

function renderReviews() {
  const grid = document.getElementById("reviewsCardsGrid");
  const counter = document.getElementById("reviewCounter");
  const dotsWrap = document.getElementById("reviewDotsContainer");
  const total = clientReviews.length;

  counter.textContent = formatTwoDigits(currentReviewIndex + 1) + " / " + formatTwoDigits(total);
  grid.innerHTML = "";

  const displaySlots = [
    { review: clientReviews[(currentReviewIndex - 1 + total) % total], isSpotlight: false, mobileHide: true },
    { review: clientReviews[currentReviewIndex], isSpotlight: true, mobileHide: false },
    { review: clientReviews[(currentReviewIndex + 1) % total], isSpotlight: false, mobileHide: true }
  ];

  displaySlots.forEach(function (slot) {
    const r = slot.review;
    const fallbackAvatar = "https://placehold.co/160x160/0F3D2E/D8AE52?text=" + r.name.charAt(0);
    const card = document.createElement("article");
    card.className = "review-card v-card" + (slot.isSpotlight ? " is-spotlight" : "") + (slot.mobileHide ? " mobile-hide" : "");

    card.innerHTML =
      "<div>" +
        "<div class='flex-between' style='margin-bottom:16px'>" +
          "<div class='review-user'>" +
            "<img src='" + r.avatar + "' alt='" + r.name + "' onerror=\"this.src='" + fallbackAvatar + "'\" class='review-avatar'>" +
            "<div><h3 class='font-serif' style='font-size:1.25rem'>" + r.name + "</h3><p class='v-text-muted small'>" + r.role + "</p></div>" +
          "</div>" +
          "<i class='fa-solid fa-quote-right v-gold-text'></i>" +
        "</div>" +
        "<div class='flex-between' style='margin-bottom:12px'>" +
          "<div>" + renderStarsHtml(r.rating) + "</div>" +
          "<span class='v-text-muted small'>" + r.date + "</span>" +
        "</div>" +
        "<p style='font-size:0.88rem'>" + r.comment + "</p>" +
      "</div>" +
      "<div class='flex-between' style='padding-top:14px;border-top:1px solid var(--border-color)'>" +
        "<span class='review-dish-pill v-gold-soft v-gold-text'><i class='fa-solid fa-utensils'></i><span>" + r.dish + "</span></span>" +
        "<span class='v-text-muted small bold tabular-nums'>#" + formatTwoDigits(r.id) + "</span>" +
      "</div>";

    if (!slot.isSpotlight) {
      card.addEventListener("click", function () {
        goToReview(r.id - 1);
      });
    }

    grid.appendChild(card);
  });

  dotsWrap.innerHTML = "";
  for (let i = 0; i < total; i++) {
    const dot = document.createElement("button");
    dot.type = "button";
    dot.setAttribute("aria-label", i + 1 + "-sharhga o'tish");
    dot.className = "review-dot" + (i === currentReviewIndex ? " active" : "");
    dot.addEventListener("click", function () {
      goToReview(i);
    });
    dotsWrap.appendChild(dot);
  }
}

function restartReviewProgressBar() {
  const bar = document.getElementById("reviewProgressBar");
  bar.classList.remove("review-progress-bar");
  void bar.offsetWidth;
  bar.classList.add("review-progress-bar");
}

function goToReview(index) {
  currentReviewIndex = (index + clientReviews.length) % clientReviews.length;
  renderReviews();
  restartReviewProgressBar();
}

function toggleReviewsPause() {
  const wrap = document.getElementById("reviewsCarouselWrap");
  const icon = document.getElementById("reviewPauseIcon");
  const status = document.getElementById("reviewAutoStatus");
  isReviewsPaused = !isReviewsPaused;

  if (isReviewsPaused) {
    wrap.classList.add("is-paused");
    icon.className = "fa-solid fa-play";
    status.innerHTML = "<i class='fa-solid fa-pause v-gold-text'></i> To'xtatilgan";
  } else {
    wrap.classList.remove("is-paused");
    icon.className = "fa-solid fa-pause";
    status.innerHTML = "<i class='fa-solid fa-rotate v-gold-text'></i> Har 5 soniyada almashadi";
  }
}

function renderFaq() {
  const container = document.getElementById("faqAccordion");
  container.innerHTML = "";

  faqData.forEach(function (item, index) {
    const isActive = index === activeFaqIndex;
    const card = document.createElement("div");
    card.className = "faq-item v-card" + (isActive ? " faq-active" : "");

    card.innerHTML =
      "<button type='button' data-faq-index='" + index + "' aria-expanded='" + (isActive ? "true" : "false") + "' class='faq-trigger'>" +
        "<div class='faq-q-wrap'>" +
          "<span class='faq-num v-gold-soft v-gold-text tabular-nums'>" + formatTwoDigits(index + 1) + "</span>" +
          "<span class='faq-q-text font-serif'>" + item.question + "</span>" +
        "</div>" +
        "<i class='fa-solid fa-chevron-down faq-chevron'></i>" +
      "</button>" +
      "<div class='faq-content-wrap'>" +
        "<div class='faq-content-inner'>" +
          "<div class='faq-answer'><p>" + item.answer + "</p></div>" +
        "</div>" +
      "</div>";

    container.appendChild(card);
  });

  container.querySelectorAll(".faq-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      const clickedIndex = Number(btn.getAttribute("data-faq-index"));
      const items = container.querySelectorAll(".faq-item");
      activeFaqIndex = activeFaqIndex === clickedIndex ? -1 : clickedIndex;

      items.forEach(function (el, idx) {
        const triggerBtn = el.querySelector(".faq-trigger");
        if (idx === activeFaqIndex) {
          el.classList.add("faq-active");
          triggerBtn.setAttribute("aria-expanded", "true");
        } else {
          el.classList.remove("faq-active");
          triggerBtn.setAttribute("aria-expanded", "false");
        }
      });
    });
  });
}

function openDishModal(dishId) {
  const dish = menuDishes.find(function (item) { return item.id === dishId; });
  if (!dish) return;

  activeModalDishId = dish.id;
  const fallbackUrl = "https://placehold.co/800x600/0F3D2E/D8AE52?text=VERDANT";
  const imgEl = document.getElementById("modalDishImg");
  imgEl.setAttribute("src", dish.image);
  imgEl.setAttribute("alt", dish.name);
  imgEl.onerror = function () { imgEl.setAttribute("src", fallbackUrl); };

  document.getElementById("modalDishTag").innerHTML =
    "<i class='" + getDietIconClass(dish.dietType) + "'></i><span>" + dish.dietLabel + "</span>";
  document.getElementById("modalDishCategory").textContent = dish.categoryLabel;
  document.getElementById("modalDishRating").innerHTML =
    "<i class='fa-solid fa-star'></i><span> " + dish.rating.toFixed(1) + "</span>";
  document.getElementById("modalDishName").textContent = dish.name;
  document.getElementById("modalDishDesc").textContent = dish.description;
  document.getElementById("modalDishPrep").textContent = dish.prepTime;
  document.getElementById("modalDishCalories").textContent = dish.calories;
  document.getElementById("modalDishWeight").textContent = dish.weight;
  document.getElementById("modalDishIngredients").textContent = dish.ingredients.join(", ");
  document.getElementById("modalDishPrice").textContent = formatPrice(dish.price);

  document.getElementById("dishModal").classList.remove("hidden");
}

function closeDishModal() {
  document.getElementById("dishModal").classList.add("hidden");
  activeModalDishId = null;
}

function openCartDrawer() {
  const wrapper = document.getElementById("cartDrawerWrapper");
  const panel = document.getElementById("cartDrawerPanel");
  wrapper.classList.remove("hidden");
  panel.classList.remove("cart-closed");
  panel.classList.add("cart-open");
  renderCart();
}

function closeCartDrawer() {
  const wrapper = document.getElementById("cartDrawerWrapper");
  const panel = document.getElementById("cartDrawerPanel");
  panel.classList.remove("cart-open");
  panel.classList.add("cart-closed");
  wrapper.classList.add("hidden");
}

function addToCart(dishId) {
  const dish = menuDishes.find(function (item) { return item.id === dishId; });
  if (!dish) return;

  const existing = cartItems.find(function (entry) { return entry.id === dishId; });
  if (existing) {
    existing.qty += 1;
  } else {
    cartItems.push({ id: dish.id, name: dish.name, price: dish.price, image: dish.image, qty: 1 });
  }

  document.getElementById("cartConfirmationBox").classList.add("hidden");
  saveCart();
  updateCartBadge();
  renderCart();
  showToast("Savatga qo'shildi", dish.name + " buyurtma savatiga qo'shildi.");
}

function updateCartItemQty(dishId, delta) {
  const idx = cartItems.findIndex(function (entry) { return entry.id === dishId; });
  if (idx === -1) return;

  cartItems[idx].qty += delta;
  if (cartItems[idx].qty <= 0) cartItems.splice(idx, 1);

  saveCart();
  updateCartBadge();
  renderCart();
}

function removeCartItem(dishId) {
  const idx = cartItems.findIndex(function (entry) { return entry.id === dishId; });
  if (idx !== -1) {
    cartItems.splice(idx, 1);
    saveCart();
    updateCartBadge();
    renderCart();
  }
}

function updateCartBadge() {
  const total = cartItems.reduce(function (sum, item) { return sum + item.qty; }, 0);
  document.getElementById("cartCountBadge").textContent = String(total);
}

function renderCart() {
  const container = document.getElementById("cartItemsContainer");
  const subtitle = document.getElementById("cartDrawerSubtitle");
  container.innerHTML = "";

  const totalQty = cartItems.reduce(function (sum, item) { return sum + item.qty; }, 0);
  subtitle.textContent = totalQty > 0 ? "Jami " + totalQty + " ta porsiya tanlangan" : "Savatingiz hozircha bo'sh";

  if (cartItems.length === 0) {
    container.innerHTML =
      "<div style='text-align:center;padding:48px 16px'>" +
        "<div class='empty-icon v-panel v-gold-text'><i class='fa-solid fa-bag-shopping'></i></div>" +
        "<p class='font-serif' style='font-size:1.5rem;font-weight:600'>Savat bo'sh</p>" +
        "<p class='v-text-muted small' style='margin-top:8px'>Menyudan yoqqan taomlaringizni tanlab Savatga tugmasini bosing.</p>" +
      "</div>";
  } else {
    cartItems.forEach(function (item) {
      const fallbackImg = "https://placehold.co/160x160/0F3D2E/D8AE52?text=V";
      const row = document.createElement("div");
      row.className = "cart-item-row v-panel";
      row.innerHTML =
        "<img src='" + item.image + "' alt='" + item.name + "' onerror=\"this.src='" + fallbackImg + "'\" class='cart-item-img'>" +
        "<div class='flex-1'>" +
          "<p style='font-size:0.88rem;font-weight:600'>" + item.name + "</p>" +
          "<p class='v-text-muted small tabular-nums'>" + formatPrice(item.price) + " x " + item.qty + "</p>" +
          "<p class='v-gold-text small bold tabular-nums'>" + formatPrice(item.price * item.qty) + "</p>" +
        "</div>" +
        "<div class='cart-item-controls'>" +
          "<button type='button' data-remove-id='" + item.id + "' aria-label='Ochirish' class='cart-remove-btn v-text-muted'><i class='fa-regular fa-trash-can'></i></button>" +
          "<div class='cart-qty-box v-card'>" +
            "<button type='button' data-dec-id='" + item.id + "' aria-label='Kamaytirish' class='cart-dec-btn cart-qty-btn'><i class='fa-solid fa-minus small'></i></button>" +
            "<span class='cart-qty-val tabular-nums'>" + item.qty + "</span>" +
            "<button type='button' data-inc-id='" + item.id + "' aria-label='Oshirish' class='cart-inc-btn cart-qty-btn'><i class='fa-solid fa-plus small'></i></button>" +
          "</div>" +
        "</div>";
      container.appendChild(row);
    });

    container.querySelectorAll(".cart-inc-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { updateCartItemQty(Number(btn.getAttribute("data-inc-id")), 1); });
    });
    container.querySelectorAll(".cart-dec-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { updateCartItemQty(Number(btn.getAttribute("data-dec-id")), -1); });
    });
    container.querySelectorAll(".cart-remove-btn").forEach(function (btn) {
      btn.addEventListener("click", function () { removeCartItem(Number(btn.getAttribute("data-remove-id"))); });
    });
  }

  updateCartTotals();
}

function updateCartTotals() {
  const subtotal = cartItems.reduce(function (sum, item) { return sum + item.price * item.qty; }, 0);
  const discount = Math.round(subtotal * appliedDiscountRate);
  const afterDiscount = subtotal - discount;
  const serviceFee = Math.round(afterDiscount * SERVICE_FEE_RATE);
  const grandTotal = afterDiscount + serviceFee;

  document.getElementById("subtotalValue").textContent = formatPrice(subtotal);
  document.getElementById("serviceFeeValue").textContent = formatPrice(serviceFee);
  document.getElementById("grandTotalValue").textContent = formatPrice(grandTotal);

  const discountRow = document.getElementById("discountRow");
  if (discount > 0) {
    discountRow.classList.remove("hidden");
    document.getElementById("discountLabel").textContent = "Chegirma (" + appliedPromoCode + ", -15%)";
    document.getElementById("discountValue").textContent = "-" + formatPrice(discount);
  } else {
    discountRow.classList.add("hidden");
  }
}

function applyPromoCode(customCode) {
  const input = document.getElementById("promoInput");
  const msgEl = document.getElementById("promoStatusMsg");
  const rawCode = typeof customCode === "string" ? customCode : input.value;
  const code = rawCode.trim().toUpperCase();

  input.value = code;
  msgEl.classList.remove("hidden", "text-err", "text-ok");

  if (code === "") {
    appliedPromoCode = "";
    appliedDiscountRate = 0;
    msgEl.textContent = "Promo-kodni kiriting (VERDANT15).";
    msgEl.classList.add("text-err");
    updateCartTotals();
    return;
  }

  if (code === "VERDANT15") {
    appliedPromoCode = "VERDANT15";
    appliedDiscountRate = 0.15;
    msgEl.textContent = "VERDANT15 promo-kodi faollashtirildi: 15% chegirma.";
    msgEl.classList.add("text-ok");
  } else {
    appliedPromoCode = "";
    appliedDiscountRate = 0;
    msgEl.textContent = "Noto'g'ri promo-kod. VERDANT15 kodidan foydalaning.";
    msgEl.classList.add("text-err");
  }

  updateCartTotals();
}

function handleCheckout() {
  const box = document.getElementById("cartConfirmationBox");
  const titleEl = document.getElementById("cartConfirmationTitle");
  const textEl = document.getElementById("cartConfirmationText");

  if (cartItems.length === 0) {
    showToast("Savat bo'sh", "Buyurtmani tasdiqlash uchun avval menyudan taom tanlang.");
    return;
  }

  const totalPortions = cartItems.reduce(function (sum, item) { return sum + item.qty; }, 0);
  const names = cartItems.map(function (item) { return item.name + " (" + item.qty + ")"; });
  const grandTotalText = document.getElementById("grandTotalValue").textContent;

  box.classList.remove("hidden");
  titleEl.textContent = "Buyurtmangiz muvaffaqiyatli tasdiqlandi";
  textEl.textContent = "Jami " + totalPortions + " ta porsiya (" + names.join(", ") + ") — " + grandTotalText + ". Oshxonamiz tayyorlashni boshladi.";

  cartItems = [];
  appliedPromoCode = "";
  appliedDiscountRate = 0;
  document.getElementById("promoInput").value = "";
  document.getElementById("promoStatusMsg").classList.add("hidden");

  saveCart();
  updateCartBadge();
  renderCart();
  showToast("Buyurtma qabul qilindi", "Jami summa: " + grandTotalText + ". Tashrifingiz uchun rahmat.");
}

function clearErrorList(ids) {
  ids.forEach(function (id) {
    const el = document.getElementById(id);
    el.textContent = "";
    el.classList.add("hidden");
  });
}

function setFieldError(id, message) {
  const el = document.getElementById(id);
  el.textContent = message;
  el.classList.remove("hidden");
}

function showFeedbackBox(boxId, isSuccess, message) {
  const box = document.getElementById(boxId);
  box.classList.remove("hidden", "feedback-ok", "feedback-err");
  box.classList.add(isSuccess ? "feedback-ok" : "feedback-err");
  box.textContent = message;
}

function handleReservationSubmit(event) {
  event.preventDefault();
  clearErrorList(["errResName", "errResPhone", "errResDate", "errResTime", "errResGuests"]);

  const name = document.getElementById("resName").value.trim();
  const phone = document.getElementById("resPhone").value.trim();
  const date = document.getElementById("resDate").value.trim();
  const time = document.getElementById("resTime").value.trim();
  const guests = Number(document.getElementById("resGuests").value);
  const area = document.getElementById("resArea").value;
  const note = document.getElementById("resNote").value.trim();

  let hasError = false;

  if (name.length < 3) {
    setFieldError("errResName", "Ism va familiya kamida 3 ta belgidan iborat bo'lishi kerak.");
    hasError = true;
  }
  if (extractDigits(phone).length < 9) {
    setFieldError("errResPhone", "To'g'ri telefon raqamini kiriting (kamida 9 ta raqam).");
    hasError = true;
  }
  if (date === "") {
    setFieldError("errResDate", "Iltimos, tashrif sanasini tanlang.");
    hasError = true;
  }
  if (time === "") {
    setFieldError("errResTime", "Iltimos, tashrif vaqtini tanlang.");
    hasError = true;
  }
  if (isNaN(guests) || guests < 1 || guests > 20) {
    setFieldError("errResGuests", "Mehmonlar soni 1 dan 20 gacha bo'lishi kerak.");
    hasError = true;
  }

  if (hasError) {
    showFeedbackBox("resFormFeedback", false, "Iltimos, xatolik ko'rsatilgan maydonlarni to'g'ri to'ldiring.");
    return;
  }

  const bookingId = reservations.length > 0 ? reservations[0].id + 1 : 1001;
  reservations.unshift({ id: bookingId, name: name, phone: phone, date: date, time: time, guests: guests, area: area, note: note });

  saveReservations();
  renderReservations();

  document.getElementById("reservationForm").reset();
  document.getElementById("resGuests").value = "2";
  showFeedbackBox("resFormFeedback", true, "Rahmat, " + name + ". " + date + " kuni soat " + time + " ga " + area + " hududidan " + guests + " kishilik stol band qilindi.");
  showToast("Stol band qilindi", date + " (" + time + ") — " + area + ", " + guests + " mehmon.");
}

function cancelReservation(bookingId) {
  const idx = reservations.findIndex(function (item) { return item.id === bookingId; });
  if (idx !== -1) {
    reservations.splice(idx, 1);
    saveReservations();
    renderReservations();
    showToast("Bron bekor qilindi", "Tanlangan bron ro'yxatdan o'chirildi.");
  }
}

function renderReservations() {
  const container = document.getElementById("reservationsList");
  const badge = document.getElementById("reservationsCountBadge");

  badge.textContent = reservations.length + " ta";
  container.innerHTML = "";

  if (reservations.length === 0) {
    container.innerHTML = "<p class='v-text-muted small'>Hozircha saqlangan bronlar mavjud emas.</p>";
    return;
  }

  reservations.forEach(function (item) {
    const card = document.createElement("div");
    card.className = "res-item-card v-card";
    const noteHtml = item.note !== "" ? "<p class='v-text-muted small italic' style='margin-top:4px'>Izoh: " + item.note + "</p>" : "";

    card.innerHTML =
      "<div>" +
        "<div style='display:flex;flex-wrap:wrap;align-items:center;gap:8px'>" +
          "<span class='bold' style='font-size:0.9rem'>" + item.name + "</span>" +
          "<span class='tag-pill v-gold-soft'>" + item.area + "</span>" +
          "<span class='v-text-muted small tabular-nums'>" + item.guests + " kishi</span>" +
        "</div>" +
        "<p class='v-gold-text small bold tabular-nums' style='margin-top:4px'><i class='fa-regular fa-calendar'></i> " + item.date + " | " + item.time + " | " + item.phone + "</p>" +
        noteHtml +
      "</div>" +
      "<button type='button' data-cancel-res='" + item.id + "' class='cancel-res-btn btn-clear v-panel'><i class='fa-regular fa-trash-can'></i> Bekor qilish</button>";

    container.appendChild(card);
  });

  container.querySelectorAll(".cancel-res-btn").forEach(function (btn) {
    btn.addEventListener("click", function () {
      cancelReservation(Number(btn.getAttribute("data-cancel-res")));
    });
  });
}

function handleNewsletterSubmit(event) {
  event.preventDefault();
  const input = document.getElementById("newsletterEmail");
  const feedback = document.getElementById("newsletterFeedback");
  const email = input.value.trim().toLowerCase();

  feedback.classList.remove("hidden", "gold-bright", "text-err");

  if (email === "" || !email.includes("@") || !email.includes(".")) {
    feedback.textContent = "To'g'ri elektron pochta manzilini kiriting.";
    feedback.classList.add("text-err");
    return;
  }

  localStorage.setItem(STORAGE_NEWSLETTER_KEY, email);
  input.value = "";
  feedback.textContent = email + " yangiliklarga muvaffaqiyatli obuna qilindi.";
  feedback.classList.add("gold-bright");
  showToast("Obuna tasdiqlandi", "Eksklyuziv takliflar elektron pochtangizga yuboriladi.");
}

function applySavedTheme() {
  const saved = localStorage.getItem(STORAGE_THEME_KEY);
  const icon = document.getElementById("themeToggleIcon");

  if (saved === "dark") {
    document.body.classList.add("dark-mode");
    icon.className = "fa-solid fa-sun";
  } else {
    document.body.classList.remove("dark-mode");
    icon.className = "fa-solid fa-moon";
  }
}

function toggleTheme() {
  const icon = document.getElementById("themeToggleIcon");
  document.body.classList.toggle("dark-mode");

  if (document.body.classList.contains("dark-mode")) {
    localStorage.setItem(STORAGE_THEME_KEY, "dark");
    icon.className = "fa-solid fa-sun";
  } else {
    localStorage.setItem(STORAGE_THEME_KEY, "light");
    icon.className = "fa-solid fa-moon";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  applySavedTheme();
  cartItems = loadArrayStorage(STORAGE_CART_KEY);
  favoriteIds = loadArrayStorage(STORAGE_FAV_KEY);
  reservations = loadArrayStorage(STORAGE_RES_KEY);

  const resDateInput = document.getElementById("resDate");
  if (resDateInput) {
    resDateInput.min = new Date().toISOString().split("T")[0];
  }

  const savedSubscriber = localStorage.getItem(STORAGE_NEWSLETTER_KEY);
  if (savedSubscriber) {
    const nlFeedback = document.getElementById("newsletterFeedback");
    nlFeedback.textContent = "Obuna faol: " + savedSubscriber;
    nlFeedback.classList.remove("hidden");
    nlFeedback.classList.add("gold-bright");
  }

  updateCategoryHeader(activeCategory);
  renderMenu();
  renderChefSpecials();
  renderGallery();
  renderReviews();
  renderFaq();
  updateCartBadge();
  renderReservations();

  document.getElementById("themeToggleBtn").addEventListener("click", toggleTheme);

  const mobileMenuBtn = document.getElementById("mobileMenuBtn");
  const mobileMenu = document.getElementById("mobileMenu");
  const mobileMenuIcon = document.getElementById("mobileMenuIcon");

  mobileMenuBtn.addEventListener("click", function () {
    mobileMenu.classList.toggle("hidden");
    mobileMenuIcon.className = mobileMenu.classList.contains("hidden") ? "fa-solid fa-bars" : "fa-solid fa-xmark";
  });

  document.querySelectorAll(".mobile-nav-link").forEach(function (link) {
    link.addEventListener("click", function () {
      mobileMenu.classList.add("hidden");
      mobileMenuIcon.className = "fa-solid fa-bars";
    });
  });

  const tabs = document.querySelectorAll(".category-tab");
  tabs.forEach(function (tab) {
    tab.addEventListener("click", function () {
      tabs.forEach(function (t) { t.classList.remove("category-tab-active"); });
      tab.classList.add("category-tab-active");
      activeCategory = tab.getAttribute("data-category");
      updateCategoryHeader(activeCategory);
      renderMenu();
    });
  });

  const searchInput = document.getElementById("searchInput");
  searchInput.addEventListener("input", function () {
    searchQuery = searchInput.value;
    renderMenu();
  });

  const sortSelect = document.getElementById("sortSelect");
  sortSelect.addEventListener("change", function () {
    activeSort = sortSelect.value;
    renderMenu();
  });

  const favToggleBtn = document.getElementById("favoritesToggleBtn");
  favToggleBtn.addEventListener("click", function () {
    onlyFavorites = !onlyFavorites;
    favToggleBtn.classList.toggle("toggle-chip-active");
    renderMenu();
  });

  document.getElementById("resetFiltersBtn").addEventListener("click", function () {
    activeCategory = "all";
    searchQuery = "";
    activeSort = "default";
    onlyFavorites = false;
    searchInput.value = "";
    sortSelect.value = "default";
    favToggleBtn.classList.remove("toggle-chip-active");

    tabs.forEach(function (t) {
      t.classList.toggle("category-tab-active", t.getAttribute("data-category") === "all");
    });

    updateCategoryHeader("all");
    renderMenu();
  });

  document.getElementById("copyPromoBannerBtn").addEventListener("click", function () {
    copyTextToClipboard("VERDANT15");
    document.getElementById("copyPromoBannerLabel").textContent = "Nusxalandi";
    showToast("Promo-kod nusxalandi", "VERDANT15 xotiraga saqlandi.");
  });

  document.getElementById("applyPromoBannerBtn").addEventListener("click", function () {
    copyTextToClipboard("VERDANT15");
    applyPromoCode("VERDANT15");
    openCartDrawer();
    showToast("Promo-kod qo'llandi", "VERDANT15 savatingizda 15% chegirma bilan faollashtirildi.");
  });

  document.getElementById("reviewProgressBar").addEventListener("animationiteration", function () {
    if (!isReviewsPaused) {
      currentReviewIndex = (currentReviewIndex + 1) % clientReviews.length;
      renderReviews();
    }
  });

  document.getElementById("reviewPrevBtn").addEventListener("click", function () { goToReview(currentReviewIndex - 1); });
  document.getElementById("reviewNextBtn").addEventListener("click", function () { goToReview(currentReviewIndex + 1); });
  document.getElementById("reviewPauseBtn").addEventListener("click", toggleReviewsPause);

  const copyButtons = document.querySelectorAll(".copy-info-btn");
  copyButtons.forEach(function (btn) {
    btn.addEventListener("click", function () {
      const text = btn.getAttribute("data-copy-text");
      copyTextToClipboard(text);

      copyButtons.forEach(function (other) {
        other.querySelector(".copy-icon").className = "fa-regular fa-copy copy-icon";
        other.querySelector(".copy-label").textContent = "Nusxalash";
        other.classList.remove("copied");
      });

      btn.querySelector(".copy-icon").className = "fa-solid fa-check copy-icon";
      btn.querySelector(".copy-label").textContent = "Nusxalandi";
      btn.classList.add("copied");
      showToast("Nusxalandi", text + " xotiraga saqlandi.");
    });
  });

  document.getElementById("closeDishModalBtn").addEventListener("click", closeDishModal);
  document.getElementById("dishModalBackdrop").addEventListener("click", closeDishModal);
  document.getElementById("modalAddToCartBtn").addEventListener("click", function () {
    if (activeModalDishId !== null) {
      addToCart(activeModalDishId);
      closeDishModal();
    }
  });

  document.getElementById("closeLightboxBtn").addEventListener("click", closeLightbox);
  document.getElementById("lightboxBackdrop").addEventListener("click", closeLightbox);
  document.getElementById("lightboxPrevBtn").addEventListener("click", function () { stepLightbox(-1); });
  document.getElementById("lightboxNextBtn").addEventListener("click", function () { stepLightbox(1); });

  document.getElementById("openCartBtn").addEventListener("click", openCartDrawer);
  document.getElementById("closeCartBtn").addEventListener("click", closeCartDrawer);
  document.getElementById("cartBackdrop").addEventListener("click", closeCartDrawer);
  document.getElementById("applyPromoBtn").addEventListener("click", function () { applyPromoCode(); });
  document.getElementById("checkoutBtn").addEventListener("click", handleCheckout);
  document.getElementById("clearCartBtn").addEventListener("click", function () {
    cartItems = [];
    appliedPromoCode = "";
    appliedDiscountRate = 0;
    document.getElementById("promoInput").value = "";
    document.getElementById("promoStatusMsg").classList.add("hidden");
    document.getElementById("cartConfirmationBox").classList.add("hidden");
    saveCart();
    updateCartBadge();
    renderCart();
    showToast("Savat tozalandi", "Barcha tanlangan taomlar savatdan o'chirildi.");
  });

  document.getElementById("reservationForm").addEventListener("submit", handleReservationSubmit);
  document.getElementById("newsletterForm").addEventListener("submit", handleNewsletterSubmit);
  document.getElementById("closeToastBtn").addEventListener("click", hideToast);
  document.getElementById("backToTopBtn").addEventListener("click", function () {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  document.addEventListener("keydown", function (event) {
    const lightboxOpen = !document.getElementById("lightboxModal").classList.contains("hidden");
    const reviewsSection = document.getElementById("reviews");

    if (event.key === "Escape") {
      closeDishModal();
      closeLightbox();
      closeCartDrawer();
    } else if (event.key === "ArrowLeft") {
      if (lightboxOpen) stepLightbox(-1);
      else if (reviewsSection.contains(document.activeElement)) goToReview(currentReviewIndex - 1);
    } else if (event.key === "ArrowRight") {
      if (lightboxOpen) stepLightbox(1);
      else if (reviewsSection.contains(document.activeElement)) goToReview(currentReviewIndex + 1);
    }
  });
});