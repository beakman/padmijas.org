/*
 * Helper functions to fetch data from Directus API
 * */
import type { Dog, Dogs } from "@/api/types/dog.ts";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems, type QueryFilter } from "@directus/sdk";
import type { Item } from "@directus/types";
import type { Animal, Schema } from "../../my-schema.ts";

const dogFields = [
  "*",
  { profile_picture: ["id", "width", "height"] },
  { translations: ["description"] },
] as const;

const dogFieldsDetail = [
  "*",
  { profile_picture: ["id", "width", "height"] },
  { cover: ["id", "width", "height"] },
  { gallery: [{ directus_files_id: ["id", "width", "height"] }] },
  { translations: ["description"] },
] as const;
const client = getDirectusClient();

export async function getDogs(name: string, status: string): Promise<Dog[]> {
  const filters = {
    name,
    status,
  };
  try {
    const filter: QueryFilter<Schema, Dog> = {
      ...(filters.name && {
        name: {
          _icontains: filters.name,
        },
      }),
      ...(filters.status && {
        status: {
          _eq: filters.status,
        },
      }),
      status: {
        _neq: "draft",
      },
    };

    const response = await client.request(
      readItems("animals", {
        fields: dogFields,
        filter,
      }),
    );

    return response as Dog[];
  } catch (error) {
    console.error("Error fetching dogs", error);
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
