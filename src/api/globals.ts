/*
 * Helper functions to fetch data from Directus API
 * */
import type { Global, GlobalTranslation } from "@/api/types/global.ts";
import { getDirectusClient } from "@/api/client.ts";
import { readSingleton } from "@directus/sdk";

const globalFields = ["*", { translations: ["global_message"] }] as const;
const client = getDirectusClient();

export async function getGlobal(lang?: string): Promise<Global> {
  return (await client.request<Global>(
    readSingleton("global", {
      fields: globalFields,
      deep: {
        translations: {
          _filter: {
            languages_code: { _eq: lang },
          },
        },
      },
    }),
  )) as Global;
}
