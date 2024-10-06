// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { type Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = {
  en: "Animal Shelter",
  es: "Protectora de Animales Domésticos",
  ja: "犬たち",
  "zh-cn": "宠物救助",
  ar: "مستشفي الحيوانات",
};

export const SITE_DESCRIPTION: string | Multilingual = {
  es: "Únete a nuestra causa y sé parte del cambio. 🐾",
  en: "Join our cause and be part of the change. 🐾",
  ja: "あなたの家に来てください。",
  "zh-cn": "加入我们的努力，参与到改变中来。",
  ar: "انضم للأمر وكن جزءًا من التغيير. 🐾",
};

export const X_ACCOUNT: string | Multilingual = "@padmijas";

export const routes = {
  en: {
    "nuestros-perros": "our-dogs",
    voluntariado: "volunteer",
    contacto: "contact",
  },
};

export const uiStrings = {
  warning: {
    en: "Hey!",
    es: "Aviso",
    ja: "警告",
    "zh-cn": "警告",
    ar: "تحذير",
  },
  moreInfo: {
    en: "More info",
    es: "Más información",
    ja: "詳細",
    "zh-cn": "更多信息",
    ar: "مزيد من المعلومات",
  },
  donate: {
    en: "Donate",
    es: "Donar",
    ja: "寄付",
    "zh-cn": "捐赠",
    ar: "تبرع",
  },
  donateHref: {
    en: "/en/donations",
    es: "/es/donaciones",
    ja: "/ja/寄付",
    "zh-cn": "/zh-cn/捐赠",
    ar: "/ar/تبرعات",
  },
};

export const petCard = {
  isAdopted: {
    en: "Adopted",
    es: "Adoptado",
    ja: "好きな",
    "zh-cn": "喜欢的",
    ar: "مستحب",
  },
  isReserved: {
    en: "Reserved",
    es: "Reservado",
    ja: "予約済み",
    "zh-cn": "预约",
    ar: "محجوز",
  },
};

export const petStatus = {
  adopted: {
    en: "Adopted",
    es: "Adoptado",
    ja: "好きな",
    "zh-cn": "喜欢的",
    ar: "مستحب",
  },
  reserved: {
    en: "Reserved",
    es: "Reservado",
    ja: "予約済み",
    "zh-cn": "预约",
    ar: "محجوز",
  },
};

export const singleDog = {
  adoptmeButton: {
    en: "Adopt me",
    es: "Adoptame",
    ja: "あなたの家に来てください",
    "zh-cn": "领养我",
    ar: "اختارني",
  },
  sizeLabel: {
    en: "Size",
    es: "Tamaño",
    ja: "サイズ",
    "zh-cn": "大小",
    ar: "الحجم",
  },
  breedLabel: {
    en: "Breed",
    es: "Raza",
    ja: "品種",
    "zh-cn": "品种",
    ar: "نوع",
  },
  genderLabel: {
    en: "Gender",
    es: "Género",
    ja: "性別",
    "zh-cn": "性别",
    ar: "جنس",
  },
  birthDateLabel: {
    en: "Birth Date",
    es: "Fecha de nacimiento",
    ja: "生年月日",
    "zh-cn": "出生日期",
    ar: "تاريخ الميلاد",
  },
  vaccinatedLabel: {
    en: "Vaccinated",
    es: "Vacunado",
    ja: "接種済み",
    "zh-cn": "接种",
    ar: "مصاب",
  },
  microchippedLabel: {
    en: "Microchipped",
    es: "Microchip",
    ja: "マイクロチップ",
    "zh-cn": "微芯片",
    ar: "ميكروتشيب",
  },
  sterilizedLabel: {
    en: "Sterilized",
    es: "Esterilizado",
    ja: "絶育済み",
    "zh-cn": "绝育",
    ar: "مصاب",
  },
};

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
  en: "This page is not available in your language.",
  ja: "このページはご利用の言語でご覧いただけません。",
  "zh-cn": "此页面不支持您的语言。",
  ar: "هذه الصفحة غير متوفرة بلغتك.",
};

export const tablerIconMap = {
  supervised_user_circle: "tabler:user-circle",
  fire_truck: "tabler:truck",
  home: "tabler:home-heart",
};
