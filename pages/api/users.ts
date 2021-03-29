import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      const users = await prisma.user.findMany({
        orderBy: { id: 'asc' },
      });
      res.json({ data: users });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
