/*
 * Helper functions to fetch data from Directus API
 * */
import type { Event, Events } from "@/api/types/events";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems } from "@directus/sdk";

const eventFields = [
  "*",
  { cover: ["id", "width", "height"] },
  {
    translations: ["*"],
  },
] as const;
const eventFieldsDetail = [
  "*",
  { cover: ["id", "width", "height"] },
  {
    translations: ["*"],
  },
] as const;
const client = getDirectusClient();

export async function getEvents(lang?: string): Promise<Events> {
  try {
    return await client.request<Events>(
      readItems("events", {
        fields: eventFields,
        filter: {
          status: {
            _neq: "draft",
          },
        },
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
      }),
    );
  } catch (e) {
    console.error("Error fetching Events", e);
    return [];
  }
}

export async function getEvent(id: string): Promise<Event> {
  return (await client.request(
    readItem("events", id, {
      fields: eventFieldsDetail,
      filter: {
        status: {
          _neq: "draft",
        },
      },
    }),
  )) as Event;
}
