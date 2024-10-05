import type { FooterItemsProps, MenuItemProps } from "./types";

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

export const footerLinks: FooterItemsProps[] = [
  {
    section: {
      en: "Links of interest",
      es: "Enlaces de interés",
      ja: "お好きなリンク",
      "zh-cn": "关注的链接",
      ar: "الروابط المهتمة",
    },
    items: [
      {
        text: {
          en: "Sitemap",
          es: "Mapa del sitio",
          ja: "サイトのマップ",
          "zh-cn": "站点地图",
          ar: "خريطة الموقع",
        },
        href: {
          en: "/sitemap",
          es: "/sitemap",
          ja: "/sitemap",
          "zh-cn": "/sitemap",
          ar: "/sitemap",
        },
        type: "link",
        target: "_self",
      },
      {
        text: {
          en: "FAQ",
          es: "Preguntas frecuentes",
          ja: "よくある質問",
          "zh-cn": "常见问题",
          ar: "الأسئلة المتكررة",
        },
        href: {
          en: "/faq",
          es: "/preguntas-frecuentes",
          ja: "/よくある質問",
          "zh-cn": "/常见问题",
          ar: "/الأسئلة المتكررة",
        },
        type: "link",
        target: "_self",
      },
      {
        text: {
          en: "Donate",
          es: "Donaciones",
          ja: "寄付",
          "zh-cn": "捐赠",
          ar: "تبرعات",
        },
        href: {
          en: "/donate",
          es: "/donaciones",
          ja: "/寄付",
          "zh-cn": "/捐赠",
          ar: "/تبرعات",
        },
        type: "link",
        target: "_self",
      },
    ],
  },
  {
    section: {
      en: "Legal",
      es: "Legal",
      ja: "法的",
      "zh-cn": "法律",
      ar: "قانوني",
    },
    items: [
      {
        text: {
          en: "Privacy Policy",
          es: "Política de privacidad",
          ja: "プライバシーポリシー",
          "zh-cn": "隐私政策",
          ar: "سياسة الخصوصية",
        },
        href: {
          en: "/privacy-policy",
          es: "/politica-de-privacidad",
          ja: "/プライバシーポリシー",
          "zh-cn": "/隐私政策",
          ar: "/سياسة الخصوصية",
        },
        type: "link",
        target: "_self",
      },
      {
        text: {
          en: "Cookie Policy",
          es: "Política de cookies",
          ja: "クッキーポリシー",
          "zh-cn": "Cookie 政策",
          ar: "سياسة الكوكيز",
        },
        href: {
          en: "/cookie-policy",
          es: "/politica-de-cookies",
          ja: "/クッキーポリシー",
          "zh-cn": "/Cookie 政策",
          ar: "/سياسة الكوكيز",
        },
        type: "link",
        target: "_self",
      },
    ],
  },
  {
    section: {
      en: "Social",
      es: "Social",
      ja: "ソーシャル",
      "zh-cn": "社交",
      ar: "اجتماعي",
    },
    items: [
      {
        text: {
          en: "Instagram",
          es: "Instagram",
          ja: "Instagram",
          "zh-cn": "Instagram",
          ar: "انستغرام",
        },
        href: {
          en: "https://www.instagram.com/protectora_pad_mijascosta/",
          es: "https://www.instagram.com/protectora_pad_mijascosta/",
          ja: "https://www.instagram.com/protectora_pad_mijascosta/",
          "zh-cn": "https://www.instagram.com/protectora_pad_mijascosta/",
          ar: "https://www.instagram.com/protectora_pad_mijascosta/",
        },
        icon: "tabler:brand-instagram",
        type: "icon",
        target: "_blank",
      },
      {
        text: {
          en: "Facebook",
          es: "Facebook",
          ja: "Facebook",
          "zh-cn": "Facebook",
          ar: "الفيسبوك",
        },
        href: {
          en: "https://www.facebook.com/PADmijas",
          es: "https://www.facebook.com/PADmijas",
          ja: "https://www.facebook.com/PADmijas",
          "zh-cn": "https://www.facebook.com/PADmijas",
          ar: "https://www.facebook.com/PADmijas",
        },
        icon: "tabler:brand-facebook",
        type: "icon",
        target: "_blank",
      },
    ],
  },
  {
    section: {
      en: "Contact",
      es: "Contacto",
      ja: "お問い合わせ",
      "zh-cn": "联系我们",
      ar: "اتصل بنا",
    },
    items: [
      {
        text: {
          en: "contacto@padmijas.org",
          es: "contacto@padmijas.org",
          ja: "contacto@padmijas.org",
          "zh-cn": "contacto@padmijas.org",
          ar: "contacto@padmijas.org",
        },
        href: {
          en: "mailto:contacto@padmijas.org",
          es: "mailto:contacto@padmijas.org",
          ja: "mailto:contacto@padmijas.org",
          "zh-cn": "mailto:contacto@padmijas.org",
          ar: "mailto:contacto@padmijas.org",
        },
        type: "link",
        target: "_self",
      },
      {
        text: {
          en: "Camino de Acevedo Street, Mijas Costa (Behind the Royal Vet Hospital)",
          es: "Calle Camino de Acevedo s/n, Mijas Costa (Detrás de Hospital Veterinario RoyalVet)",
          ja: "アセヴェドのキャンプウェイの名前、ミヤスコスタ（ロイヤルベットニアリオールベットニアの病院）",
          "zh-cn":
            "阿塞维德克拉斯名字，米贾斯科斯（后方医院维特林维特尼的病院）",
          ar: "المدينة السياحية الكاميوند والناظرة، ميجاس كوستا، (خلف مستشفي الروايان الروايان)",
        },
        type: "text",
      },
    ],
  },
];
