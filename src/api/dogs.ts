/*
 * Helper functions to fetch data from Directus API
 * */
import type { Dog, Dogs } from "@/api/types/dog.ts";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems } from "@directus/sdk";
import type { Lang } from "@/i18n";

const dogFields = ["*", profile_picture: ["id"], translations: ["description"]] as const;
const dogFieldsDetail: Array<string> = [
  "*",
  profile_picture: ["id"],
  cover: ["id"],
  gallery: ["id"],
  translations: ["description"],
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

export async function getDog(id: string): Promise<Dog> {
  return (await client.request(
    readItem("animals", id, {
      fields: dogFields,
      filter: {
        status: {
          _neq: "draft",
        },
      },
    }),
  )) as Dog;
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
          _eq: category,
        },
      },
    }),
  )) as Dogs;
}
