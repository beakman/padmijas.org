import type { Image } from "./image";

export interface User {
  id: string;
  first_name?: string;
  last_name?: string;
  email?: string;
  avatar?: Image;
  last_access?: string | null;
}
