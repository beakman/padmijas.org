export type Global = {
  id: number;
  address: "Calle Camino de Acevedo s/n, Mijas Costa";
  email: "contacto@padmijas.org";
  translations: Array<GlobalTranslation>;
};

export type GlobalTranslation = {
  id: number;
  locale: string;
  global_message: string;
};

export type Globals = Array<Global>;
