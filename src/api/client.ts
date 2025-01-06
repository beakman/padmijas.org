import { createDirectus, rest, staticToken } from "@directus/sdk";
import type { Image } from "@/api/types/image.ts";
import { getImage } from "astro:assets";
import type { DogTranslation, DogsFile, Dogs } from "@/api/types/dog.ts";
import type {
  Pages,
  PagesPositions,
  PagesTranslation,
  Position,
} from "./types/pages";
import type { Events, EventsTranslation } from "./types/events";
import type {
  Testimonials,
  TestimonialTranslation,
} from "./types/testimonials";
import type { Global, GlobalTranslation } from "@/api/types/global.ts";
import type { Faq, Faqs, FaqTranslation } from "./types/faq";

export type Error = {
  message: string;
  extensions: {
    code: string;
    details: string;
  };
};

export interface Schema {
  animals: Dogs;
  animals_translations: Array<DogTranslation>;
  animals_files: Array<DogsFile>;
  pages: Pages;
  positions: Position;
  pages_positions: Array<PagesPositions>;
  pages_translations: Array<PagesTranslation>;
  events: Events;
  events_translations: Array<EventsTranslation>;
  testimonials: Testimonials;
  testimonials_translations: Array<TestimonialTranslation>;
  global: Global;
  global_translations: Array<GlobalTranslation>;
  faq: Faqs;
  faq_translations: Array<FaqTranslation>;
  directus_files: Array<Image>;
}

export function getDirectusClient() {
  const URL = import.meta.env.DIRECTUS_URL || process.env.DIRECTUS_URL;
  const TOKEN = import.meta.env.DIRECTUS_TOKEN || process.env.DIRECTUS_TOKEN;

  if (!URL || !TOKEN) {
    throw new Error("Missing backend URL and/or TOKEN.");
  }
  return createDirectus<Schema>(URL).with(rest()).with(staticToken(TOKEN));
}

export function getAssetURL(assetId: string, format?: string) {
  const URL = import.meta.env.DIRECTUS_URL || process.env.DIRECTUS_URL;
  return `${URL}/assets/${assetId}${format ? `?key=${format}` : ""}`;
}

export async function getImageFromId(url: string, imageOptions: any) {
  const URL = import.meta.env.DIRECTUS_URL || process.env.DIRECTUS_URL;
  const imgUrl = `${URL}/assets/${url}`;
  return await getImage({ src: imgUrl, ...imageOptions });
}
