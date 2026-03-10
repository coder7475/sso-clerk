# SSO Clerk POC

A Proof of Concept (POC) project demonstrating Single Sign-On (SSO) integration using Clerk authentication. This is a Turborepo monorepo containing Next.js applications with Clerk as the authentication provider.

## Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) with App Router
- **Authentication**: [Clerk](https://clerk.com/)
- **Monorepo**: [Turborepo](https://turborepo.org/)
- **Package Manager**: [pnpm](https://pnpm.io/)
- **Styling**: CSS Modules
- **Deployment**: [Vercel](https://vercel.com/)

## What's Inside

This monorepo includes the following apps and packages:

### Apps

- **web**: Main Next.js application with Clerk SSO integration
- **docs**: Documentation site built with Next.js

### Packages

- **@repo/ui**: React component library shared by both applications
- **@repo/eslint-config**: ESLint configurations
- **@repo/typescript-config**: TypeScript configurations

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm 9.0+

### Installation

```sh
pnpm install
```

### Environment Variables

Copy the example environment file and configure your Clerk keys:

```sh
cp .env.local.example .env.local
```

Required environment variables for the web app:

```env
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=pk_test_...
CLERK_SECRET_KEY=sk_test_...
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/dashboard
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=/dashboard
```

Then copy to apps:

```sh
cp .env.local apps/docs/
cp .env.local apps/web/
```

### Development

Run the development server:

```sh
pnpm dev
```

This will start both apps:
- Web app: http://localhost:4000
- Docs: http://localhost:3000

To run a specific app:

```sh
pnpm dev --filter=web
pnpm dev --filter=docs
```

### Build

Build all apps and packages:

```sh
pnpm build
```

To build a specific app:

```sh
pnpm build --filter=web
pnpm build --filter=docs
```

## Deployment

### Vercel (Recommended)

This project is configured for deployment on Vercel with monorepo support.

#### Quick Deploy

1. Fork this repository
2. Go to [Vercel](https://vercel.com/) and import the project
3. Configure the following environment variables:
   - `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` - Your Clerk publishable key
   - `CLERK_SECRET_KEY` - Your Clerk secret key
   - `NEXT_PUBLIC_CLERK_SIGN_IN_URL` - Sign-in path (e.g., /sign-in)
   - `NEXT_PUBLIC_CLERK_SIGN_UP_URL` - Sign-up path (e.g., /sign-up)
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` - Post sign-in redirect (e.g., /dashboard)
   - `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` - Post sign-up redirect (e.g., /dashboard)
4. Deploy!

#### Manual Setup

If you prefer to set up manually:

```sh
npm i -g vercel
vercel login
vercel
```

Follow the prompts to configure your project. The `vercel.json` configuration will automatically detect the monorepo structure.

#### Environment Variables on Vercel

Add the following environment variables in your Vercel project settings:

| Variable | Description |
|----------|-------------|
| `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY` | Clerk publishable key (starts with `pk_`) |
| `CLERK_SECRET_KEY` | Clerk secret key (starts with `sk_`) |
| `NEXT_PUBLIC_CLERK_SIGN_IN_URL` | Custom sign-in page URL |
| `NEXT_PUBLIC_CLERK_SIGN_UP_URL` | Custom sign-up page URL |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL` | Redirect after sign-in |
| `NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL` | Redirect after sign-up |

### Other Deployment Platforms

For other platforms, ensure you:

1. Set up environment variables
2. Configure the build command: `pnpm build`
3. Set the output directory to `.next` (for Next.js)

## Project Structure

```
.
├── apps/
│   ├── web/           # Main SSO web application
│   └── docs/         # Documentation site
├── packages/
│   ├── ui/           # Shared UI components
│   ├── eslint-config # ESLint configurations
│   └── typescript-config # TypeScript configurations
├── turbo.json        # Turborepo configuration
├── vercel.json       # Vercel deployment configuration
└── package.json      # Root package.json
```

## SSO Configuration

This POC demonstrates SSO with Clerk. To configure SSO providers:

1. Go to [Clerk Dashboard](https://dashboard.clerk.com/)
2. Select your application
3. Navigate to **User & Authentication > SSO**
4. Configure your desired identity providers (Google, GitHub, Azure AD, Okta, etc.)

## License

MIT
# sso-clerk
