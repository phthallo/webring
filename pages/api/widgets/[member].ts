import type { NextApiRequest, NextApiResponse } from "next";
import { loadMembers, loadSpecificMember, getValues } from "@/lib/load-members";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>,
  ) {

  let { member, style, format }  = req.query;
  if (!style) style = "";

  const allMembers = await loadMembers();
  const idx = allMembers.findIndex(
    (name) => String(name).toLowerCase() === String(member).toLowerCase()
  );
  const length = allMembers.length;
  const safeIdx = idx !== -1 ? idx : 0;
  const prevIdx = getValues(safeIdx - 1, length);
  const nextIdx = getValues(safeIdx + 1, length);

  const [prevMember, nextMember] = await Promise.all([
    loadSpecificMember(allMembers[prevIdx]),
    loadSpecificMember(allMembers[nextIdx]),
  ]);

  const esc = (v: any) => {
    if (v === undefined || v === null) 
      return "";
    return String(v)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#39;');
  }

  let output = [`<a target="_blank" rel="noopener" href="${esc(process.env.BASE_URL)}">placeholder</a>`];

  if (format == "image"){
    output.unshift(`<a target="_blank" rel="noopener" href="${esc(prevMember.website)}"><img style="vertical-align:middle" src="${esc(prevMember.img)}" alt="${esc(prevMember.description)}"/></a> ← `)
    output.push(` → <a target="_blank" rel="noopener" href="${esc(nextMember.website)}"><img style="vertical-align:middle" src="${esc(nextMember.img)}" alt="${esc(nextMember.description)}"/></a>`)
  } else if (format == "text"){
    output.unshift(`<a target="_blank" rel="noopener" href="${esc(prevMember.website)}">${esc(prevMember.name)}</a>  ← `)
    output.push(` → <a target="_blank" rel="noopener" href="${esc(nextMember.website)}">${esc(nextMember.name)}</a>`)
  } else if (format == "minimal"){
    output.unshift(`<a target="_blank" rel="noopener" href="${esc(prevMember.website)}"> ← </a>`)
    output.push(`<a target="_blank" rel="noopener" href="${esc(nextMember.website)}"> → </a>`)
  }

  const data =  `
<!DOCTYPE html>
<html>
<head>
<meta name="color-scheme" content="light dark">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8" />
</head>
<style type="text/css">
  a {
    text-decoration: none;
    }
  a, a:visited {
    color: inherit;
  }
  html, body { 
    overflow: hidden; 
    background: transparent; 
    height: 100%; 
  }
    

</style>
</body>
  <div style="${esc(style)}">
    ${output.join("")}
  </div>
</body>
</html>  `
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.status(200).send(data);
}