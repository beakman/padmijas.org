/*
 * Helper functions to fetch data from Directus API
 * */
import type { Dog, Dogs } from "@/api/types/dog.ts";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems } from "@directus/sdk";

const dogFields: Array<string> = ["*", "profile_picture.*", "translations.*"];
const client = getDirectusClient();

export async function getDogs(): Promise<Dogs> {
  console.log("getting dogs");
  try {
    return (await client.request<Dogs>(
      readItems("dogs", {
        fields: dogFields,
        filter: {
          status: {
            _eq: "published",
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
    readItem("dogs", id, {
      fields: dogFields,
      filter: {
        status: {
          _eq: "published",
        },
      },
    }),
  )) as Dog;
}

export async function getDogBySlug(slug: string): Promise<Dog> {
  return (await client.request(
    readItem("dogs", slug, {
      fields: dogFields,
      filter: {
        status: {
          _eq: "published",
        },
      },
    }),
  )) as Dog;
}

export async function fetchDogsByBreed(category: string): Promise<Dogs> {
  return (await client.request(
    readItems("dogs", {
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
