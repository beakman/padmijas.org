import { createDirectus, rest, staticToken } from "@directus/sdk";
import type { DogTranslation, Dogs } from "@/api/types/dog.ts";
import type {
  Pages,
  PagesPositions,
  PagesTranslation,
  Position,
} from "./types/pages";
import type {
  Testimonials,
  TestimonialTranslation,
} from "./types/testimonials";
import type { Global, GlobalTranslation } from "@/api/types/global.ts";

export type Error = {
  message: string;
  extensions: {
    code: string;
    details: string;
  };
};

interface Schema {
  animals: Dogs;
  animals_translations: Array<DogTranslation>;
  pages: Pages;
  positions: Position;
  pages_positions: Array<PagesPositions>;
  pages_translations: Array<PagesTranslation>;
  testimonials: Testimonials;
  testimonials_translations: Array<TestimonialTranslation>;
  globals: Global;
  globals_translations: Array<GlobalTranslation>;
}

export function getDirectusClient() {
  const URL = import.meta.env.DIRECTUS_URL || process.env.DIRECTUS_URL;
  const TOKEN = import.meta.env.DIRECTUS_TOKEN || process.env.DIRECTUS_TOKEN;

  if (!URL || !TOKEN) {
    throw new Error("Missing backend URL and/or TOKEN.");
  }
  return createDirectus<Schema>(URL).with(rest()).with(staticToken(TOKEN));
}

export function getAssetURL(assetId: string) {
  const URL = import.meta.env.DIRECTUS_URL || process.env.DIRECTUS_URL;
  return `${URL}/assets/${assetId}?key=profile`;
}
