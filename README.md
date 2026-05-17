# Universal Shift Workflow

## Nasazení na Vercel

### 1) Připrav databázi
Aplikace používá PostgreSQL přes Prisma. Na Vercelu si vytvoř Postgres (např. Vercel Postgres, Neon, Supabase) a získej connection string.

### 2) Nastav Environment Variables ve Vercel projektu
V **Project Settings → Environment Variables** nastav minimálně:

- `DATABASE_URL` – PostgreSQL connection string
- `NEXTAUTH_SECRET` – dlouhý náhodný secret (např. 32+ znaků)
- `NEXTAUTH_URL` – veřejná URL aplikace (např. `https://moje-app.vercel.app`)

### 3) Import repozitáře do Vercelu
1. Vercel Dashboard → **Add New Project**
2. Vyber tento repozitář
3. Framework se detekuje jako Next.js automaticky
4. Deploy

Repo obsahuje `vercel.json` + `postinstall` skript pro automatické `prisma generate` během buildu.

### 4) První migrace databáze
Po prvním deployi je potřeba aplikovat migrace do produkční DB (z lokálu nebo CI):

```bash
npx prisma migrate deploy
```

> Pozn.: pokud zatím nemáš migrační soubory, nejdřív je vytvoř (`prisma migrate dev`) a commitni složku `prisma/migrations`.

## Lokální spuštění

```bash
npm install
npm run dev
```

Aplikace poběží na `http://localhost:3000`.
