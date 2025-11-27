import type { NextApiRequest, NextApiResponse } from "next";
import { loadMemberOffset } from "@/lib/load-members";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<String>,
    ) {
    const { member }  = req.query as {member: string};
    const offsetMember = await loadMemberOffset(member, 1);
    res.status(200).json(offsetMember);
  }