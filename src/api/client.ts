import { createDirectus, rest, staticToken } from "@directus/sdk";
import type { Dog, DogTranslation, Dogs } from "@/api/types/dog.ts";
import type { Pages, PageTranslation } from "./types/pages";
import type { Testimonials, TestimonialTranslation } from "./types/testimonials";

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
  dogs: Dogs;
  pages: Pages;
  pages_translations: Array<PageTranslation>;
  testimonials: Testimonials;
  testimonials_translations: Array<TestimonialTranslation>;
  globals: Global;
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
