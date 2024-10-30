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
      picture: dog.profile_picture
        ? getAssetURL(dog.profile_picture.id, "profile")
        : "https://utfs.io/f/yWKelNW56Bapwaky8AGU9BonWtzuK7ml3Ij6LP8dS5f1sETp",
    },
    props: {
      dog,
      picture: dog.profile_picture
        ? getAssetURL(dog.profile_picture.id, "profile")
        : "https://utfs.io/f/yWKelNW56Bapwaky8AGU9BonWtzuK7ml3Ij6LP8dS5f1sETp",
    },
  }));
}
type Props = InferGetStaticPropsType<typeof getStaticPaths>;

export const GET: APIRoute = async ({ props }) => {
  const { picture } = props;
  const fontFile = await fetch(
    "https://og-playground.vercel.app/inter-latin-ext-700-normal.woff",
  );
  const fontData: ArrayBuffer = await fontFile.arrayBuffer();

  return await satoriAstroOG({
    template: html`<div
      style={{
        height: '100%',
        width: '100%',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'flex-start',
        // backgroundColor: '#fefce8',
        backgroundImage: "url('https://utfs.io/f/yWKelNW56Bapwaky8AGU9BonWtzuK7ml3Ij6LP8dS5f1sETp')",
        backgroundBlendMode: 'multiply',
        backgroundColor: '#fbeb21',
        backgroundSize: '620px 620px',
        fontSize: 64,
        fontWeight: 700,
        padding: '3rem',
      }}
    >
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '3rem',
          height: '100%',
          width: '100%',
          backgroundColor: '#fefce8',
          borderRadius: '20px',
          borderWidth: '3px',
          borderColor: '#000',
          boxShadow: '5px 5px 0px 0px rgba(0,0,0,1.0)',
          padding: '1rem 3rem',
        }}
      >
        <img
          src=${picture}
          alt={name}
          width={350}
          height={350}
          style={{
            borderWidth: '3px',
            borderColor: '#000',
            borderRadius: '50%',
            objectFit: 'cover',
            boxShadow: '0px 15px 10px -15px rgba(0,0,0,0.5)',
          }}
        />
        <div
          style={{
            position: 'relative',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            marginTop: '0',
          }}
        >
          <h3 style={{ marginBottom: '1rem', fontFamily: 'Manrope ExtraBold' }}>{name}</h3>
          <div
            style={{ marginBottom: '0.7rem', fontSize: '1.6rem', alignItems: 'center', display: 'flex', gap: '2rem' }}
          >
            <div style={{ width: '200px', fontFamily: 'Manrope Bold', fontWeight: '600', color: 'rgb(107 114 128)' }}>
              Age
            </div>
            <div style={{ fontFamily: 'Manrope Regular', fontWeight: '400', color: 'rgb(17 24 39)' }}>{ageTimeAgo}</div>
          </div>
          <div
            style={{ marginBottom: '0.7rem', fontSize: '1.6rem', alignItems: 'center', display: 'flex', gap: '2rem' }}
          >
            <div style={{ width: '200px', fontFamily: 'Manrope Bold', fontWeight: '600', color: 'rgb(107 114 128)' }}>
              Gender
            </div>
            <div
              style={{
                fontFamily: 'Manrope Regular',
                textTransform: 'capitalize',
                fontWeight: '400',
                color: 'rgb(17 24 39)',
              }}
            >
              {gender}
            </div>
          </div>

          
        </div>
        <div style={{ display: 'flex', position: 'absolute', bottom: '20px', right: '20px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <img src="https://padmijas.org/logo.png" width={56} height={56} />
            <div style={{ fontFamily: 'Manrope ExtraBold', fontSize: '2rem', fontWeight: 500, color: '#000' }}>PAD</div>
          </div>
        </div>
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
