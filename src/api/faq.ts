/*
 * Helper functions to fetch data from Directus API
 * */
import type { Faq, Faqs } from "@/api/types/faq.ts";
import { getDirectusClient } from "@/api/client.ts";
import { readItem, readItems } from "@directus/sdk";

const faqFields = ["*", { translations: ["question", "answer"] }] as const;
const client = getDirectusClient();

export async function getFaqs(lang?: string): Promise<Faqs> {
  try {
    return (await client.request<Faqs>(
      readItems("faq", {
        fields: faqFields,
        deep: {
          translations: {
            _filter: {
              languages_code: { _eq: lang },
            },
          },
        },
      }),
    )) as Faqs;
  } catch (e) {
    console.error("Error fetching FAQs", e);
    return [];
  }
}

export async function getFaq(id: string): Promise<Faq> {
  return (await client.request(
    readItem("faq", id, {
      fields: faqFields,
    }),
  )) as Faq;
}
