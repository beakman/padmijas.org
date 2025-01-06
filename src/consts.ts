// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

import { type Multilingual } from "@/i18n";

export const SITE_TITLE: string | Multilingual = {
  en: "🐾 PAD &mdash; Domestic Animal Shelter",
  es: "🐾 PAD &mdash; Protectora de Animales Domésticos",
};

export const SITE_DESCRIPTION: string | Multilingual = {
  es: "En PAD, nos dedicamos al rescate y adopción de animales domésticos. Ayuda a cambiar la vida de perros y gatos que buscan un hogar amoroso.",
  en: "PAD is dedicated to rescuing and adopting domestic animals. Help change the life of dogs and cats who are searching for a loving home.",
};

export const X_ACCOUNT: string | Multilingual = "@padmijas";

export const routes = {
  en: {
    "nuestros-perros": "our-dogs",
    voluntariado: "volunteer",
    contacto: "contact",
  },
};

export const uiStrings = {
  back: {
    en: "Back",
    es: "Volver",
  },
  warning: {
    en: "Hey!",
    es: "Aviso",
  },
  moreInfo: {
    en: "More info",
    es: "Más información",
  },
  donate: {
    en: "Donate",
    es: "Donar",
  },
  donateHref: {
    en: "/en/donations",
    es: "/es/donaciones",
  },
};

export const contactForm = {
  successMessage: {
    en: "Thank you for your message. We will get back to you soon.",
    es: "Gracias por tu mensaje. Te contactaremos pronto.",
  },
  errorMessage: {
    en: "Something went wrong. Please try again later.",
    es: "Algo salió mal. Por favor, inténtalo de nuevo o contáctanos por correo electrónico.",
  },
  nameLabel: {
    en: "Name",
    es: "Nombre",
  },
  namePlaceholder: {
    en: "Your name",
    es: "Tu nombre",
  },
  messageLabel: {
    en: "Message",
    es: "Mensaje",
  },
  messagePlaceholder: {
    en: "Your message",
    es: "Tu mensaje",
  },
  submitButton: {
    en: "Submit",
    es: "Enviar",
  },
  errorInvalidName: {
    en: "Please enter a username.",
    es: "Por favor, introduce tu nombre.",
  },
  errorInvalidEmail: {
    en: "Email is not valid.",
    es: "El correo electrónico no es válido.",
  },
  errorInvalidMessage: {
    en: "Your message is too short.",
    es: "Tu mensaje es demasiado corto.",
  },
  errorInvalidCaptcha: {
    en: "Invalid captcha.",
    es: "Captcha inválido.",
  },
  disclaimer: {
    en: "By submitting this form, you acknowledge and agree to the collection of your personal information.",
    es: "Al enviar este formulario de contacto, reconoces y aceptas la recopilación de tu información personal.",
  },
};

export const petCard = {
  isAdopted: {
    en: "Adopted",
    es: "Adoptado",
  },
  isReserved: {
    en: "Reserved",
    es: "Reservado",
  },
};

export const petStatus = {
  adopted: {
    en: "Adopted",
    es: "Adoptado",
  },
  reserved: {
    en: "Reserved",
    es: "Reservado",
  },
};

export const singleDog = {
  adoptmeButton: {
    en: "Adopt me",
    es: "Adoptame",
  },
  sizeLabel: {
    en: "Size",
    es: "Tamaño",
  },
  breedLabel: {
    en: "Breed",
    es: "Raza",
  },
  genderLabel: {
    en: "Gender",
    es: "Género",
  },
  male: {
    en: "Male",
    es: "Masculino",
  },
  female: {
    en: "Female",
    es: "Femenino",
  },
  birthDateLabel: {
    en: "Birth Date",
    es: "Fecha de nacimiento",
  },
  vaccinatedLabel: {
    en: "Vaccinated",
    es: "Vacunado",
  },
  microchippedLabel: {
    en: "Microchipped",
    es: "Microchip",
  },
  sterilizedLabel: {
    en: "Sterilized",
    es: "Esterilizado",
  },
};

export const NOT_TRANSLATED_CAUTION: string | Multilingual = {
  en: "This page is not available in your language.",
};

export const tablerIconMap = {
  supervised_user_circle: "tabler:user-circle",
  fire_truck: "tabler:truck",
  home: "tabler:home-heart",
};
