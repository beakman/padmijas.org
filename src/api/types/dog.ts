import type { Image } from "@/api/types/image.ts";

// id: 1,
// status: 'published',
// sort: null,
// user_created: 'a0c67779-c4f0-4244-a2d9-b227c1b3cb82',
// date_created: '2024-08-15T09:29:28.463Z',
// user_updated: null,
// date_updated: null,
// name: 'Chocolate',
// profile_picture: '59de4734-4c5c-4d57-b198-81a9745b2ee7',
// gender: 'male',
// breeds: [ 'podenco' ],
// slug: 'chocolate',
// gallery: [ 1, 2 ],
// translations: [ 1, 2 ]

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
  locale: string;
};

export type Dogs = Array<Dog>;
