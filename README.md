# AI Short Generator

## Overview
AI Short Generator is a **Next.js** application that leverages **AI** to generate short videos. It uses **Drizzle ORM** for database management and **Neon PostgreSQL** as the database.

## Features
- AI-powered short video generation
- Next.js with **Turbopack** for fast development
- PostgreSQL database with **Drizzle ORM**
- Database management with Drizzle Kit
- Linting support with ESLint

## Tech Stack
- **Frontend:** Next.js
- **Database:** PostgreSQL (Neon)
- **ORM:** Drizzle ORM
- **Hosting:** Vercel

## Installation
1. **Clone the repository:**
   ```sh
   git clone https://github.com/yourusername/ai-short-generator.git
   cd ai-short-generator
   ```
2. **Install dependencies:**
   ```sh
   npm install
   ```
3. **Set up environment variables:**
   Create a `.env.local` file and add your database credentials:
   ```sh
   DATABASE_URL="postgresql://your-db-user:your-db-password@your-db-host/your-db-name?sslmode=require"
   ```

## Scripts
| Command        | Description                                      |
|---------------|--------------------------------------------------|
| `npm run dev` | Starts the development server using Turbopack   |
| `npm run build` | Builds the Next.js application               |
| `npm run start` | Runs the production server                   |
| `npm run lint` | Lints the code using ESLint                   |
| `npm run db:push` | Pushes schema changes to the database       |
| `npm run db:studio` | Opens the Drizzle Studio for DB management |

## Database Setup
1. **Push the database schema:**
   ```sh
   npm run db:push
   ```
2. **Open Drizzle Studio to manage your database:**
   ```sh
   npm run db:studio
   ```

## Deployment
1. **Deploy on Vercel:**
   ```sh
   vercel
   ```
2. **Configure environment variables on Vercel.**

## Contributing
Feel free to submit issues or pull requests to improve this project!

## License
This project is licensed under the **MIT License**.

---

Developed with ❤️ by [Your Name]

