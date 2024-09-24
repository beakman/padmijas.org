/*
 * Helper functions to fetch data from Directus API
 * */
import type { Testimonial, Testimonials } from "@/api/types/testimonial.ts";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems } from "@directus/sdk";
import type { Lang } from "@/i18n";

const testimonialFields: Array<string> = ["*", "profile_picture.*", "translations.*"];
const testimonialFieldsDetail: Array<string> = [
  "*",
  "profile_picture.*",
  "cover.*",
  "gallery.*",
  "translations.*",
];
const client = getDirectusClient();

export async function getTestimonials(): Promise<Testimonials> {
  try {
    return (await client.request<Testimonials>(
      readItems("testimonials", {
        fields: testimonialFields,
        filter: {
          status: {
            _neq: "draft",
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
      filter: {
        status: {
          _neq: "draft",
        },
      },
    }),
  )) as Testimonial;
}
