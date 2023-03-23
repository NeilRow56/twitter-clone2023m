import prisma from "../../../lib/prisma";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).end();
  }

  try {
    const data = await prisma.user.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return res.status(200).json(data);
  } catch (err) {
    res
      .status(403)
      .json({ err: "Error has occurred while fetching the users" });
  }
}
