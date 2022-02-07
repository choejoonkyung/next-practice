// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  firstName?: string;
  lastName?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data[]>
) {
  res.status(200).json([
    {
      firstName: "John",
      lastName: "Doe",
    },
    {
      firstName: "John",
      lastName: "Doe2",
    },
    {
      firstName: "John",
      lastName: "Doe3",
    },
    {
      firstName: "John",
      lastName: "Doe4",
    },
    {
      firstName: "John",
      lastName: "Doe5",
    },
  ]);
}
