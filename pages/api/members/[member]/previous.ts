import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from 'fs';
import { getValues } from "../../../../lib/load-members";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<String>,
    ) {
  
    const file = await fs.readFile(process.cwd() + '/lib/members.json', 'utf8');
    const fileData = JSON.parse(file);
    const { member }  = req.query;
    const values = getValues(Number(member)-1, Object.keys(fileData).length) 
    res.status(200).send(fileData[values]);
  }