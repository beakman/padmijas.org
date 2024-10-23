import type { Image } from "@/api/types/image.ts";
import type { Block } from "./block";
import type { User } from "./user";

export interface Page {
  id: number;
  status: "published" | "draft" | "archived";
  sort: number | null;
  user_created: User;
  date_created: Date;
  user_updated: User;
  date_updated: Date | null;
  icon: string;
  cover?: Image;
  positions: Array<PagesPositions>;
  translations: Array<PagesTranslation>;
}

export type Position = {
  slug: string;
  description: string;
};

export type PagesPositions = {
  id: number;
  pages_id: string;
  positions_slug: string;
};

export type PagesTranslation = {
  id: number;
  pages_id: string;
  slug: string;
  link: string;
  title: string;
  subtitle: string;
  description: string;
  content: Content;
  cta: string;
  cta_href: string;
  languages_code: string;
};

export type Content = {
  time: EpochTimeStamp;
  blocks: Array<Block>;
  version: string;
};

export type Pages = Array<Page>;
