import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case 'GET':
      const tickets = await prisma.ticket.findMany({
        orderBy: { createdAt: 'desc' },
        include: { user: true },
      });

      res.json({ data: tickets });
      break;
    default:
      res.setHeader('Allow', ['GET']);
      res.status(405).end(`Method ${method} Not Allowed`);
  }
};
