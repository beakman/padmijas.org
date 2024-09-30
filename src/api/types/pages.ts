import type { Image } from "@/api/types/image.ts";
import type { Block } from "./block";

export interface Page {
  id: number;
  status: "published" | "draft";
  sort: number | null;
  user_created: Date;
  date_created: Date;
  user_updated: Date;
  date_updated: Date | null;
  icon: string;
  cover: Image;
  positions: Array<PagesPosition>;
  translations: Array<PageTranslation>;
}

export type Position = {
  id: number;
  name: string;
  description: string;
};

export type PagesPositions = {
  id: number;
  pages_id: string;
  positions_slug: string;
};

export type PageTranslation = {
  id: number;
  slug: string;
  link: string;
  title: string;
  subtitle: string;
  description: string;
  content: Content;
  cta: string;
  languages_code: string;
};
export type Content = {
  time: EpochTimeStamp;
  blocks: Array<Block>;
  version: string;
};

export type Pages = Array<Page>;
