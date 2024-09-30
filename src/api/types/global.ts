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
};

export type Globals = Array<Global>;
