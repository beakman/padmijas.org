import type { Multilingual } from "@/i18n.ts";

export interface MenuItemProps {
  name: Multilingual;
  href: Multilingual;
  classes?: string;
  children?: MenuItemProps[];
  target?: string;
  rel?: string;
}

export interface FooterItemsProps {
  section: string;
  links: MenuItemProps[];
}

export interface SocialItemProps {
  name: string;
  href: string;
  icon: string;
}
