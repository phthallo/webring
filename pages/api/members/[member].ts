import type { NextApiRequest, NextApiResponse } from "next";
import { promises as fs } from 'fs';
import { loadSpecificMember } from "@/lib/load-members";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { member } = req.query as { member: string };
  const fileData = loadSpecificMember(member);
  res.status(200).json(fileData);
}