import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  const { id } = req.query
  try {
    const response = await prisma.user.findUnique({
      where: {
        id: String(id)
      }
    })
    res.status(200).json(response)
  } catch (err) {
    res.status(400).json({ message: 'Erro ao consultar ranking de usuários' })
  }
}
