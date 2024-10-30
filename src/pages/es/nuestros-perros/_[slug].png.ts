// src/pages/og.png.ts
import type { APIRoute } from "astro";
import { satoriAstroOG } from "satori-astro";
import { html } from "satori-html";
import { getDogs } from "@/api/dogs";
import type { Dog, Dogs } from "@/api/types/dog";
import type { InferGetStaticPropsType } from "astro";
import { getAssetURL } from "@/api/client";

export async function getStaticPaths() {
  const dogs = (await getDogs()) as Dogs;

  return dogs.map((dog: Dog) => ({
    params: {
      slug: dog.slug,
    },
    props: {
      dog,
      picture: dog.profile_picture
        ? getAssetURL(dog.profile_picture.id, "og-dog")
        : "https://utfs.io/f/yWKelNW56Bapwaky8AGU9BonWtzuK7ml3Ij6LP8dS5f1sETp",
      gender: dog.gender === "male" ? "Macho" : "Hembra",
      ageTimeAgo: dog.birth_date
        ? new Date(dog.birth_date).toLocaleDateString("es", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric",
          })
        : "No disponible",
    },
  }));
}
type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute = async ({ props }) => {
  const { dog, picture, gender, ageTimeAgo } = props;
  const fontFile = await fetch(
    "https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
  );
  const fontData: ArrayBuffer = await fontFile.arrayBuffer();

  return await satoriAstroOG({
    template: html`<div
  style={{
    height: "100%",
    width: "100%",
    position: "relative",
    display: "flex",
    flexDirection: "column",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    backgroundImage:
      "url('https://utfs.io/f/yWKelNW56BapM3EghtsXdsCk2SihlDQqrBTpyIJxmY3OHKw4')",
    backgroundBlendMode: "multiply",
    backgroundColor: "#fbeb21",
    backgroundSize: "620px 620px",
    fontSize: 64,
    fontWeight: 700,
    padding: "3rem",
  }}>
  Hello
</div>
`,
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
