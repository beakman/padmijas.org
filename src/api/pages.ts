/*
 * Helper functions to fetch data from Directus API
 * */
import type { Page, Pages } from "@/api/types/pages";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems } from "@directus/sdk";

// id: number;
// slug: string;
// link: string;
// title: string;
// subtitle: string;
// description: string;
// content: Content;
// cta: string;
// languages_code: string;

const pageFields = [
  "*",
  { cover: ["id", "width", "height"] },
  {
    translations: ["*"],
  },
] as const;
const pageFieldsDetail = [
  "*",
  { cover: ["id", "width", "height"] },
  {
    translations: ["*"],
  },
] as const;
const client = getDirectusClient();

export async function getPages(
  positions?: Array<string>,
  lang?: string,
): Promise<Pages> {
  try {
    // let filters = {
    //   fields: pageFields,
    //   filter: {
    //     status: {
    //       _neq: "draft",
    //     },
    //   },
    // };

    return await client.request<Pages>(
      readItems("pages", {
        fields: pageFields,
        filter: {
          status: {
            _neq: "draft",
          },
          positions: {
            positions_slug: {
              _in: positions,
            },
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
    console.error("Error fetching Pages", e);
    return [];
  }
}

export async function getPage(id: string): Promise<Page> {
  return (await client.request(
    readItem("pages", id, {
      fields: pageFieldsDetail,
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
