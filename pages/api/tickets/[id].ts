import { PrismaClient } from '@prisma/client';
import { NextApiRequest, NextApiResponse } from 'next';
const prisma = new PrismaClient();

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const {
    query: { id },
    method,
    body,
  } = req;

  switch (method) {
    case 'DELETE': {
      const ticketId = Number(id);
      const found = await prisma.ticket.findUnique({
        where: {
          id: ticketId,
        },
      });

      if (!found) {
        res.status(404).send({ error: { message: 'Not found' } });
      }

      await prisma.ticket.delete({
        where: {
          id: ticketId,
        },
      });

      res.status(200).send({});
      break;
    }
    case 'PATCH': {
      const ticketId = Number(id);
      const found = await prisma.ticket.findUnique({
        where: {
          id: ticketId,
        },
      });

      if (!found) {
        res.status(404).send({ error: { message: 'Not found' } });
      }

      const { status } = body;

      if (!['OPEN', 'CLOSED'].includes(status)) {
        res.status(400).send({ error: { message: 'Invalid status' } });
      }

      const updatedTicket = await prisma.ticket.update({
        where: {
          id: ticketId,
        },
        data: {
          status,
        },
      });

      res.status(200).send({ data: updatedTicket });
      break;
    }
    default: {
      res.setHeader('Allow', ['DELETE', 'PATCH']);
      res.status(405).end(`Method ${method} Not Allowed`);
    }
  }
};
