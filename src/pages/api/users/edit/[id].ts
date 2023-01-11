import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'db';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { id } = req.query;
  const { name, image, points } = req.body;

  try {
    const response = await prisma.user.update({
      where: {
        id: String(id),
      },
      data: {
        name,
        image,
        points,
      },
    });
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao consultar ranking de usuários' });
  }
}
