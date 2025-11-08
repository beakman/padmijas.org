import type { FooterItemsProps, MenuItemProps } from "./types";

export const siteMeta = {
  title: "NoiceShelter - Premium Astro template for animal shelters",
  description:
    "Give your animal shelter a professional and modern website with NoiceShelter. Elevate your web design with our premium templates.",
  baseUrl: "https://shelter.noicethemes.com",
  ogImage: "/og.png",
  ogType: "website",
  twitterCreator: "@noicethemes",
};

export const pageSize = 9;

export const mainMenu: MenuItemProps[] = [
  {
    name: {
      en: "Home",
      es: "Inicio",
    },
    href: {
      es: "/",
      en: "/",
    },
  },
  {
    name: {
      en: "Our dogs",
      es: "Nuestros perros",
    },
    href: {
      en: "/our-dogs",
      es: "/nuestros-perros",
    },
  },
  {
    name: {
      es: "Voluntariado",
      en: "Volunteer",
    },
    href: {
      es: "/voluntariado",
      en: "/volunteer",
    },
  },
  {
    name: {
      es: "Contacto",
      en: "Contact",
    },
    href: {
      es: "/contacto",
      en: "/contact",
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
    },
    items: [
      {
        text: {
          en: "Sitemap",
          es: "Mapa del sitio",
        },
        href: {
          en: "https://padmijas.org/sitemap-index.xml",
          es: "https://padmijas.org/sitemap-index.xml",
        },
        type: "link",
        target: "_self",
      },
      {
        text: {
          en: "FAQ",
          es: "Preguntas frecuentes",
        },
        href: {
          en: "/faq",
          es: "/preguntas-frecuentes",
        },
        type: "link",
        target: "_self",
      },
      {
        text: {
          en: "Donations",
          es: "Donaciones",
        },
        href: {
          en: "/donations",
          es: "/donaciones",
        },
        type: "link",
        target: "_self",
      },
      {
        text: {
          en: "Pre-adoption form",
          es: "Formulario de pre-adopción",
        },
        href: {
          en: "https://forms.gle/SAJFg2UE5iE8JFYX8",
          es: "https://forms.gle/TfttmdHkTPfEFgvF9",
        },
        type: "link",
        target: "_self",
      },
      {
        text: {
          en: "Analytics",
          es: "Analíticas",
        },
        href: {
          en: "https://analytics.padmijas.org/padmijas.org",
          es: "https://analytics.padmijas.org/padmijas.org",
        },
        type: "link",
        target: "_blank",
      },
    ],
  },
  {
    section: {
      en: "Legal",
      es: "Legal",
    },
    items: [
      {
        text: {
          en: "Privacy Policy",
          es: "Política de privacidad",
        },
        href: {
          en: "/privacy-policy",
          es: "/politica-de-privacidad",
        },
        type: "link",
        target: "_self",
      },
      {
        text: {
          en: "Accesibility",
          es: "Accesibilidad",
        },
        href: {
          en: "/accesibility",
          es: "/accesibilidad",
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
    },
    items: [
      {
        text: {
          en: "Instagram",
          es: "Instagram",
        },
        href: {
          en: "https://www.instagram.com/protectora_pad_mijascosta/",
          es: "https://www.instagram.com/protectora_pad_mijascosta/",
        },
        icon: "tabler:brand-instagram",
        type: "icon",
        target: "_blank",
      },
      {
        text: {
          en: "Facebook",
          es: "Facebook",
        },
        href: {
          en: "https://www.facebook.com/PADmijas",
          es: "https://www.facebook.com/PADmijas",
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
    },
    items: [
      {
        text: {
          en: "Camino de Acevedo Street, Mijas Costa (Behind the Royal Vet Hospital)",
          es: "Calle Camino de Acevedo s/n, Mijas Costa (Detrás de Hospital Veterinario RoyalVet)",
        },
        type: "text",
      },
    ],
  },
];
