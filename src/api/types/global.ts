export type Global = {
  id: number;
  address: string;
  email: string;
  translations: Array<GlobalTranslation>;
};

export type GlobalTranslation = {
  id: number;
  languages_code: string;
  global_message: string;
  global_message_href?: string;
};

export type Globals = Array<Global>;
