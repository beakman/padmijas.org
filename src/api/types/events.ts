import type { Image } from "@/api/types/image.ts";

export interface Event {
  id: number;
  status: "published" | "draft" | "archived";
  datetime: Date;
  category: string;
  location: string;
  cover?: Image;
  translations: Array<EventsTranslation>;
}

export type EventsTranslation = {
  id: number;
  events_id: string;
  title: string;
  slug: string;
  description: string;
  languages_code: string;
};

export type Events = Array<Event>;
