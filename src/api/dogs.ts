/*
 * Helper functions to fetch data from Directus API
 * */
import type { Dog, Dogs } from "@/api/types/dog.ts";
import { getDirectusClient, type Schema } from "@/api/client.ts";
import { readItem, readItems, type QueryFilter } from "@directus/sdk";

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

interface DogStatusCount {
  published: number;
  adopted: number;
  reserved: number;
  draft: number;
}

export async function getDogs(
  filter?: QueryFilter<Schema, Dog>,
): Promise<Dog[]> {
  try {
    const response = await client.request(
      readItems("animals", {
        fields: dogFields,
        filter,
        sort: ["name"],
      }),
    );

    return response as Dog[];
  } catch (error) {
    console.error("Error fetching dogs", error);
    return [];
  }
}

export async function getDogsCounts(): Promise<DogStatusCount> {
  const response = await client.request(
    readItems("animals", {
      fields: ["slug", "status"],
    }),
  );
  return response.reduce(
    (counts, item) => {
      counts[item.status]++;
      return counts;
    },
    { published: 0, adopted: 0, reserved: 0, draft: 0 },
  );
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
