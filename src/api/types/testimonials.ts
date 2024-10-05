import type { Image } from "@/api/types/image.ts";

// "id": 1,
// "user_updated": null,
// "date_updated": null,
// "name": "Sofia Louise Martinez",
// "profile_picture": "f74b59db-d9a0-4e82-a4ba-636a2aa9c0a7",
// "translations": [
// 1,
// 2
// ]

export interface Testimonial {
  id: number;
  user_updated: string | null;
  date_updated: string | null;
  name: string;
  handler: string;
  profile_picture: Image;
  translations: Array<TestimonialTranslation>;
}

export type TestimonialTranslation = {
  id: number;
  languages_code: string;
  message: string;
};

export type Testimonials = Array<Testimonial>;
