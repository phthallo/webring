import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from 'fs';

type Data = {
  response: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>,
) {

  const file = await fs.readFile(process.cwd() + '/public/members.json', 'utf8');
  const fileData = JSON.parse(file);
  res.status(200).json(fileData);
}
