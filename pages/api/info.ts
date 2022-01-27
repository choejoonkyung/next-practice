// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  success?: boolean;
  name?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const token = req.headers?.authentication as string;

  if (!token) {
    res.status(403).json({ success: false });
  }

  res
    .setHeader("x-refresh-token", `${token + Math.random()}`)
    .status(200)
    .json({ name: "John Doe" });
}
