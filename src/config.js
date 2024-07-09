export const siteMeta = {
  title: "NoiceThemes - Premium Astro and Medusa Templates",
  description:
    "Discover stunning and fully customizable Astro and Medusa templates at NoiceThemes. Perfect for creating beautiful and responsive websites effortlessly. Elevate your web design with our premium themes.",
  baseUrl: "https://noicethemes.com",
  ogImage: "./assets/og-image.png",
  ogType: "website",
  twitterCreator: "@noicethemes",
};

export const mainMenu = [
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
    icon: "twitter",
  },
  {
    name: "GitHub",
    href: "https://github.com/noicethemes",
    icon: "github",
  },
];

export const footerLinks = [
  {
    section: "Navigation",
    links: [
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
      {
        name: "About",
        href: "/about",
      },
      {
        name: "Contact",
        href: "/contact",
      },
    ],
  },
  {
    section: "Themes",
    links: [
      { name: "Neobrutralist", href: "/themes/neobrutalist" },
      { name: "Noicefolio", href: "/themes/noicefolio", disabled: true },
      { name: "StayHaven", href: "/themes/stayhaven", disabled: true },
    ],
  },
  {
    section: "Social",
    links: [
      {
        name: "Twitter",
        href: "https://twitter.com/noicethemes",
        icon: "twitter",
      },
      {
        name: "GitHub",
        href: "https://github.com/noicethemes",
        icon: "github",
      },
    ],
  },
  {
    section: "Legal",
    links: [
      { name: "License", href: "/license" },
      { name: "Refund Policy", href: "/refund-policy" },
      { name: "Privacy Policy", href: "/privacy-policy" },
      { name: "Terms of Service", href: "/terms-of-service" },
      { name: "Support", href: "/support" },
    ],
  },
];
