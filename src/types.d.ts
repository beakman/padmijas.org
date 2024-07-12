export interface MenuItemProps {
  name: string;
  href?: string;
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
