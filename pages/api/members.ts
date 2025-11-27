import type { NextApiRequest, NextApiResponse } from "next";
import { loadMembersData } from "@/lib/load-members";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const members = await loadMembersData();
  res.status(200).json(members);
}
