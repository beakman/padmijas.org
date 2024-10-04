import type { MenuItemProps } from "./types";

export const siteMeta = {
  title: "NoiceShelter - Premium Astro template for animal shelters",
  description:
    "Give your animal shelter a professional and modern website with NoiceShelter. Elevate your web design with our premium templates.",
  baseUrl: "https://shelter.noicethemes.com",
  ogImage: "./assets/og-image.png",
  ogType: "website",
  twitterCreator: "@noicethemes",
};

export const pageSize = 9;

export const mainMenu: MenuItemProps[] = [
  {
    name: {
      en: "Home",
      es: "Inicio",
      ja: "ホーム",
      "zh-cn": "主页",
      ar: "الصفحة الرئيسية",
    },
    href: {
      es: "/",
      en: "/",
      ja: "/",
      "zh-cn": "/",
      ar: "/",
    },
  },
  {
    name: {
      en: "Our dogs",
      es: "Nuestros perros",
      ja: "犬たち",
      "zh-cn": "我们的狗",
      ar: "أنا الكلب",
    },
    href: {
      en: "/our-dogs",
      es: "/nuestros-perros",
      ja: "/犬たち",
      "zh-cn": "/我们的狗",
      ar: "/أنا-الكلب",
    },
  },
  {
    name: {
      es: "Voluntariado",
      en: "Volunteer",
      ja: "ボランティア",
      "zh-cn": "志愿者",
      ar: "متطوع",
    },
    href: {
      es: "/voluntariado",
      en: "/volunteer",
      ja: "/ボランティア",
      "zh-cn": "/志愿者",
      ar: "/متطوع",
    },
  },
  {
    name: {
      es: "Contacto",
      en: "Contact",
      ja: "お問い合わせ",
      "zh-cn": "联系我们",
      ar: "اتصل بنا",
    },
    href: {
      es: "/contacto",
      en: "/contact",
      ja: "/お問い合わせ",
      "zh-cn": "/联系我们",
      ar: "/اتصل بنا",
    },
  },
];

export const socialLinks = [
  {
    name: "X",
    href: "https://x.com/protectora_pad",
    icon: "tabler:brand-x",
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/PADmijas",
    icon: "tabler:brand-facebook",
  },
  {
    name: "Instagram",
    href: "https://www.instagram.com/protectora_pad_mijascosta/",
    icon: "tabler:brand-instagram",
  },
];

export const footerLinks = [
  {
    section: "Enlaces de interés",
    links: [
      {
        name: "Mapa del sitio",
        href: "/sitemap",
        target: "_self",
      },
      {
        name: "Preguntas frecuentes",
        href: "/preguntas-frecuentes",
        target: "_self",
      },
      {
        name: "Donaciones",
        href: "/donaciones",
        target: "_self",
      },
    ],
  },
  {
    section: "Legal",
    links: [
      {
        name: "Política de privacidad",
        href: "/politica-de-privacidad",
        target: "_self",
      },
      {
        name: "Política de cookies",
        href: "/politica-de-cookies",
        target: "_self",
      },
    ],
  },
  {
    section: "Social",
    links: [
      {
        name: "Instagram",
        href: "https://www.instagram.com/protectora_pad_mijascosta/",
        icon: "tabler:brand-instagram",
        target: "_blank",
      },
      {
        name: "Facebook",
        href: "https://www.facebook.com/PADmijas",
        icon: "tabler:brand-facebook",
        target: "_blank",
      },
    ],
  },
];
