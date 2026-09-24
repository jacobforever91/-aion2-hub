import {skillIconIds} from "../../../classes/classData";

const validSkillIds = new Set(Object.values(skillIconIds).flat());

function decodeHtml(value) {
  return value
    .replace(/<[^>]*>/g, "")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#39;|&#x27;/g, "'")
    .replace(/&nbsp;/g, " ")
    .trim();
}

export async function GET(_request, {params}) {
  const {id} = await params;
  if (!/^\d{8}$/.test(id) || !validSkillIds.has(id)) {
    return Response.json({error: "Habilidad no encontrada."}, {status: 404});
  }

  try {
    const response = await fetch(`https://aion2.app/es/db/skills/${id}`, {
      next: {revalidate: 3600},
      signal: AbortSignal.timeout(8000),
    });
    if (!response.ok) throw new Error(`Skill source returned ${response.status}`);

    const html = await response.text();
    const match = html.match(/class="[^"]*whitespace-pre-line[^"]*"[^>]*>\s*<span>([\s\S]*?)<\/span>/);
    const description = match ? decodeHtml(match[1]) : "";
    if (!description) throw new Error("Skill description was not found");

    return Response.json({description});
  } catch {
    return Response.json({error: "No se pudo cargar la descripción."}, {status: 502});
  }
}
