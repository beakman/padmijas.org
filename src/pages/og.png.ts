// src/pages/og.png.ts
import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";

export const GET: APIRoute = async () => {
  const fontFile = await fetch(
    "https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
  );
  const fontData: ArrayBuffer = await fontFile.arrayBuffer();

  return await satoriAstroOG({
    template: html`<div
      style="height: 100%;width:100%;display:flex;flex-direction:column;align-items:center;justify-content:center;background-color:#fbeb21;font-size:64px;font-weight:700;"
    >
      <img
        src="https://utfs.io/f/yWKelNW56BapKxrlzCSmbzUMZ2GxBvq5Sk4TQFV6HApuOtL7"
        width="240"
        height="240"
      />
      <div style="margin-top: 30px">PAD</div>
      <div
        style="margin-top:10px;font-family:sans-serif;font-size:32px;color:rgba(0, 0, 0, 0.5)"
      >
        https://padmijas.org
      </div>
    </div>`,
    width: 1200,
    height: 630,
  }).toResponse({
    satori: {
      fonts: [
        {
          name: "Inter Latin",
          data: fontData,
          style: "normal",
        },
      ],
    },
  });
};
