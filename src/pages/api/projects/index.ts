import { NextApiRequest, NextApiResponse } from 'next';
import { prisma } from 'db';

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    const response = await prisma.project.findMany();
    res.status(200).json(response);
  } catch (err) {
    res.status(400).json({ message: 'Erro ao pegar os projetos.' });
  }
}
