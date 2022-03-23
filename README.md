# Zenjob Coding Challenge

This is a **frontend coding challenge**, containing **three different tasks**. For finishing these tasks with some documentation, you should not need to invest more than **2 hours**.

## Introduction

This repository consists of a simplified version of a **ticketing system**.

### No bootstrapping needed

To allow you to dive right into it, the project already contains the following features:

- Endpoint to list all **users**
- Endpoint to list all **tickets**
- Endpoint to patch **tickets**
- Endpoint to delete **tickets**
- UI to list all **tickets**

Feel free to adjust the exiting code as much as you like. There's a local database which you can re-seed and play around with.

### Getting started

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

Please use **NodeJS v14.19.1** for the following instructions.

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

- The UI should follow the [given designs](https://www.figma.com/file/xnzjiF7RWQSUegABiWEE6V/Front-end-task)
- The UI should use the Material-UI component library
- Added functionality should be covered by tests

### API endpoints

`GET /api/tickets` - List all tickets

`DELETE /api/tickets/:ticketId` - Delete a ticket with id = ticketId

`PATCH /api/tickets/:ticketId` - Patches a ticket with id = ticketId. Only the status can be updated, as per the example body:

```
  {
    "status": "OPEN" // Can be "OPEN" or "CLOSED"
  }
```

`GET /api/users` - List all users

## Objective

Your job is to modify the existing UI so it satisfies the following requirements:

### Task A

**AS** a *User* **I CAN** delete tasks

### Task B

**AS** a *User* **I CAN** set open *tickets* as closed

**AS** a *User* **I CAN** set closed *tickets* as open

### Task C

**AS** a *User* **I CAN** use the application in any screen size

## Evaluation criteria

Your submission will be evaluated by at least 2 people on the following criteria:

- Completeness
- UI design
- Tests
- Solution design
- Code styling

## Final notes

If you have any questions, feel free to reach out to us at any time.
