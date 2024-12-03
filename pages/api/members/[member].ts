import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from 'fs';

type Data = {
  response: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  const file = await fs.readFile(process.cwd() + '/lib/members.json', 'utf8');
  const fileData = JSON.parse(file);
  const { member }  = req.query;
  res.status(200).json(fileData[Number(member)]);
}