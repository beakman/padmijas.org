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
    name: "Home",
    href: "/",
  },
  {
    name: "Dogs",
    href: "/dogs",
  },

  {
    name: "Documentation",
    href: "https://docs.noicethemes.com",
  },
  {
    name: "Support",
    href: "/support",
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
