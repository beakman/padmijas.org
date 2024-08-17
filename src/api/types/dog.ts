import type { Image } from "@/api/types/image.ts";

export interface Dog {
  id: string;
  status: string;
  date_created: string;
  date_updated: string | null;
  name: string;
  gender: string;
  breeds: string;
  profile_picture: Image;
  translations: Array<string>;
  slug: string;
}

export type Dogs = Array<Dog>;
