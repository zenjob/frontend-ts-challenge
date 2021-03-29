This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, install dependencies:

```bash
yarn install
```

Then run the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

###Seeding a database

```bash
yarn seed
```

##API requests

`GET /api/tickets` - get all tickets

`DELETE /api/tickets/:ticketId` - delete a ticket with id = ticketId

`GET /api/users` - get all users
