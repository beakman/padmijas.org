/*
 * Helper functions to fetch data from Directus API
 * */
import type { Testimonial, Testimonials } from "@/api/types/testimonials.ts";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems } from "@directus/sdk";

const testimonialFields = [
  "*",
  "profile_picture",
  { translations: ["message"] },
] as const;
const client = getDirectusClient();

export async function getTestimonials(): Promise<Testimonials> {
  try {
    return (await client.request<Testimonials>(
      readItems("testimonials", {
        fields: testimonialFields,
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
