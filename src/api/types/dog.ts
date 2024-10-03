import type { Image } from "@/api/types/image.ts";

export interface Dog {
  id: string;
  cover: Image;
  birth_date: Date;
  breeds: Array<string>;
  date_created: Date;
  date_updated: Date | null;
  gallery: Array<Image>;
  gender: string;
  name: string;
  profile_picture: Image;
  slug: string;
  sort: number;
  size: string;
  status: "draft" | "published" | "adopted" | "reserved";
  translations: Array<DogTranslation>;
  user_created: string;
}

export type DogTranslation = {
  id: number;
  description: string;
  languages_code: string;
};

export interface DogsFile {
	/** @required */
	id: number;
	animals_slug?: Dog
	directus_files_id?: DirectusFile | string | null;
}

export type Dogs = Array<Dog>;
