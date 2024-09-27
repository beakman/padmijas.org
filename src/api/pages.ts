/*
 * Helper functions to fetch data from Directus API
 * */
import type { Page, Pages } from "@/api/types/pages";
import { getDirectusClient } from "@/api/client.ts";
import {
  readItem,
  readItems,
  type Query,
  type QueryFilter,
} from "@directus/sdk";
import type { Lang } from "@/i18n";

const pageFields: Array<string> = ["*", "cover.*", "translations.*"];
const pageFieldsDetail: Array<string> = ["*", "cover.*", "translations.*"];
const client = getDirectusClient();

export async function getPages(positions?: Array<string>): Promise<Pages> {
  try {
    const filters: QueryFilter<Page, "read"> = {
      fields: pageFields,
      filter: {
        status: {
          _neq: "draft",
        },
      },
    };

    // Add position filter if positions are provided
    if (positions && positions.length > 0) {
      filters.filter = {
        ...filters.filter,
        positions: {
          positions_slug: {
            _in: positions,
          },
        },
      };
    }

    return await client.request<Pages>(readItems("pages", filters));
  } catch (e) {
    console.error("Error fetching Pages", e);
    return [];
  }
}

export async function getPage(id: string): Promise<Page> {
  return (await client.request(
    readItem("pages", id, {
      fields: pageFields,
      filter: {
        status: {
          _neq: "draft",
        },
      },
    }),
  )) as Page;
}

export async function getPageBySlug(
  slug: string,
  lang: string,
): Promise<Page | null> {
  const pages = await client.request<Pages>(
    readItems("pages", {
      fields: pageFieldsDetail,
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
                slug: { _eq: slug },
              },
            ],
          },
        },
      },
    }),
  );
  return pages.length > 0 ? pages[0] : null;
}
