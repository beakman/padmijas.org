import type { MenuItemProps } from "./types";

export const siteMeta = {
  title: "NoiceThemes - Premium Astro and Medusa Templates",
  description:
    "Discover stunning and fully customizable Astro and Medusa templates at NoiceThemes. Perfect for creating beautiful and responsive websites effortlessly. Elevate your web design with our premium themes.",
  baseUrl: "https://noicethemes.com",
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
    name: "Themes",
    href: "/themes",
  },
  {
    name: "Documentation",
    href: "https://docs.noicethemes.com",
  },
  { name: "Support", href: "/support" },
  { name: "Plugins", href: "/plugins" },
  {
    name: "About",
    href: "/about",
  },
  {
    name: "Contact",
    href: "/contact",
  },
];

export const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/noicethemes",
    icon: "tabler:brand-twitter",
  },
  {
    name: "GitHub",
    href: "https://github.com/noicethemes",
    icon: "tabler:brand-github",
  },
  {
    name: "Instagram",
    href: "https://discord.gg/noicethemes",
    icon: "tabler:brand-instagram",
  },
];

export const footerLinks = [
  {
    section: "Navigation",
    links: [
      {
        name: "Home",
        href: "/",
        target: "_self",
      },
      {
        name: "Themes",
        href: "/themes",
        target: "_self",
      },
      {
        name: "Documentation",
        href: "https://docs.noicethemes.com",
        target: "_blank",
      },
      {
        name: "About",
        href: "/about",
        target: "_self",
      },
      {
        name: "Contact",
        href: "/contact",
        target: "_self",
      },
    ],
  },
  {
    section: "Themes",
    links: [
      { name: "Neobrutralist", href: "/themes/neobrutalist", target: "_self" },
      {
        name: "Noicefolio",
        href: "/themes/noicefolio",
        disabled: true,
        target: "_self",
      },
      {
        name: "StayHaven",
        href: "/themes/stayhaven",
        disabled: true,
        target: "_self",
      },
    ],
  },
  {
    section: "Social",
    links: [
      {
        name: "Twitter",
        href: "https://twitter.com/noicethemes",
        icon: "twitter",
        target: "_blank",
      },
      {
        name: "GitHub",
        href: "https://github.com/noicethemes",
        icon: "github",
        target: "_blank",
      },
    ],
  },
  {
    section: "Legal",
    links: [
      { name: "License", href: "/license", target: "_self" },
      { name: "Refund Policy", href: "/refund-policy", target: "_self" },
      { name: "Privacy Policy", href: "/privacy-policy", target: "_self" },
      { name: "Terms of Service", href: "/terms-of-service", target: "_self" },
      { name: "Support", href: "/support", target: "_self" },
    ],
  },
];
