# Medición SEO y rendimiento tras despliegue

Fecha de preparación: 2026-06-03

## Estado

La medición PageSpeed se intentó contra `https://micv-jet.vercel.app/`, pero la API pública devolvió `429 RESOURCE_EXHAUSTED` por cuota diaria agotada del servicio `pagespeedonline.googleapis.com`.

Search Console no se puede consultar desde este entorno sin acceso autenticado a la propiedad del dominio.

## Qué medir cuando esté desplegado

1. **PageSpeed Insights**
   - URL principal: `https://micv-jet.vercel.app/`
   - Nueva landing: `https://micv-jet.vercel.app/automatizacion-ia`
   - Casos: `https://micv-jet.vercel.app/casos`
   - Versión B: `https://micv-jet.vercel.app/tecnico`
   - Revisar móvil y escritorio.
   - Prioridad: Performance, Accessibility, Best Practices, SEO.

2. **Search Console**
   - Enviar `https://micv-jet.vercel.app/sitemap.xml`.
   - Inspeccionar indexación de:
     - `/`
     - `/automatizacion-ia`
     - `/casos`
     - `/tecnico`
   - Revisar consultas por intención:
     - desarrollo web a medida
     - automatización con IA
     - técnico de formación
     - LMS Moodle FUNDAE
     - programaciones SEPE

3. **Ajuste de snippets**
   - Si una página aparece con muchas impresiones y bajo CTR, ajustar `<title>` y `meta description`.
   - Si una consulta relevante entra en una página incorrecta, reforzar enlaces internos y copy.
   - Si `/tecnico` compite con `/docencia`, separar mejor “gestión técnica LMS/FUNDAE” de “impartición docente”.

## Objetivos mínimos

- SEO técnico PageSpeed: 90+.
- Accessibility: 90+.
- Best Practices: 90+.
- Sin errores de indexación en Search Console.
- Cada página principal indexada con canonical correcto.
