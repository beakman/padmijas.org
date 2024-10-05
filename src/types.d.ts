import type { Multilingual } from "@/i18n.ts";

export interface MenuItemProps {
  name: Multilingual;
  href: Multilingual;
  classes?: string;
  children?: MenuItemProps[];
  target?: string;
  rel?: string;
}

export interface FooterItemProps {
  text: Multilingual;
  href?: Multilingual;
  type?: "link" | "icon" | "text";
  icon?: string;
  classes?: string;
  target?: string;
  rel?: string;
}

export interface FooterItemsProps {
  section: Multilingual;
  items: FooterItemProps[];
}

export interface SocialItemProps {
  name: string;
  href: string;
  icon: string;
}
