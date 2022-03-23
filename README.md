# Zenjob Coding Challenge

This is a **frontend coding challenge**, containing **two different tasks**. For finishing these tasks with some documentation, you should not need to invest more than **2 hours**.

## What this is about

This repository consists of a simplified version of a **ticketing system**. We would like you to extend the functionality of it and ensure it can be used across different screen sizes.

### No bootstrapping needed

To allow you to dive right into it, the project already contains the following features:

- Endpoint to list all **people** (`GET /api/users`)
- Endpoint to list all **tickets** (`GET /api/tickets`)
- Endpoint to delete **tickets** (`DELETE /api/tickets/:ticketId`)
- UI to list all **tickets**

Feel free to adjust the exiting code as much as you like. There's a local database which you can re-seed and play around with.

### Getting started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

First, install the dependencies:

```bash
yarn install
```

Then seed the database:

```bash
yarn seed
```

Now you can start the development server:

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Product boundary conditions

There are certain specifications defined which **must** be met:

- The UI should follow the [given designs](https://www.figma.com/file/XRLLHLtNSgEKSQGE4kaFQ9/Front-end-Task?node-id=0%3A1)
- The UI should use the Material-UI component library
- Added functionality should be covered by tests

## Objective

Your job is to modify the existing UI so it satisfies the following requirements:

### Task A

**AS** a User
I am able to delete tasks

### Task B

**AS** a User
I am able to use the application in any screen size
