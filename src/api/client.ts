import { createDirectus, rest, staticToken } from "@directus/sdk";
import type { Dog, Dogs } from "@/api/types/dog.ts";

export type Error = {
  message: string;
  extensions: {
    code: string;
    details: string;
  };
};

interface Schema {
  dogs: Dogs;
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
