import type { Image } from "@/api/types/image.ts";

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
  positions: Array<Position>;
  translations: Array<PageTranslation>;
}

export type Position = {
  id: number;
  name: string;
  description: string;
};

export type PageTranslation = {
  id: number;
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  content: string;
  locale: string;
};

export type Pages = Array<Page>;
