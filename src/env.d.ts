/// <reference path="../.astro/types.d.ts" />
/// <reference types="astro/client" />

interface Window {
  recaptchaCallback: (token: string) => void;
}
