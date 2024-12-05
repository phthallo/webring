import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from 'fs';
import { getValues } from "../../../lib/load-members";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>,
  ) {

  const file = await fs.readFile(process.cwd() + '/lib/members.json', 'utf8');
  const fileData = JSON.parse(file);
  let { member, style, format }  = req.query;
  let length = Object.keys(fileData).length;
  let mem = Number(member);
  let values = [getValues(mem-1, length), getValues(mem, length), getValues(mem+1, length)] // get values circular-ly
  if (!style){ style = "" };
  let output = [`<a href = "${process.env.BASE_URL}">placeholder</a>`];

  if (format == "image"){
    output.unshift(`<a target="_blank" rel="noopener" href = "${fileData[values[0]]['website']}"><img style = "vertical-align:middle" src = ${fileData[values[0]]['img']} alt = ${fileData[values[0]]['description']}/></a> ← `)
    output.push(` → <a target="_blank" rel="noopener" href = "${fileData[values[2]]['website']}"><img style = "vertical-align:middle" src = ${fileData[values[2]]['img']} alt = ${fileData[values[2]]['description']}/></a>`)
  } else if (format == "text"){
    output.unshift(`<a target="_blank" rel="noopener" href = "${fileData[values[0]]['website']}">${fileData[values[0]]['name']}</a>  ← `)
    output.push(` → <a target="_blank" rel="noopener" href = "${fileData[values[2]]['website']}">${fileData[values[2]]['name']}</a>`)
  } else if (format == "minimal"){
    output.unshift(`<a target="_blank" rel="noopener" href = "${fileData[values[0]]['website']}"> ← </a>`)
    output.push(`<a target="_blank" rel="noopener" href = "${fileData[values[2]]['website']}"> → </a>`)
  }

  const data =  `
<html>
<head>
<meta name="color-scheme" content="light dark">
</head>
<style type="text/css">
  a {
    text-decoration: none;
    }
  a, a:visited {
    color: inherit;
  }

</style>
<body>
  <div style = ${style}>
    ${output.join("")}
  </div>
</body>
</html>
  `
  res.status(200).send(data);
}