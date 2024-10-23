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
  back: {
    en: "Back",
    es: "Volver",
    ja: "戻る",
    "zh-cn": "返回",
    ar: "الرجوع",
  },
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

export const contactForm = {
  successMessage: {
    en: "Thank you for your message. We will get back to you soon.",
    es: "Gracias por tu mensaje. Te contactaremos pronto.",
    ja: "ありがとうございます。まもなくご連絡いたします。",
    "zh-cn": "感谢您的信息。我们将尽快回复您。",
    ar: "شكرا على رسالتك. سنرد عليك قريبا.",
  },
  errorMessage: {
    en: "Something went wrong. Please try again later.",
    es: "Algo salió mal. Por favor, inténtalo de nuevo o contáctanos por correo electrónico.",
    ja: "エラーが発生しました。後でもう一度お試しください。",
    "zh-cn": "出错了。请稍后再试。",
    ar: "حدث خطأ. يرجى المحاولة مرة أخرى لاحقا.",
  },
  nameLabel: {
    en: "Name",
    es: "Nombre",
    ja: "名前",
    "zh-cn": "姓名",
    ar: "الاسم",
  },
  namePlaceholder: {
    en: "Your name",
    es: "Tu nombre",
    ja: "あなたの名前",
    "zh-cn": "你的姓名",
    ar: "اسمك",
  },
  messageLabel: {
    en: "Message",
    es: "Mensaje",
    ja: "メッセージ",
    "zh-cn": "信息",
    ar: "الرسالة",
  },
  messagePlaceholder: {
    en: "Your message",
    es: "Tu mensaje",
    ja: "あなたのメッセージ",
    "zh-cn": "你的信息",
    ar: "رسالتك",
  },
  submitButton: {
    en: "Submit",
    es: "Enviar",
    ja: "送信",
    "zh-cn": "提交",
    ar: "إرسال",
  },
  errorInvalidName: {
    en: "Please enter a username.",
    es: "Por favor, introduce tu nombre.",
    ja: "ユーザー名を入力してください。",
    "zh-cn": "请输入用户名。",
    ar: "الرجاء إدخال اسم المستخدم.",
  },
  errorInvalidEmail: {
    en: "Email is not valid.",
    es: "El correo electrónico no es válido.",
    ja: "メールアドレスが正しくありません。",
    "zh-cn": "电子邮件无效。",
    ar: "البريد الإلكتروني غير صالح.",
  },
  errorInvalidMessage: {
    en: "Your message is too short.",
    es: "Tu mensaje es demasiado corto.",
    ja: "メッセージが短すぎます。",
    "zh-cn": "您的信息太短了。",
    ar: "رسالتك طويلة جدا.",
  },
  disclaimer: {
    en: "By submitting this form, you acknowledge and agree to the collection of your personal information.",
    es: "Al enviar este formulario de contacto, reconoces y aceptas la recopilación de tu información personal.",
    ja: "このフォームを送信することにより、個人情報の収集に同意したことになります。",
    "zh-cn": "提交此表单，表示您已经同意收集您的个人信息。",
    ar: "عن طريق إرسال هذا النموذج، فإنك توافق على وجود المعلومات الشخصية الخاصة بك.",
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
