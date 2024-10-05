/*
 * Helper functions to fetch data from Directus API
 * */
import type { Testimonial, Testimonials } from "@/api/types/testimonials.ts";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems } from "@directus/sdk";

const testimonialFields = [
  "*",
  { profile_picture: ["id", "width", "height"] },
  { translations: ["message"] },
] as const;
const client = getDirectusClient();

export async function getTestimonials(lang?: string): Promise<Testimonials> {
  try {
    return (await client.request<Testimonials>(
      readItems("testimonials", {
        fields: testimonialFields,
        deep: {
          translations: {
            _filter: {
              languages_code: { _eq: lang },
            },
          },
        },
      }),
    )) as Testimonials;
  } catch (e) {
    console.error("Error fetching testimonials", e);
    return [];
  }
}

export async function getTestimonial(id: string): Promise<Testimonial> {
  return (await client.request(
    readItem("testimonials", id, {
      fields: testimonialFields,
    }),
  )) as Testimonial;
}
