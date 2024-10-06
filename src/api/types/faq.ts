export interface Faq {
  id: number;
  translations: Array<FaqTranslation>;
}

export type FaqTranslation = {
  id: number;
  languages_code: string;
  question: string;
  answer: string;
};

export type Faqs = Array<Faq>;
