import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from 'fs';

function getVal(index: number, membersCount: number){
  let iter = [...Array(membersCount).keys()]
  return iter[(index % iter.length + iter.length) % iter.length]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<String>,
  ) {

  const file = await fs.readFile(process.cwd() + '/public/members.json', 'utf8');
  const fileData = JSON.parse(file);
  let { member, style, type }  = req.query;
  let length = Object.keys(fileData).length;
  let mem = Number(member);
  let values = [getVal(mem-1, length), getVal(mem, length), getVal(mem+1, length)]
  if (!style){ style = "" };
  let output = "";
  for (let i=0; i<3; i++){
    if (type == "image"){
      output +=  `<a href = "${fileData[values[0]]['website']}"><img style = "vertical-align:middle" src = ${fileData[values[i]]['img']} alt = ${fileData[values[i]]['description']}/></a>`
    } else if (type == "text"){
        output += `<a href = "${fileData[values[i]]['website']}">${fileData[values[i]]['name']}</a>`
    }
    if (i == 0){
      output += " ← "
    }
    if (i == 1){
      output += " → "
    }
  }  
  const data =  `
  <div style = "${style}">
    ${output}
  </div>`


  res.status(200).send(data);
}