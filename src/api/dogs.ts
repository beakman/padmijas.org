/*
 * Helper functions to fetch data from Directus API
 * */
import type { Dog, Dogs } from "@/api/types/dog.ts";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems } from "@directus/sdk";

const dogFields = [
  "*",
  { profile_picture: ["id", "width", "height"] },
  { translations: ["description"] },
] as const;

const dogFieldsDetail = [
  "*",
  { profile_picture: ["id", "width", "height"] },
  { cover: ["id", "width", "height"] },
  { gallery: [ { directus_files_id: ["*"] }] },
  { translations: ["description"] },
] as const;
const client = getDirectusClient();

export async function getDogs(): Promise<Dogs> {
  try {
    return (await client.request<Dogs>(
      readItems("animals", {
        fields: dogFields,
        filter: {
          status: {
            _neq: "draft",
          },
        },
      }),
    )) as Dogs;
  } catch (e) {
    console.error("Error fetching dogs", e);
    return [];
  }
}

export async function getDogBySlug(slug: string, lang: string): Promise<Dog> {
  return (await client.request(
    readItem("animals", slug, {
      fields: dogFieldsDetail,
      deep: {
        translations: {
          _filter: {
            _and: [
              {
                languages_code: { _eq: lang },
              },
            ],
          },
        },
      },
      filter: {
        status: {
          _neq: "draft",
        },
      },
    }),
  )) as Dog;
}

export async function fetchDogsByBreed(category: string): Promise<Dogs> {
  return (await client.request(
    readItems("animals", {
      fields: dogFields,
      filter: {
        status: {
          _eq: "published",
        },
        breeds: {
          _intersects: [category],
        },
      },
    }),
  )) as Dogs;
}
