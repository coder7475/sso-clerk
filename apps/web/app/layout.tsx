import type { Metadata } from "next";
import { ClerkProvider, SignInButton, SignUpButton, Show, UserButton } from "@clerk/nextjs";
import localFont from "next/font/local";
import Link from "next/link";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
});

export const metadata: Metadata = {
  title: "SSO Demo - Web App",
  description: "Single Sign-On demonstration with Clerk and Next.js",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <ClerkProvider>
          <nav className="navbar">
            <div className="navbar__container">
              <Link href="/" className="navbar__brand">
                <span className="navbar__logo">🔐</span>
                <span className="navbar__title">Web App</span>
                <span className="navbar__badge">SSO Demo</span>
              </Link>
              <div className="navbar__links">
                <Link href="/" className="navbar__link navbar__link--active">Home</Link>
                <Link href="http://localhost:4001" className="navbar__link">Docs App</Link>
                <Link href="/dashboard" className="navbar__link">Dashboard</Link>
              </div>
              <div className="navbar__auth">
                <Show when="signed-out">
                  <SignInButton mode="modal">
                    <button className="navbar__btn navbar__btn--secondary">Sign In</button>
                  </SignInButton>
                  <SignUpButton mode="modal">
                    <button className="navbar__btn navbar__btn--primary">Sign Up</button>
                  </SignUpButton>
                </Show>
                <Show when="signed-in">
                  <UserButton />
                </Show>
              </div>
            </div>
          </nav>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
