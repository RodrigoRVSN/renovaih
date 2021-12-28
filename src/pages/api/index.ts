import { NextApiRequest, NextApiResponse } from 'next'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
): Promise<void> {
  try {
    console.log('🔥')
    const response = await prisma.ranking.findMany()
    console.log(response)
    res.status(200).json(response)
  } catch (err) {
    console.log(err)
  }
}
