import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main(): Promise<void> {
  await prisma.ranking.create({ data: {} })
}

main()
  .catch(() => {
    process.exit(1)
  })
  .finally(async () => prisma.$disconnect)
