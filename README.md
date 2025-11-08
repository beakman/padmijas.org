# Web para la asociación PAD Mijas

## Ideas

- Confeti si es el cumpleaños de un perro
- Regalar a un perro cosas
- Botón para imprimir un "poster de adopción", con un diseñito y la descripción del perro
- Incluir localización del perro. Por qué no extender esto a otros puntos de la península?
- Filtrado y ordenación por categorias/localizaciones
- Redirigir al idioma por defecto del navegador
- Incluir más idiomas (intentar automatizarlo con algo)
- Botón like para agregar a favoritos a un perro (local storage)

## Errores anteriores

### Formulario de contacto no funciona:

Posibles causas:

- La dirección ip del host de la web no está en el listado de ips autorizadas de Brevo.com

We have detected you are using an unrecognised IP address 87.218.16.150. If you performed this action make sure to add the new IP address in this link: https://app.brevo.com/security/authorised_ips'

- Las variables de entorno con las claves api de Brevo y Recaptcha no están activas.
- La clave API está desactivada en Brevo.com.
