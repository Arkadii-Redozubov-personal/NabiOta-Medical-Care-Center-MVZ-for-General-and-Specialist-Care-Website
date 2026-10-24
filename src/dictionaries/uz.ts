import type { Dictionary } from "./de";

const uz: Dictionary = {
  meta: {
    siteTitle: "NabiOta MVZ – Umumiy va ixtisoslashgan tibbiy yordam markazi",
    description:
      "NabiOta MVZ: Umumiy amaliyot, ichki kasalliklar, kardiologiya, gastroenterologiya, endokrinologiya, pulmonologiya va nevrologiya bir joyda davlat va xususiy sugʻurta egalari uchun.",
  },
  nav: {
    home: "Bosh sahifa",
    specialties: "Yoʻnalishlar",
    services: "Xizmatlar",
    about: "Biz haqimizda",
    patients: "Bemorlar uchun",
    quality: "Sifat va xavfsizlik",
    career: "Karyera",
    contact: "Bogʻlanish",
    book: "Qabulga yozilish",
    menu: "Menyuni ochish",
    close: "Menyuni yopish",
    language: "Tilni tanlash",
    allSpecialties: "Barcha yoʻnalishlar",
  },
  common: {
    learnMore: "Batafsil maʻlumot",
    bookAppointment: "Qabulga yozilish",
    callUs: "Qoʻngʻiroq qilish",
    insured: "Davlat va xususiy sugʻurtalar (GKV & PKV)",
    backHome: "Bosh sahifaga qaytish",
    overview: "Umumiy sharh",
    sampleNotice: "Namuna mazmuni – haqiqiy maʻlumotlar bilan yangilanadi.",
    hoursTitle: "Qabul vaqtlari",
    addressTitle: "Manzil",
    phoneTitle: "Telefon",
    emailTitle: "Elektron pochta",
    routePlan: "Marshrut tuzish",
    byAppointment: "Oldindan yozilish orqali",
    days: { mon: "Dushanba", tue: "Seshanba", wed: "Chorshanba", thu: "Payshanba", fri: "Juma" },
    emergencyTitle: "Shoshilinch holatlarda",
    emergencyText:
      "Ish vaqtidan tashqari 116 117 raqamli navbatchi tibbiy xizmatiga murojaat qiling. Hayot uchun xavfli holatlarda darhol 112 raqamiga qoʻngʻiroq qiling.",
  },
  home: {
    meta: {
      title: "NabiOta MVZ – Oila shifokori va mutaxassislar markazi",
      description:
        "Doimiy oila shifokori nazorati va tor mutaxassislar tajribasi: profilaktika, diagnostika, davolash va nazorat NabiOta MVZda.",
    },
    hero: {
      overline: "Tibbiy xizmat koʻrsatish markazi (MVZ)",
      title: "Umumiy va ixtisoslashgan tibbiy xizmat",
      titleAccent: "bitta markazda.",
      text: "Profilaktika va aniq tashxisdan tortib doimiy kuzatuvgacha: NabiOta MVZda umumiy amaliyot, ichki kasalliklar va nevrologiya shifokorlari sizning salomatligingiz uchun oʻzaro hamjihatlikda ishlaydi.",
      ctaPrimary: "Qabulga yozilish",
      ctaSecondary: "Tibbiy yoʻnalishlar",
      badges: ["Davlat va xususiy sugʻurtalar (GKV & PKV)", "7 ta tibbiy yoʻnalish", "Shifokorlar boshqaruvida"],
      cardTitle: "Bugun siz uchun xizmatdamiz",
    },
    stats: [
      { value: "7", label: "Tibbiy yoʻnalish bir joyda" },
      { value: "1", label: "Muolajangiz uchun yagona koordinator" },
      { value: "6", label: "Jamoa soʻzlasha oladigan til" },
      { value: "GKV & PKV", label: "Barcha sugʻurtalangan bemorlarni qabul qilamiz" },
    ],
    specialties: {
      overline: "Yoʻnalishlar",
      title: "Hamkorlikda ishlaydigan tibbiyot",
      text: "Turli soha shifokorlarimiz diagnostika va davolash rejalarini bir-birlari bilan toʻgʻridan-toʻgʻri muvofiqlashtiradilar – ortiqcha navbat va takroriy tahlillarsiz.",
      cta: "Barcha yoʻnalishlarni koʻrish",
    },
    pathway: {
      overline: "Bemor yoʻli",
      title: "Yagona markazdan kompleks gʻamxoʻrlik",
      text: "Salomatligingizning har bir bosqichida hamrohmiz – ambulator, muvofiqlashtirilgan va individual.",
      steps: [
        { title: "Profilaktika", text: "Salomatlik chekaplari, emlash maslahatlari va vaksinalar." },
        { title: "Erta aniqlash", text: "Xavflarni erta bosqichda aniqlaydigan skrining tekshiruvlari." },
        { title: "Diagnostika", text: "Yoʻnalishlar oʻrtasida muvofiqlashtirilgan zamonaviy uskunalar." },
        { title: "Maslahat", text: "Tushunarli tushuntirish va davolash boʻyicha birgalikda qaror qabul qilish." },
        { title: "Davolash", text: "Oʻtkir va surunkali kasalliklarni konservativ usulda davolash." },
        { title: "Keyingi nazorat", text: "Muntazam tekshiruvlar, dori vositalarini tahlil qilish va qoʻllab-quvvatlash." },
      ],
    },
    care: {
      overline: "Asosiy eʻtiborimiz",
      title: "Surunkali kasalliklarda doimiy va ishonchli nazorat",
      text: "Uzoq muddatli yoki bir nechta kasalliklar mavjud boʻlganda butun jarayonni toʻliq nazorat qiluvchi markaz juda muhimdir.",
      points: [
        { title: "Surunkali va koʻp kasallikli bemorlar", text: "Muntazam kuzatuv va tuzilmali davolash dasturlari (DMP)." },
        { title: "Dori vositalarini tekshirish", text: "Qabul qilinayotgan preparatlarning samaradorligi va oʻzaro taʻsirini doimiy tekshirish." },
        { title: "Muvofiqlashtirilgan yoʻllanmalar", text: "Mutaxassislar oʻrtasida diagnostika va yoʻllanmalarni toʻgʻri rejalashtirish." },
        { title: "Shifoxonagacha va undan keyin", text: "Klinikalar, reabilitatsiya va parvarishlash muassasalari bilan uzluksiz aloqa." },
      ],
      cta: "Barcha xizmatlar",
    },
    trust: {
      overline: "Sifat va xavfsizlik",
      title: "Har bir muolajada ishonchli standartlar",
      text: "Shifokorlar tomonidan boshqariladigan MVZ sifatida sifat nazorati, gigiyena va maʻlumotlar xavfsizligiga qatʻiy rioya qilamiz.",
      items: [
        { title: "Shifokorlar boshqaruvi", text: "Tibbiy qarorlar notibbiy va tijoriy koʻrsatmalardan butunlay mustaqildir." },
        { title: "Sifat menejmenti", text: "Ichki sifat nazorati tizimi, gigiyena talablari va xatarlarni boshqarish." },
        { title: "Maʻlumotlar himoyasi", text: "Shifokorlik siri, belgilangan kirish huquqlari va shifrlangan maʻlumotlar almashinuvi." },
      ],
      cta: "Sifat standartlari",
    },
    team: {
      overline: "Jamoamiz",
      title: "Sizga vaqt ajratadigan mutaxassislar",
      text: "Malakali shifokorlar va tajribali tibbiy xodimlar – koʻp tilli va bemorlarga samimiy eʻtibor bilan yondashuvchi jamoa.",
      cta: "Jamoa bilan tanishing",
    },
    cta: {
      title: "Sizning salomatligingiz uchun xizmatdamiz.",
      text: "Telefon orqali yoki veb-saytdagi ariza shakli orqali qabulga yoziling. Yangi bemorlarni mamnuniyat bilan qabul qilamiz.",
      primary: "Qabulga yozilish",
      secondary: "Markazga qoʻngʻiroq qilish",
    },
  },
  specialtiesPage: {
    meta: {
      title: "Tibbiy yoʻnalishlar – NabiOta MVZ",
      description:
        "Birlamchi tibbiy yordam, kardiologiya, gastroenterologiya, endokrinologiya, pulmonologiya va nevrologiya NabiOta MVZda.",
    },
    hero: {
      overline: "Yoʻnalishlar",
      title: "Olti tibbiy yoʻnalish. Yagona davolash rejasi.",
      text: "Oila shifokorligi tayanchi va tor mutaxassislar tajribasi uygʻunligi – ruxsat etilgan meʻyorlar doirasida va uzviy hamkorlikda.",
    },
  },
  specialty: {
    focusTitle: "Asosiy davolash sohalari",
    diagnosticsTitle: "Diagnostika usullari",
    approachTitle: "Yondashuvimiz",
    otherTitle: "Boshqa yoʻnalishlar",
    ctaTitle: "Ushbu yoʻnalish boʻyicha yozilish",
    ctaText: "Bizga qoʻngʻiroq qiling yoki soʻrov yuboring – xodimlarimiz siz bilan tezda bogʻlanadi.",
  },
  specialtyContent: {
    allgemeinmedizin: {
      name: "Umumiy amaliyot va oilaviy tibbiyot",
      short: "Barcha sogʻliq masalalari boʻyicha birinchi murojaat manzilingiz.",
      intro:
        "Oila shifokorlari sifatida biz ham oʻtkir shikoyatlarda, ham uzoq muddatli salomatlik nazoratida sizning dastlabki ishonchli vakilingizmiz. Kasallik tarixingizni bilamiz va keyingi barcha bosqichlarni muvofiqlashtiramiz.",
      focus: [
        "Oʻtkir kasalliklar va infeksiyalarni davolash",
        "Surunkali kasalliklarni kuzatish",
        "Profilaktik koʻriklar va onkologik skrining",
        "Emlash boʻyicha maslahatlar va vaksinalar",
        "Uyga tashriflar (oldindan kelishuv asosida)",
        "Tor mutaxassislarga yoʻllanmalarni muvofiqlashtirish",
      ],
      diagnostics: ["Tinch holatdagi EKG", "Laboratoriya tahlillari", "24 soatlik qon bosimi monitoringi", "Asosiy oʻpka faoliyati testi"],
      approach:
        "Biz inson salomatligiga yaxlit qaraymiz: diqqat bilan tinglaymiz, tashxislarni tushunarli tilda izohlaymiz va davolash bosqichlarini siz bilan birga belgilaymiz.",
    },
    kardiologie: {
      name: "Kardiologiya",
      short: "Yurak va qon-tomir kasalliklarini aniqlash va davolash.",
      intro:
        "Kardiologiya boʻlimimiz yurak-qon tomir tizimi salomatligiga gʻamxoʻrlik qiladi – profilaktik tekshiruvlardan tortib, yurak kasalliklarini uzoq muddatli davolashgacha.",
      focus: [
        "Yurak ishemik kasalligi",
        "Yurak ritmi buzilishlari (aritmiya)",
        "Yurak yetishmovchiligi",
        "Yurak klapanlari xastaliklari",
        "Yuqori qon bosimini nazorat qilish",
        "Yurak-qon tomir profilaktik skriningi",
      ],
      diagnostics: ["Exokardiografiya (yurak UZIsi)", "Yuklama bilan EKG (veloergometriya)", "Xolter ritm monitoringi", "Kunlik qon bosimi holteri"],
      approach:
        "Biz zamonaviy kardiologik diagnostikani oila shifokoringiz bilan yaqin hamkorlikda birlashtirib, hayot tarzingizga mos davolashni shakllantiramiz.",
    },
    gastroenterologie: {
      name: "Gastroenterologiya",
      short: "Oshqozon, ichak, jigar va oshqozon osti bezi kasalliklari.",
      intro:
        "Gastroenterologiya butun ovqat hazm qilish tizimini qamrab oladi. Biz bezovtalik sabablarini sinchkovlik bilan tekshiramiz va surunkali kasalliklarda yordam beramiz.",
      focus: [
        "Jigʻildon qaynashi va reflyuks",
        "Taʻsirlangan ichak sindromi va qorin ogʻriqlari",
        "Surunkali yalligʻlanishli ichak kasalliklari",
        "Jigar va oʻt yoʻllari xastaliklari",
        "Oziq-ovqat mahsulotlarini koʻtara olmaslik",
        "Yoʻgʻon ichak saratonini erta aniqlash boʻyicha maslahatlar",
      ],
      diagnostics: ["Qorin boʻshligʻi aʻzolari UZIsi", "Laboratoriya testlari", "Nafas testlari", "Endoskopik tekshiruvlarni muvofiqlashtirish"],
      approach:
        "Hazm qilish muammolari hayot sifatiga jiddiy taʻsir koʻrsatadi. Biz diqqat bilan eshitamiz, aniq tashxis qoʻyamiz va uzoq muddatli davolash rejasini tuzamiz.",
    },
    endokrinologie: {
      name: "Endokrinologiya",
      short: "Gormonal buzilishlar, qalqonsimon bez xastaliklari va diabet.",
      intro:
        "Gormonlar organizmdagi muhim jarayonlarni boshqaradi. Endokrinologiya boʻlimimiz gormonlar va moddalar almashinuvidagi nomutanosibliklarni aniqlaydi va davolaydi.",
      focus: [
        "Qalqonsimon bez kasalliklari",
        "Qandli diabet (1 va 2-tur)",
        "Osteoporoz (suyak moʻrtlashishi)",
        "Yogʻ va lipid almashinuvi buzilishlari",
        "Buyrak usti bezi kasalliklari",
        "Semizlik va metabolik sindrom",
      ],
      diagnostics: ["Qalqonsimon bez UZIsi", "Maxsus gormon laboratoriyasi", "Funksional gormon testlari", "Qon shakari uzoq muddatli koʻrsatkichlari"],
      approach:
        "Gormonal oʻzgarishlar sabr-toqat va dori miqdorini aniq belgilashni talab qiladi. Biz sizni muntazam kuzatib boramiz va davolashni moslashtirib boramiz.",
    },
    pneumologie: {
      name: "Pulmonologiya",
      short: "Oʻpka va nafas yoʻllari kasalliklari.",
      intro:
        "Pulmonologiya yoʻnalishimiz erkin va yengil nafas olishingiz uchun oʻpka va nafas yoʻllari xastaliklarini tashxislash va davolash bilan shugʻullanadi.",
      focus: [
        "Bronxial astma",
        "OʻSOK (Oʻpkaning surunkali obstruktiv kasalligi)",
        "Surunkali yoʻtal",
        "Sababi noaniq boʻlgan nafas qisishi",
        "Allergik nafas yoʻllari kasalliklari",
        "Nafas yoʻllari infeksiyalaridan keyingi tiklanish",
      ],
      diagnostics: ["Spirometriya", "Tana pletizmografiyasi", "Allergiya tekshiruvlari", "Qon gazlari tahlili"],
      approach:
        "Oʻpka faoliyatini aniq tekshirish va moslashtirilgan ingalyatsion davolash orqali nafas olish qobiliyatingizni birgalikda tiklaymiz.",
    },
    neurologie: {
      name: "Nevrologiya",
      short: "Bosh miya, orqa miya va periferik asab tizimi kasalliklari.",
      intro:
        "Nevrologiya asab tizimi faoliyati buzilishlarini oʻrganadi. Nevrologik shikoyatlarni sinchkovlik bilan tekshiramiz va surunkali jarayonlarda hamrohlik qilamiz.",
      focus: [
        "Bosh ogʻrigʻi va migren",
        "Bosh aylanishi va muvozanat buzilishlari",
        "Polineyropatiya",
        "Epilepsiya",
        "Parkinson kasalligi va harakat buzilishlari",
        "Insultdan keyingi reabilitatsiya nazorati",
      ],
      diagnostics: ["Klinik nevrologik koʻrik", "Elektroneyrografiya (ENG)", "Elektromiografiya (EMG)", "EEG"],
      approach:
        "Nevrologik kasalliklar inson hayotining barcha jabhalariga taʻsir qiladi. Biz oila shifokorlari, terapevtlar va klinikalar bilan yaqin hamkorlik qilamiz.",
    },
  },
  servicesPage: {
    meta: {
      title: "Xizmatlar – NabiOta MVZ",
      description:
        "Profilaktika, emlash, surunkali bemorlar parvarishi, diagnostika, yoʻllanmalar va shifoxonadan keyingi nazorat.",
    },
    hero: {
      overline: "Xizmatlar",
      title: "Profilaktikadan keyingi parvarishgacha ambulator tibbiyot",
      text: "Malakali shifokorlarimiz va tajribali mutaxassislarimiz tasdiqlangan doirada keng koʻlamli ambulator xizmatlarni taqdim etadilar.",
    },
    items: [
      { title: "Oila shifokori nazorati", text: "Birinchi aloqa nuqtasi sifatida uzluksiz hamrohlik va markaz ichidagi mutaxassislar koʻmagi." },
      { title: "Profilaktika va skrining", text: "Salomatlik xatarlarini erta aniqlashga qaratilgan har tomonlama chekap koʻriklari." },
      { title: "Emlash va maslahatlar", text: "Rasmiy tavsiyalarga muvofiq individual emlash taqvimi va vaksinalar." },
      { title: "Surunkali bemorlar nazorati", text: "Surunkali kasalligi bor bemorlarni rejalashtirilgan vaqt oraligʻida uzoq muddatli kuzatish." },
      { title: "Dori vositalari auditi", text: "Qabul qilinayotgan dorilarning xavfsizligi, taʻsiri va bir-biriga mosligini muntazam koʻrib chiqish." },
      { title: "Tuzilmali dasturlar (DMP)", text: "Qandli diabet, YuIK, astma va OʻSOK boʻyicha maxsus DMP dasturlarida ishtirok etish." },
      { title: "Muvofiqlashtirilgan yoʻllanmalar", text: "Diagnostika, davolash va mutaxassislar maslahatlarini uzluksiz bogʻlash." },
      { title: "Shifoxona bilan hamkorlik", text: "Klinikaga yotqizishga tayyorgarlik va shifoxonadan chiqqandan keyin uzluksiz nazorat." },
      { title: "Reabilitatsiya va parvarish", text: "Reabilitatsiya markazlari, uyda parvarishlash xizmatlari bilan faol aloqa." },
      { title: "Shoshilinch holatlar boshqaruvi", text: "Ambulator markazimiz imkoniyatlariga moslashtirilgan favqulodda harakatlar protokoli." },
    ],
    diagnostics: {
      overline: "Diagnostika",
      title: "Markazimizdagi zamonaviy uskunalar",
      text: "Koʻplab asosiy tekshiruvlar toʻgʻridan-toʻgʻri markazimizda oʻtkaziladi. (Namuna roʻyxat – mavjud jihozlarga moslashtiriladi).",
      items: [
        "Tinch holatdagi, yuklamali va 24 soatlik Xolter EKG",
        "Exokardiografiya (yurak UZIsi)",
        "Qorin boʻshligʻi va qalqonsimon bez UZIsi",
        "Oʻpka faoliyatini tekshirish (spirometriya)",
        "24 soatlik avtomatik qon bosimi monitoringi",
        "Neyrofiziologik tekshiruvlar (ENG, EMG, EEG)",
        "Umumiy va maxsus laboratoriya tahlillari",
        "Allergiya sinamalari",
      ],
    },
  },
  aboutPage: {
    meta: {
      title: "Biz haqimizda va jamoa – NabiOta MVZ",
      description: "NabiOta MVZ bilan tanishing: missiyamiz, qadriyatlarimiz, tibbiy rahbariyat va jamoamiz.",
    },
    hero: {
      overline: "Biz haqimizda",
      title: "Tibbiyot imkoniyatlarini birlashtirgan MVZ",
      text: "NabiOta MVZ – § 95 SGB V talablariga muvofiq, shifokorlar boshqaruvidagi davlat va xususiy sugʻurta egalariga xizmat koʻrsatuvchi tibbiy markazdir.",
    },
    mission: {
      overline: "Bizning missiyamiz",
      title: "Izchillik, hamjihatlik va insonga ajratilgan vaqt",
      paragraphs: [
        "Biz oilaviy tibbiyotning samimiy ishonchini ichki kasalliklar, kardiologiya, gastroenterologiya, endokrinologiya, pulmonologiya va nevrologiya tajribasi bilan birlashtiramiz.",
        "Shifokorlarimiz bir-birlari bilan hamda klinikalar, reabilitatsiya markazlari bilan faol hamkorlik qilib, siz uchun yaxlit muolaja zanjirini taʻminlaydilar.",
      ],
    },
    values: {
      title: "Biz asoslanadigan qadriyatlar",
      items: [
        { title: "Izchillik", text: "Oʻzingiz yaxshi taniydigan shifokorlar bilan koʻp yillik ishonchli munosabat." },
        { title: "Hamkorlik", text: "Sohalar oʻrtasidagi tezkor aloqa va birgalikda qabul qilingan klinik qarorlar." },
        { title: "Shaffoflik", text: "Tushunarli maʻlumot, aniq xarajatlar va ongli rozilik." },
        { title: "Mustaqillik", text: "Tibbiy qarorlar faqat davolovchi shifokorlarimiz tomonidan qabul qilinadi." },
      ],
    },
    leadership: {
      overline: "Tibbiy rahbariyat",
      title: "Masʻuliyat shifokorlar qoʻlida",
      text: "Tibbiy direktorimiz markazda shaxsan bemorlarni qabul qiladi va tibbiy sifatga javob beradi. Tibbiy qarorlar notibbiy maʻmuriy koʻrsatmalardan toʻliq holi.",
      name: "Dr. med. Namuna Ism",
      role: "Tibbiy direktor · Ichki kasalliklar mutaxassisi (namuna)",
    },
    team: {
      overline: "Jamoamiz",
      title: "NabiOta MVZ jamoasi mutaxassislari",
      text: "Shifokorlarimiz haqidagi toʻliq maʻlumotlar tez kunda joylashtiriladi. Quyidagi maʻlumotlar namuna xarakteriga ega.",
      members: [
        { name: "Dr. med. Anna Namuna", role: "Umumiy amaliyot va oilaviy tibbiyot shifokori" },
        { name: "Dr. med. Jonas Misol", role: "Terapevt, kardiolog" },
        { name: "Dr. med. Leyla Namuna", role: "Terapevt, gastroenterolog" },
        { name: "Dr. med. Paul Misol", role: "Terapevt, pulmonolog" },
        { name: "Dr. med. Sofia Namuna", role: "Terapevt, endokrinolog" },
        { name: "Dr. med. Timur Misol", role: "Nevrolog shifokor" },
      ],
    },
    network: {
      title: "Hamkorlar tarmogʻimiz",
      text: "Uzluksiz davolash jarayoni uchun quyidagi muassasalar bilan hamkorlik qilamiz:",
      items: ["Shifoxonalar va universitet klinikalari", "Reabilitatsiya markazlari", "Uyda parvarishlash va hamshiralik xizmatlari", "Xususiy amaliyotchi shifokorlar", "Hamkor tibbiy markazlar (MVZ)", "Fizioterapevtlar va dorixonalar"],
    },
  },
  patientsPage: {
    meta: {
      title: "Bemorlar xizmati: Qabul, tayyorgarlik va hujjatlar – NabiOta MVZ",
      description: "Qabul, tayyorgarlik va hujjatlar: NabiOta MVZ ga tashrif uchun barcha maʻlumotlar. Hujjatlar roʻyxati, xulosalar, retseptlar, sugʻurta va navbatchi shifokor xizmati.",
    },
    hero: {
      overline: "7. Bemorlar xizmati",
      title: "Qabul, tayyorgarlik va hujjatlar",
      text: "Qabulni toʻgʻri rejalashtirish uchun qaysi mutaxassis koʻrigi va qanday murojaat boʻyicha yozilmoqchi ekanligingizni bildiring. Qulay tashrifingiz uchun barcha koʻrsatmalar.",
    },
    firstVisit: {
      title: "Dastlabki tashrifingiz",
      text: "Qabul samarali oʻtishi uchun iltimos, oʻzingiz bilan quyidagilarni olib keling:",
      items: [
        "Elektron tibbiy sugʻurta kartasi (eGK) yoki sugʻurta hujjati",
        "Shaxsni tasdiqlovchi hujjat (pasport)",
        "Qabul qilinayotgan dorilarning amaldagi roʻyxati",
        "Oldingi kasallik xulosalari, shifoxona koʻchirmalari va yangi tahlillar",
        "Shifokor yoʻllanmasi (agar mavjud boʻlsa)",
        "Emlash pasporti, allergiya yoki diabet daftarchasi",
      ],
    },
    insurance: {
      title: "Sugʻurta va toʻlovlar",
      items: [
        { title: "Davlat sugʻurtasi (GKV)", text: "Germaniya davlat tibbiy sugʻurtasi tizimi asosida xizmat koʻrsatamiz." },
        { title: "Xususiy sugʻurta (PKV)", text: "Shifokorlar uchun rasmiy toʻlov taʻriflari (GOÄ) boʻyicha hisob-kitob qilinadi." },
        { title: "Mustaqil toʻlanadigan xizmatlar", text: "Sugʻurta qoplamaydigan xizmatlar haqida muolajadan oldin yozma ravishda xabardor qilamiz." },
      ],
    },
    prescriptions: {
      title: "Retseptlar va yoʻllanmalar",
      text: "Takroriy retseptlar va standart yoʻllanmalarni telefon yoki sayt orqali soʻrash mumkin. Tayyorlash muddati 1–2 ish kunini tashkil etadi.",
    },
    rights: {
      title: "Bemor sifatidagi huquqlaringiz",
      items: [
        "Har qanday muolajadan oldin tushunarli va toʻliq tibbiy maʻlumot olish",
        "Har qanday tibbiy aralashuvdan oldin sizning ongli roziligingiz",
        "Toʻlovli xizmatlar boʻyicha xarajatlarning toʻliq shaffofligi",
        "Oʻz kasallik tarixingiz va tibbiy hujjatlaringiz bilan tanishish huquqi",
        "Shifokorlik siri va shaxsiy maʻlumotlar daxlsizligiga toʻliq rioya qilinishi",
        "Taklif va fikr-mulohazalaringiz uchun doimo ochiqlik",
      ],
    },
    faq: {
      title: "Koʻp beriladigan savollar",
      items: [
        { q: "Yangi bemorlarni qabul qilasizmi?", a: "Ha, yangi bemorlarni mamnuniyat bilan qabul qilamiz. Iltimos, oldindan qabulga yoziling." },
        { q: "Tor mutaxassislar qabuliga yoʻllanma kerakmi?", a: "Yoʻllanma jarayonni osonlashtiradi va baʻzi hollarda talab etiladi. Xodimlarimiz vaziyatingizga qarab yoʻl-yoʻriq koʻrsatadi." },
        { q: "Qabulga qancha vaqtda kirish mumkin?", a: "Kutish vaqti mutaxassislikka bogʻliq. Oʻtkir ogʻriqli holatlarda bemorlarni oʻsha kunning oʻzida qabul qilishga harakat qilamiz." },
        { q: "Xodimlaringiz qaysi tillarda soʻzlasha oladi?", a: "Jamoamiz nemis, ingliz, rus, turk, arab va oʻzbek tillarida muloqot qila oladi (namuna maʻlumot)." },
        { q: "Shifokorning uyga tashrifi mavjudmi?", a: "Markazga kela olmaydigan bemorlar uchun shifokor bilan kelishilgan holda uyga tashriflar mavjud." },
      ],
    },
  },
  qualityPage: {
    meta: {
      title: "Sifat va xavfsizlik – NabiOta MVZ",
      description: "Sifat menejmenti, gigiyena talablari, maʻlumotlar xavfsizligi va bemorlar huquqlari standartlari.",
    },
    hero: {
      overline: "Sifat va xavfsizlik",
      title: "Sizning xavfsizligingiz uchun qatʻiy standartlar",
      text: "Aniq belgilangan masʻuliyat va doimiy nazorat orqali davolanish jarayoni eng yuqori tibbiy, huquqiy va tashkiliy talablarga javob berishini taʻminlaymiz.",
    },
    items: [
      { title: "Litsenziya va shifokorlar shtati", text: "Tasdiqlangan tibbiy vakolat, shifokorlarning ishlash ruxsatnomalari, belgilangan manzillar va hisobot majburiyatlariga qatʻiy rioya qilish." },
      { title: "Shifokorlar boshqaruvi", text: "Tibbiy direktor qonuniy talablarga javob beradi va shaxsan qabul olib boradi. Klinik qarorlar tashqi taʻsirlardan himoyalangan." },
      { title: "Malaka va vakolatlarni topshirish", text: "Xodimlarning kasbiy malakasini sinchkovlik bilan tekshirish. Topshiriladigan vazifalar shifokor nazorati ostida bajariladi." },
      { title: "Bemorlar huquqlari", text: "Tushunarli maʻlumot berish, toʻgʻri tushuntirish, xarajatlar shaffofligi va hujjatlar bilan tanishish imkoniyati." },
      { title: "Hujjatlar va maxfiylik", text: "Tibbiy yozuvlarni xavfsiz saqlash, shifokorlik siri, cheklangan kirish huquqlari va xavfsiz maʻlumot uzatish." },
      { title: "Sifat nazorati va gigiyena", text: "Muassasa ichki sifat menejmenti, qatʻiy gigiyena qoidalari hamda xatarlarni boshqarish." },
      { title: "Tibbiy texnika va uskunalar", text: "Uskunalarni toʻgʻri ishlatish, xodimlarni oʻrgatish, texnik xizmat koʻrsatish va radiatsiya xavfsizligi talablariga rioya qilish." },
      { title: "Toʻgʻri hisob-kitob", text: "Tarif qoidalari va iqtisodiy tejamkorlik talablariga mos keladigan toʻliq va shaffof hisob-kitob." },
    ],
    training: {
      title: "Muntazam malaka oshirish",
      text: "Shifokorlarimiz va tibbiyot xodimlarimiz zamonaviy xalqaro amaliyot bilan hamqadam boʻlish uchun doimiy sertifikatlangan kurslarda qatnashadilar.",
    },
  },
  careerPage: {
    meta: {
      title: "Karyera – NabiOta MVZ",
      description: "NabiOta MVZda ishlash: shifokorlar va tibbiy assistentlar (MFA) uchun boʻsh ish oʻrinlari.",
    },
    hero: {
      overline: "Karyera",
      title: "Birgalikda yuksak tibbiyot yaratamiz",
      text: "Hamjihatlik, uzluksiz taʻlim va hurmatga asoslangan zamonaviy ish muhitini qadrlaydigan koʻp tarmoqli jamoamiz safiga qoʻshiling.",
    },
    benefits: {
      title: "Biz nimalarni taklif qilamiz?",
      items: [
        { title: "Koʻp tarmoqli muhit", text: "Yetti xil yoʻnalish mutaxassislari oʻrtasidagi bevosita fikr almashinuvi." },
        { title: "Oʻqish va rivojlanish", text: "Muntazam malaka oshirish va ixtisoslashuv imkoniyatlari." },
        { title: "Qulay ish grafigi", text: "Tartibli ish vaqti va adolatli navbatchilik/taʻtillar rejasi." },
        { title: "Zamonaviy jihozlar", text: "Raqamlashtirilgan hujjat aylanishi va zamonaviy diagnostika apparatlari." },
      ],
    },
    jobs: {
      title: "Mavjud boʻsh ish oʻrinlari",
      note: "Namuna sifatida keltirilgan vakansiyalar",
      items: [
        { title: "Umumiy amaliyot / Oila shifokori (e/a/b)", type: "Toʻliq yoki yarim stavka" },
        { title: "Ichki kasalliklar shifokori (e/a/b)", type: "Toʻliq yoki yarim stavka" },
        { title: "Tibbiy assistent / kotib (MFA) (e/a/b)", type: "Toʻliq stavka" },
        { title: "Rezident shifokor (e/a/b)", type: "Toʻliq stavka" },
      ],
    },
    apply: {
      title: "Bizga qoʻshilishni xohlaysizmi?",
      text: "Rezyumeingizni yoki arizangizni yuboring – siz bilan shaxsan tanishishdan mamnun boʻlamiz.",
      cta: "Ariza topshirish",
    },
  },
  contactPage: {
    meta: {
      title: "Bogʻlanish va qabul soatlari – NabiOta MVZ",
      description: "NabiOta MVZ manzili, aloqa maʻlumotlari va qabul vaqtlari. Qabulga telefon yoki sayt orqali yoziling.",
    },
    hero: {
      overline: "Bogʻlanish",
      title: "Murojaatingizni kutamiz",
      text: "Telefon orqali qabulga yoziling yoki qulay onlayn ariza yuboring – jamoamiz siz bilan tez fursatda bogʻlanadi.",
    },
    form: {
      title: "Qabulga yozilish va murojaat",
      name: "Ism va familiyangiz",
      email: "Elektron pochta manzilingiz",
      phone: "Telefon raqamingiz (ixtiyoriy)",
      topic: "Murojaat mavzusi",
      topics: ["Qabulga yozilish", "Retsept / Yoʻllanma", "Umumiy savol", "Ishga kirish arizasi"],
      specialty: "Yoʻnalish (ixtiyoriy)",
      message: "Xabar matni",
      privacy: "Maxfiylik siyosati bilan tanishdim va soʻrovimni koʻrib chiqish uchun maʻlumotlarimdan foydalanishga rozilik bildiraman.",
      submit: "Soʻrovni yuborish",
      sending: "Yuborilmoqda…",
      success: "Rahmat! Xabaringiz muvaffaqiyatli yuborildi. Tez orada siz bilan bogʻlanamiz.",
      error: "Xatolik yuz berdi. Iltimos, keyinroq qayta urinib koʻring yoki bizga qoʻngʻiroq qiling.",
      notice: "Iltimos, ushbu onlayn shakldan shoshilinch tez tibbiy holatlarda foydalanmang.",
    },
  },
  legal: {
    imprintTitle: "Huquqiy maʻlumotlar (Impressum)",
    privacyTitle: "Maxfiylik siyosati",
    notice: "",
  },
  footer: {
    tagline: "Umumiy va ixtisoslashgan tibbiy xizmat koʻrsatish markazi.",
    navTitle: "Navigatsiya",
    specialtiesTitle: "Yoʻnalishlar",
    contactTitle: "Bogʻlanish",
    imprint: "Huquqiy maʻlumotlar",
    privacy: "Maxfiylik siyosati",
    cookies: "Cookie sozlamalari",
    rights: "Barcha huquqlar himoyalangan.",
  },
  cookie: {
    text: "Biz faqat texnik jihatdan zarur cookie-fayllardan foydalanamiz. Qoʻshimcha xizmatlar faqat sizning roziligingiz bilan faollashadi.",
    accept: "Qabul qilish",
    decline: "Faqat zaruriylar",
    more: "Batafsil maʻlumot",
  },
  notFound: {
    title: "Sahifa topilmadi",
    text: "Siz qidirayotgan sahifa mavjud emas yoki boshqa manzilga koʻchirilgan.",
    cta: "Bosh sahifaga qaytish",
  },
};

export default uz;
